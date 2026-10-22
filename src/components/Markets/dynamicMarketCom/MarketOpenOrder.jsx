function MarketOpenOrder() {
  return (
    <div className="min-w-0 overflow-hidden rounded-2xl border border-app-text/10 bg-app-surface xl:col-span-7">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-app-text/10 p-4 sm:p-5">
        <div>
          <h2 className="font-black">سفارشات من</h2>
          <p className="mt-1 text-xs text-app-text-muted">
            مدیریت سفارش‌های فعال
          </p>
        </div>

        <div className="flex gap-1 rounded-xl bg-app-background p-1">
          <button className="rounded-lg bg-app-primary px-3 py-2 text-xs font-bold text-white">
            همه
          </button>
          <button className="rounded-lg px-3 py-2 text-xs text-app-text-muted">
            خرید
          </button>
          <button className="rounded-lg px-3 py-2 text-xs text-app-text-muted">
            فروش
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[650px] text-right text-sm">
          <thead className="bg-app-background/60 text-xs text-app-text-muted">
            <tr>
              <th className="p-4 font-medium">جفت‌ارز</th>
              <th className="p-4 font-medium">نوع</th>
              <th className="p-4 font-medium">قیمت</th>
              <th className="p-4 font-medium">مقدار</th>
              <th className="p-4 font-medium">وضعیت</th>
              <th className="p-4 font-medium">عملیات</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-app-text/5 transition hover:bg-app-background/40">
              <td className="p-4 font-semibold">BTC/USDT</td>
              <td className="p-4 text-emerald-500">خرید</td>
              <td className="p-4">66,800.00</td>
              <td className="p-4">0.05</td>
              <td className="p-4">
                <span className="rounded-lg bg-amber-500/10 px-2.5 py-1.5 text-xs text-amber-500">
                  در انتظار
                </span>
              </td>
              <td className="p-4">
                <button className="rounded-lg bg-red-500/10 px-3 py-2 text-xs text-red-500">
                  لغو
                </button>
              </td>
            </tr>
            <tr className="border-b border-app-text/5 transition hover:bg-app-background/40">
              <td className="p-4 font-semibold">ETH/USDT</td>
              <td className="p-4 text-red-500">فروش</td>
              <td className="p-4">3,200.00</td>
              <td className="p-4">0.20</td>
              <td className="p-4">
                <span className="rounded-lg bg-amber-500/10 px-2.5 py-1.5 text-xs text-amber-500">
                  در انتظار
                </span>
              </td>
              <td className="p-4">
                <button className="rounded-lg bg-red-500/10 px-3 py-2 text-xs text-red-500">
                  لغو
                </button>
              </td>
            </tr>
            <tr className="transition hover:bg-app-background/40">
              <td className="p-4 font-semibold">SOL/USDT</td>
              <td className="p-4 text-emerald-500">خرید</td>
              <td className="p-4">140.50</td>
              <td className="p-4">1.00</td>
              <td className="p-4">
                <span className="rounded-lg bg-emerald-500/10 px-2.5 py-1.5 text-xs text-emerald-500">
                  تکمیل شده
                </span>
              </td>
              <td className="p-4 text-app-text-muted">—</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MarketOpenOrder;
