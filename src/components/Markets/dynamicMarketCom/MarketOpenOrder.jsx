import { useTranslation } from "react-i18next";

function MarketOpenOrder() {
  const { t } = useTranslation();
  return (
    <div className="min-w-0 overflow-hidden rounded-2xl border border-app-text/10 bg-app-surface xl:col-span-7">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-app-text/10 p-4 sm:p-5">
        <div>
          <h2 className="font-black"> {t("market-open-order.title")}</h2>
          <p className="mt-1 text-xs text-app-text-muted">
            {t("market-open-order.subtitle")}{" "}
          </p>
        </div>

        <div className="flex gap-1 rounded-xl bg-app-background p-1">
          <button className="rounded-lg bg-app-primary px-3 py-2 text-xs font-bold text-white">
            {t("market-open-order.all")}
          </button>
          <button className="rounded-lg px-3 py-2 text-xs text-app-text-muted">
            {t("market-open-order.buy")}
          </button>
          <button className="rounded-lg px-3 py-2 text-xs text-app-text-muted">
            {t("market-open-order.sell")}
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[650px] text-right text-sm">
          <thead className="bg-app-background/60 text-xs text-app-text-muted">
            <tr>
              <th className="p-4 font-medium">{t("market-open-order.pair")}</th>
              <th className="p-4 font-medium">{t("market-open-order.type")}</th>
              <th className="p-4 font-medium">
                {t("market-open-order.price")}
              </th>
              <th className="p-4 font-medium">
                {t("market-open-order.amount")}
              </th>
              <th className="p-4 font-medium">
                {t("market-open-order.status")}
              </th>
              <th className="p-4 font-medium">
                {t("market-open-order.actions")}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-app-text/5 transition hover:bg-app-background/40">
              <td className="p-4 font-semibold">BTC/USDT</td>
              <td className="p-4 text-emerald-500">
                {t("market-open-order.buy")}
              </td>
              <td className="p-4">66,800.00</td>
              <td className="p-4">0.05</td>
              <td className="p-4">
                <span className="rounded-lg bg-amber-500/10 px-2.5 py-1.5 text-xs text-amber-500">
                  {t("market-open-order.pending")}
                </span>
              </td>
              <td className="p-4">
                <button className="rounded-lg bg-red-500/10 px-3 py-2 text-xs text-red-500">
                  {t("market-open-order.cancel")}
                </button>
              </td>
            </tr>
            <tr className="border-b border-app-text/5 transition hover:bg-app-background/40">
              <td className="p-4 font-semibold">ETH/USDT</td>
              <td className="p-4 text-red-500">
                {t("market-open-order.sell")}
              </td>
              <td className="p-4">3,200.00</td>
              <td className="p-4">0.20</td>
              <td className="p-4">
                <span className="rounded-lg bg-amber-500/10 px-2.5 py-1.5 text-xs text-amber-500">
                  {t("market-open-order.pending")}
                </span>
              </td>
              <td className="p-4">
                <button className="rounded-lg bg-red-500/10 px-3 py-2 text-xs text-red-500">
                  {t("market-open-order.cancel")}
                </button>
              </td>
            </tr>
            <tr className="transition hover:bg-app-background/40">
              <td className="p-4 font-semibold">SOL/USDT</td>
              <td className="p-4 text-emerald-500">
                {t("market-open-order.buy")}
              </td>
              <td className="p-4">140.50</td>
              <td className="p-4">1.00</td>
              <td className="p-4">
                <span className="rounded-lg bg-emerald-500/10 px-2.5 py-1.5 text-xs text-emerald-500">
                  {t("market-open-order.completed")}
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
