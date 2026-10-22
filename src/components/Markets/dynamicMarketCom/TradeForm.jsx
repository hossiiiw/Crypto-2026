function TradeForm() {
  return (
    <div className="w-[50%] mt-4 space-y-4 2xl:col-span-3">
      <div className="rounded-2xl border border-app-text/10 bg-app-surface p-4 shadow-xl shadow-black/5 sm:p-5">
        <div className="mb-5 flex items-center justify-between">
          <h2 className="text-lg font-black">ثبت سفارش</h2>
          <span className="rounded-lg bg-app-primary/10 px-3 py-2 text-xs font-semibold text-app-primary">
            BTC / USDT
          </span>
        </div>

        <div className="mb-5 grid grid-cols-2 gap-2 rounded-xl bg-app-background p-1">
          <button className="rounded-lg bg-emerald-500 py-3 text-sm font-bold text-white shadow-lg shadow-emerald-500/10">
            خرید
          </button>
          <button className="rounded-lg py-3 text-sm font-semibold text-app-text-muted transition hover:bg-red-500/10 hover:text-red-500">
            فروش
          </button>
        </div>

        <div className="mb-5 grid grid-cols-2 gap-2">
          <button className="rounded-xl border border-app-primary/40 bg-app-primary/10 py-2.5 text-sm font-semibold text-app-primary">
            محدود (Limit)
          </button>
          <button className="rounded-xl border border-app-text/10 py-2.5 text-sm text-app-text-muted">
            بازار (Market)
          </button>
        </div>

        <div className="space-y-5">
          <div>
            <label className="mb-2 block text-sm text-app-text-muted">
              قیمت هر واحد
            </label>
            <div className="flex items-center rounded-xl border border-app-text/10 bg-app-background p-3 transition focus-within:border-app-primary/60">
              <input
                type="text"
                placeholder="67,432.12"
                className="w-full min-w-0 bg-transparent text-sm font-semibold outline-none placeholder:text-app-text-muted"
              />
              <span className="text-xs text-app-text-muted">USDT</span>
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm text-app-text-muted">
              مقدار ارز
            </label>
            <div className="flex items-center rounded-xl border border-app-text/10 bg-app-background p-3 transition focus-within:border-app-primary/60">
              <input
                type="text"
                placeholder="0.00"
                className="w-full min-w-0 bg-transparent text-sm font-semibold outline-none placeholder:text-app-text-muted"
              />
              <span className="text-xs text-app-text-muted">BTC</span>
            </div>
            <div className="mt-3 flex justify-between text-xs text-app-text-muted">
              <span>25%</span>
              <span>50%</span>
              <span>75%</span>
              <span>100%</span>
            </div>
            <div className="mt-2 h-1.5 rounded-full bg-app-background">
              <div className="h-1.5 w-1/4 rounded-full bg-app-primary" />
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm text-app-text-muted">
              مبلغ کل
            </label>
            <div className="flex items-center justify-between rounded-xl border border-app-text/10 bg-app-background p-3">
              <span className="text-sm font-bold">0.00</span>
              <span className="text-xs text-app-text-muted">USDT</span>
            </div>
          </div>

          <div className="space-y-3 rounded-xl bg-app-background/70 p-4">
            <div className="flex justify-between text-xs">
              <span className="text-app-text-muted">موجودی قابل استفاده</span>
              <span className="font-semibold">1,250.00 USDT</span>
            </div>
            <div className="flex justify-between text-xs">
              <span className="text-app-text-muted">کارمزد تقریبی</span>
              <span className="font-semibold">0.1%</span>
            </div>
          </div>

          <button className="w-full rounded-xl bg-gradient-to-l from-emerald-500 to-emerald-400 py-3.5 font-bold text-white shadow-lg shadow-emerald-500/20 transition hover:-translate-y-0.5 hover:shadow-emerald-500/30">
            خرید BTC
          </button>
        </div>

        <p className="mt-4 text-center text-xs leading-6 text-app-text-muted">
          قبل از ثبت سفارش، مقدار و قیمت معامله را بررسی کنید.
        </p>
      </div>


     
    </div>
  );
}

export default TradeForm;
