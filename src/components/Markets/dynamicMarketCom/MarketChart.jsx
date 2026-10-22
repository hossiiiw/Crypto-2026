function MarketChart() {
  return (
    <div className="overflow-hidden rounded-2xl border border-app-text/10 bg-app-surface shadow-xl shadow-black/5">
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-app-text/10 p-4 sm:p-5">
        <div className="flex items-center gap-3">
          <div className="grid h-12 w-12 place-items-center rounded-2xl bg-orange-500/10 text-2xl">
            ₿
          </div>
          <div>
            <h2 className="font-black">BTC / USDT</h2>
            <p className="mt-1 text-xs text-app-text-muted">
              Bitcoin · بیت‌کوین
            </p>
          </div>
        </div>

        <div className="text-left">
          <p className="text-xl font-black sm:text-2xl">$67,432.12</p>
          <p className="mt-1 text-sm font-semibold text-emerald-500">
            +2.45% ▲
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 border-b border-app-text/10 p-4 sm:grid-cols-4">
        <div>
          <p className="text-xs text-app-text-muted">بالاترین قیمت</p>
          <p className="mt-2 text-sm font-bold">68,210.45</p>
        </div>
        <div>
          <p className="text-xs text-app-text-muted">پایین‌ترین قیمت</p>
          <p className="mt-2 text-sm font-bold">65,872.31</p>
        </div>
        <div>
          <p className="text-xs text-app-text-muted">حجم معاملات</p>
          <p className="mt-2 text-sm font-bold">24,567 BTC</p>
        </div>
        <div>
          <p className="text-xs text-app-text-muted">تغییر ۲۴ ساعته</p>
          <p className="mt-2 text-sm font-bold text-emerald-500">+2.45%</p>
        </div>
      </div>

      <div className="p-4 sm:p-5">
        <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap gap-1 rounded-xl bg-app-background p-1">
            <button className="rounded-lg px-3 py-2 text-xs text-app-text-muted">
              15m
            </button>
            <button className="rounded-lg bg-app-primary px-3 py-2 text-xs font-bold text-white shadow-lg shadow-app-primary/20">
              1H
            </button>
            <button className="rounded-lg px-3 py-2 text-xs text-app-text-muted">
              4H
            </button>
            <button className="rounded-lg px-3 py-2 text-xs text-app-text-muted">
              1D
            </button>
            <button className="rounded-lg px-3 py-2 text-xs text-app-text-muted">
              1W
            </button>
          </div>

          <span className="text-xs text-app-text-muted">نمودار قیمت</span>
        </div>

        <div className="relative flex h-64 items-center justify-center overflow-hidden rounded-xl border border-app-text/5 bg-app-background/70 sm:h-80">
          <div className="absolute inset-0 bg-gradient-to-t from-app-primary/5 to-transparent" />

          <svg
            viewBox="0 0 600 300"
            className="absolute inset-0 h-full w-full"
            preserveAspectRatio="none"
            aria-label="نمای ظاهری نمودار قیمت"
          >
            <defs>
              <linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#818cf8" stopOpacity=".22" />
                <stop offset="100%" stopColor="#818cf8" stopOpacity="0" />
              </linearGradient>
            </defs>

            {[50, 100, 150, 200, 250].map((y) => (
              <line
                key={y}
                x1="0"
                y1={y}
                x2="600"
                y2={y}
                stroke="currentColor"
                strokeOpacity=".08"
                strokeDasharray="4 5"
              />
            ))}

            <path
              d="M0 240 L35 220 L65 235 L95 185 L125 198 L155 155 L185 173 L215 125 L245 140 L275 95 L305 120 L335 85 L365 130 L395 108 L425 140 L455 92 L485 105 L515 65 L545 82 L575 45 L600 55 L600 300 L0 300 Z"
              fill="url(#chartFill)"
            />

            <path
              d="M0 240 L35 220 L65 235 L95 185 L125 198 L155 155 L185 173 L215 125 L245 140 L275 95 L305 120 L335 85 L365 130 L395 108 L425 140 L455 92 L485 105 L515 65 L545 82 L575 45 L600 55"
              fill="none"
              stroke="#818cf8"
              strokeWidth="3"
              vectorEffect="non-scaling-stroke"
            />
          </svg>

          <div className="absolute right-3 top-3 rounded-lg border border-app-primary/20 bg-app-surface/90 px-3 py-2 text-xs text-app-primary backdrop-blur">
            BTC / USDT
          </div>

          <div className="absolute bottom-3 left-3 rounded-lg bg-app-surface/90 px-3 py-2 text-xs text-app-text-muted backdrop-blur">
            Chart Preview
          </div>
        </div>

        <div className="mt-4 flex flex-wrap justify-between gap-3 text-xs text-app-text-muted">
          <span>حجم معاملات</span>
          <span>نمودار نمایشی · آماده اتصال به چارت واقعی</span>
        </div>
      </div>
    </div>
  );
}

export default MarketChart;
