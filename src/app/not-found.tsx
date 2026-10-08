"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function NotFound() {
  const router = useRouter();

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      router.replace("/");
    }, 2200);

    return () => window.clearTimeout(timeout);
  }, [router]);

  return (
    <main className="section">
      <div className="container prose">
        <h1>यह पृष्ठ नहीं मिला</h1>
        <p>यह लिंक उपलब्ध नहीं है। आपको मुख्य पृष्ठ पर भेजा जा रहा है।</p>
        <Link className="button" href="/">
          होम पर जाएँ
        </Link>
      </div>
    </main>
  );
}
