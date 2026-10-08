"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function ErrorPage({ reset }: { error: Error & { digest?: string }; reset?: () => void }) {
  const router = useRouter();

  return (
    <main className="section">
      <div className="container prose">
        <h1>पृष्ठ लोड नहीं हो सका</h1>
        <p>कृपया फिर से प्रयास करें या मुख्य पृष्ठ पर लौटें।</p>
        <div className="hero-actions">
          <button className="button" onClick={() => (typeof reset === "function" ? reset() : router.replace("/"))}>
            फिर से प्रयास करें
          </button>
          <Link className="button secondary" href="/">
            होम पर जाएँ
          </Link>
        </div>
      </div>
    </main>
  );
}
