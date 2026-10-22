function MarketHeader() {
  return (
    <div className="flex flex-wrap items-center justify-between gap-4">
      <div>
        <div className="mb-2 flex items-center gap-2 text-sm text-app-text-muted">
          <span>خانه</span>
          <span>/</span>
          <span className="text-app-primary">معامله آسان</span>
        </div>
        <h1 className="text-2xl font-black tracking-tight sm:text-3xl">
          معامله ارز دیجیتال
        </h1>
        <p className="mt-2 text-sm text-app-text-muted">
          بازار رو بررسی کن و معاملاتت رو مدیریت کن.
        </p>
      </div>

      <div className="flex items-center gap-3 rounded-2xl border border-app-text/10 bg-app-surface px-4 py-3 shadow-lg shadow-black/5">
        <span className="relative flex h-2.5 w-2.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
        </span>
        <div>
          <p className="text-xs text-app-text-muted">وضعیت بازار</p>
          <p className="mt-1 text-sm font-bold text-emerald-500">بازار فعال</p>
        </div>
      </div>
    </div>
  );
}

export default MarketHeader;
