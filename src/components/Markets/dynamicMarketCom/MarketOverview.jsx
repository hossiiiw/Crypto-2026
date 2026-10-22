export default function MarketOverview() {
  return (
    <>
      <section className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        <div className="rounded-2xl border border-app-text/10 bg-app-surface p-4 transition hover:border-app-primary/40 sm:p-5">
          <p className="text-sm text-app-text-muted">ارزش کل بازار</p>
          <h3 className="mt-3 text-xl font-black sm:text-2xl">$2.48T</h3>
          <p className="mt-2 text-xs text-emerald-500">+2.45% در ۲۴ ساعت</p>
        </div>

        <div className="rounded-2xl border border-app-text/10 bg-app-surface p-4 transition hover:border-app-primary/40 sm:p-5">
          <p className="text-sm text-app-text-muted">حجم معاملات ۲۴ ساعت</p>
          <h3 className="mt-3 text-xl font-black sm:text-2xl">$86.2B</h3>
          <p className="mt-2 text-xs text-emerald-500">+8.21% نسبت به دیروز</p>
        </div>

        <div className="rounded-2xl border border-app-text/10 bg-app-surface p-4 transition hover:border-app-primary/40 sm:p-5">
          <p className="text-sm text-app-text-muted">بیت‌کوین</p>
          <h3 className="mt-3 text-xl font-black sm:text-2xl">$67,432.12</h3>
          <p className="mt-2 text-xs text-emerald-500">+2.45%</p>
        </div>

        <div className="rounded-2xl border border-app-text/10 bg-gradient-to-br from-app-primary/20 to-app-surface p-4 sm:p-5">
          <p className="text-sm text-app-text-muted">موجودی حساب</p>
          <h3 className="mt-3 text-xl font-black sm:text-2xl">1,250.00 USDT</h3>
          <p className="mt-2 text-xs text-app-text-muted">
            موجودی قابل استفاده
          </p>
        </div>
      </section>
    </>
  );
}
