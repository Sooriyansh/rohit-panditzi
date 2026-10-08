import "server-only";
import { createHmac, timingSafeEqual } from "node:crypto";

export const adminCookieName = "admin_session";
export const adminSessionMaxAge = 8 * 60 * 60;

const sessionTtlMs = adminSessionMaxAge * 1000;

function getAdminUser() {
  return process.env.ADMIN_USER?.trim() || "";
}

function getAdminPassword() {
  return process.env.ADMIN_PASSWORD || "";
}

function getSecret() {
  return process.env.ADMIN_SESSION_SECRET || getAdminPassword();
}

function safeEqual(a: string, b: string) {
  const left = Buffer.from(a);
  const right = Buffer.from(b);

  return left.length === right.length && timingSafeEqual(left, right);
}

function sign(payload: string) {
  return createHmac("sha256", getSecret()).update(payload).digest("base64url");
}

export function isAdminConfigured() {
  return Boolean(getAdminUser() && getAdminPassword());
}

export function verifyAdminCredentials(username: string, password: string) {
  if (!isAdminConfigured()) return false;

  return safeEqual(username, getAdminUser()) && safeEqual(password, getAdminPassword());
}

export function createAdminSession() {
  const payload = Buffer.from(
    JSON.stringify({
      username: getAdminUser(),
      issuedAt: Date.now(),
    }),
  ).toString("base64url");

  return `${payload}.${sign(payload)}`;
}

export function verifyAdminSession(token: string | undefined) {
  if (!token || !isAdminConfigured()) return false;

  const parts = token.split(".");

  if (parts.length !== 2) return false;

  const [payload, signature] = parts;
  let decoded: { username?: unknown; issuedAt?: unknown };

  try {
    decoded = JSON.parse(Buffer.from(payload, "base64url").toString("utf8")) as {
      username?: unknown;
      issuedAt?: unknown;
    };
  } catch {
    return false;
  }

  const createdAt = Number(decoded.issuedAt);

  if (decoded.username !== getAdminUser() || !Number.isFinite(createdAt)) return false;
  if (Date.now() - createdAt > sessionTtlMs) return false;

  const expected = sign(payload);

  return safeEqual(signature, expected);
}

export function getBasicAuthCredentials(header: string | null) {
  if (!header?.startsWith("Basic ")) return null;

  try {
    const decoded = Buffer.from(header.slice(6), "base64").toString("utf8");
    const separator = decoded.indexOf(":");

    if (separator === -1) return null;

    return {
      username: decoded.slice(0, separator),
      password: decoded.slice(separator + 1),
    };
  } catch {
    return null;
  }
}
