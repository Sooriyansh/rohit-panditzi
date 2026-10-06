
export default function Loading() {
  return (
    <main className="section">
      <div className="container flex min-h-screen items-center justify-center">
        <div className="text-center" role="status" aria-live="polite">
          <div className="loading-mark mb-4" aria-hidden="true">
            <span className="loading-spinner" />
            <span className="loading-symbol">ॐ</span>
          </div>

          <h1 className="text-2xl font-semibold">
            Rohit Sharma Ji
          </h1>

          <p className="mt-2 text-sm opacity-70">
            पृष्ठ लोड हो रहा है…
          </p>
        </div>
      </div>
    </main>
  );
}
