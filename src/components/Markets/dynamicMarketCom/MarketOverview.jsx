import { useTranslation } from "react-i18next";

export default function MarketOverview({ data }) {
  const { t } = useTranslation();

  const change = data?.changePercent;
  return (
    <>
      <section className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        <div className="rounded-2xl border border-app-text/10 bg-app-surface p-4 transition hover:border-app-primary/40 sm:p-5">
          <p className="text-sm text-app-text-muted">
            {t("market-stats.total-market-cap")}
          </p>
          <h3 className="mt-3 text-xl font-black sm:text-2xl">
            ${data?.quoteVolume.toLocaleString()}T
          </h3>
          <p className="mt-2 text-xs text-emerald-500">
            {t("market-stats.volume-24h")}
          </p>
        </div>

        <div className="rounded-2xl border border-app-text/10 bg-app-surface p-4 transition hover:border-app-primary/40 sm:p-5">
          <p className="text-sm text-app-text-muted">
            {t("market-stats.volume-24h")}{" "}
          </p>
          <h3 className="mt-3 text-xl font-black sm:text-2xl">
            ${data?.volume.toLocaleString()}
          </h3>
          <p className="mt-2 text-xs text-emerald-500">
            {t("market-stats.change-vs-yesterday")}{" "}
          </p>
        </div>

        <div className="rounded-2xl border border-app-text/10 bg-app-surface p-4 transition hover:border-app-primary/40 sm:p-5">
          <p className="text-sm text-app-text-muted">{data?.symbol}</p>
          <h3 className="mt-3 text-xl font-black sm:text-2xl">
            ${data?.price.toLocaleString()}
          </h3>
          <p className={`"mt-2 text-xs" ${change > 0 ?"text-app-success" :"text-app-danger"}`}>{change}%</p>
        </div>

        <div className="rounded-2xl border border-app-text/10 bg-gradient-to-br from-app-primary/20 to-app-surface p-4 sm:p-5">
          <p className="text-sm text-app-text-muted">
            {" "}
            {t("market-stats.account-balance")}
          </p>
          <h3 className="mt-3 text-xl font-black sm:text-2xl">1,250.00 USDT</h3>
          <p className="mt-2 text-xs text-app-text-muted">
            {t("market-stats.available-balance")}
          </p>
        </div>
      </section>
    </>
  );
}
