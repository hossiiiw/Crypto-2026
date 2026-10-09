import React from "react";
import { useTranslation } from "react-i18next";

function Market() {
  const { t } = useTranslation();
  return (
    <>
      <main className="mx-auto max-w-7xl text-app-text px-4 py-12">
        <div className="flex flex-wrap items-end justify-between gap-5">
          <div>
            <p className="font-bold text-app-primary">{t("markets.title-1")}</p>
            <h1 className="mt-2 text-4xl font-black">{t("markets.title-2")}</h1>
          </div>
          <div className="flex rounded-xl border border-app-text/10 bg-app-surface p-1">
            <button className="rounded-lg bg-app-primary px-4 py-2 text-sm font-bold">
              {t("markets.all")}
            </button>
            <button className="px-4 py-2 text-sm text-app-text-muted">
              {t("markets.spot")}
            </button>
            <button className="px-4 py-2 text-sm text-app-text-muted">
              {t("markets.futures")}
            </button>
          </div>
        </div>
        <div className="mt-8 rounded-2xl border border-app-text/10 bg-app-surface p-4">
          <input
            className="w-full rounded-xl border border-app-text/10 bg-app-input px-4 py-3 outline-none focus:border-app-primary"
            placeholder={t("markets.input-plc")}
          />
        </div>
        <div className="mt-4 overflow-x-auto rounded-2xl border border-app-text/10 bg-app-surface">
          <table className="w-[95%] min-w-[760px] text-left text-sm">
            <thead className="border-b border-app-text/10 text-app-text-muted">
              <tr>
                <th className="p-5">{t("markets.assets")}</th>
                <th>{t("markets.price")}</th>
                <th>24h {t("markets.change")}</th>
                <th>24h {t("markets.high")}</th>
                <th>24h {t("markets.low")}</th>
                <th>{t("markets.volume")}</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-app-text/5 hover:bg-app-text/5">
                <td className="p-5">
                  <b>Bitcoin</b>
                  <span className="ml-2 text-xs text-app-text-muted">BTC</span>
                </td>
                <td>$67,842</td>
                <td className="text-app-success">+4.82%</td>
                <td>$69,420</td>
                <td>$64,102</td>
                <td>$2.8B</td>
                <td>
                  <a
                    href="trade.html"
                    className="rounded-lg bg-app-primary/15 px-3 py-2 text-app-primary"
                  >
                    {t("markets.trade")}
                  </a>
                </td>
              </tr>

              <tr className="border-b border-app-text/5 hover:bg-app-text/5">
                <td className="p-5">
                  <b>Bitcoin</b>
                  <span className="ml-2 text-xs text-app-text-muted">BTC</span>
                </td>
                <td>$67,842</td>
                <td className="text-app-success">+4.82%</td>
                <td>$69,420</td>
                <td>$64,102</td>
                <td>$2.8B</td>
                <td>
                  <a
                    href="trade.html"
                    className="rounded-lg bg-app-primary/15 px-3 py-2 text-app-primary"
                  >
                    {t("markets.trade")}
                  </a>
                </td>
              </tr>

              <tr className="border-b border-app-text/5 hover:bg-app-text/5">
                <td className="p-5">
                  <b>Bitcoin</b>
                  <span className="ml-2 text-xs text-app-text-muted">BTC</span>
                </td>
                <td>$67,842</td>
                <td className="text-app-success">+4.82%</td>
                <td>$69,420</td>
                <td>$64,102</td>
                <td>$2.8B</td>
                <td>
                  <a
                    href="trade.html"
                    className="rounded-lg bg-app-primary/15 px-3 py-2 text-app-primary"
                  >
                    {t("markets.trade")}
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </>
  );
}

export default Market;
