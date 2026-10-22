function MarketHistory() {
  return (
    <div className="min-w-0  overflow-hidden rounded-2xl border border-app-text/10 bg-app-surface xl:col-span-5">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-app-text/10 p-4 sm:p-5">
        <div>
          <h2 className="font-black">تاریخچه معاملات</h2>
          <p className="mt-1 text-xs text-app-text-muted">
            آخرین فعالیت‌های حساب
          </p>
        </div>
        <button className="text-xs font-semibold text-app-primary">
          مشاهده همه ←
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[450px] text-right text-sm">
          <thead className="bg-app-background/60 text-xs text-app-text-muted">
            <tr>
              <th className="p-4 font-medium">ارز</th>
              <th className="p-4 font-medium">نوع</th>
              <th className="p-4 font-medium">قیمت</th>
              <th className="p-4 font-medium">زمان</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-app-text/5 transition hover:bg-app-background/40">
              <td className="p-4 font-semibold">BTC/USDT</td>
              <td className="p-4 text-emerald-500">خرید</td>
              <td className="p-4">67,210.45</td>
              <td className="p-4 text-xs text-app-text-muted">14:32</td>
            </tr>
            <tr className="border-b border-app-text/5 transition hover:bg-app-background/40">
              <td className="p-4 font-semibold">ETH/USDT</td>
              <td className="p-4 text-red-500">فروش</td>
              <td className="p-4">3,245.12</td>
              <td className="p-4 text-xs text-app-text-muted">13:17</td>
            </tr>
            <tr className="border-b border-app-text/5 transition hover:bg-app-background/40">
              <td className="p-4 font-semibold">SOL/USDT</td>
              <td className="p-4 text-emerald-500">خرید</td>
              <td className="p-4">142.76</td>
              <td className="p-4 text-xs text-app-text-muted">12:45</td>
            </tr>
            <tr className="transition hover:bg-app-background/40">
              <td className="p-4 font-semibold">BNB/USDT</td>
              <td className="p-4 text-red-500">فروش</td>
              <td className="p-4">581.32</td>
              <td className="p-4 text-xs text-app-text-muted">11:22</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MarketHistory;
