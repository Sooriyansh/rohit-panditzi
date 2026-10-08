import { NextResponse, type NextRequest } from "next/server";
import {
  adminCookieName,
  adminSessionMaxAge,
  createAdminSession,
  isAdminConfigured,
  verifyAdminCredentials,
} from "@/lib/adminAuth";

export const runtime = "nodejs";

export async function POST(request: NextRequest) {
  if (!isAdminConfigured()) {
    return NextResponse.json({ error: "Admin login is not configured" }, { status: 503 });
  }

  let body: Record<string, unknown>;

  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ error: "Invalid login request" }, { status: 400 });
  }

  const username = typeof body.username === "string" ? body.username : "";
  const password = typeof body.password === "string" ? body.password : "";

  if (!verifyAdminCredentials(username, password)) {
    return NextResponse.json({ error: "Invalid admin ID or password" }, { status: 401 });
  }

  const response = NextResponse.json({ ok: true }, { headers: { "Cache-Control": "no-store" } });

  response.cookies.set(adminCookieName, createAdminSession(), {
    httpOnly: true,
    maxAge: adminSessionMaxAge,
    path: "/",
    sameSite: "strict",
    secure: process.env.NODE_ENV === "production",
  });

  return response;
}
