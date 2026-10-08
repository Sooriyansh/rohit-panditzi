import { NextResponse } from "next/server";
import { adminCookieName } from "@/lib/adminAuth";

export const runtime = "nodejs";

export async function POST() {
  const response = NextResponse.json({ ok: true }, { headers: { "Cache-Control": "no-store" } });

  response.cookies.set(adminCookieName, "", {
    httpOnly: true,
    maxAge: 0,
    path: "/",
    sameSite: "strict",
    secure: process.env.NODE_ENV === "production",
  });

  return response;
}
