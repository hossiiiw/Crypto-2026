import { Link, useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <main
      dir="ltr"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#17152d] px-5 py-16 text-white"
    >
      {/* Background effects */}
      <div className="pointer-events-none absolute -left-32 -top-32 h-80 w-80 rounded-full bg-violet-600/20 blur-[100px]" />
      <div className="pointer-events-none absolute -bottom-32 -right-20 h-96 w-96 rounded-full bg-indigo-600/20 blur-[120px]" />

      <div className="relative mx-auto w-full max-w-3xl text-center">
        {/* Logo */}
        <Link
          to="/"
          className="mb-16 inline-flex items-center gap-2 text-xl font-black tracking-wide"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500 text-xl">
            C
          </span>
          Coinova
        </Link>

        {/* 404 */}
        <div className="relative mx-auto mb-8 w-fit">
          <div className="absolute inset-0 rounded-full bg-violet-500/20 blur-3xl" />

          <h1 className="relative text-[120px] font-black leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-violet-300 via-violet-500 to-indigo-700 sm:text-[180px]">
            404
          </h1>

          <span className="absolute -right-3 top-3 flex h-12 w-12 rotate-12 items-center justify-center rounded-2xl border border-white/10 bg-[#252044] text-2xl shadow-xl sm:-right-8 sm:top-8 sm:h-16 sm:w-16">
            ?
          </span>
        </div>

        {/* Message */}
        <div className="mx-auto max-w-xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-violet-300">
            <span className="h-2 w-2 animate-pulse rounded-full bg-violet-400" />
            Page not found
          </span>

          <h2 className="mt-6 text-3xl font-black sm:text-4xl">
            Lost in the crypto universe?
          </h2>

          <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-slate-400 sm:text-base">
            The page you're looking for doesn't exist, has been moved, or the
            link may be incorrect.
          </p>
        </div>

        {/* Actions */}
        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-violet-500 px-7 py-3.5 font-bold shadow-lg shadow-violet-500/20 transition hover:-translate-y-0.5 hover:bg-violet-400"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-5 w-5"
              aria-hidden="true"
            >
              <path d="m3 10 9-7 9 7" />
              <path d="M5 9v12h14V9M9 21v-7h6v7" />
            </svg>
            Back to Home
          </Link>

          <button
            type="button"
            onClick={() => navigate(-1)}
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-7 py-3.5 font-bold transition hover:bg-white/10"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-5 w-5"
              aria-hidden="true"
            >
              <path d="M19 12H5m7-7-7 7 7 7" />
            </svg>
            Go Back
          </button>
        </div>

        {/* Footer */}
        <div className="mx-auto mt-16 flex max-w-md items-center justify-center gap-3 text-xs text-slate-500">
          <span className="h-px flex-1 bg-white/10" />
          <span>Trade smarter. Stay ahead.</span>
          <span className="h-px flex-1 bg-white/10" />
        </div>
      </div>
    </main>
  );
}
