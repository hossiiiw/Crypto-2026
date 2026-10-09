import Sidebar from "../components/layout/Sidebar";
import ProfileHeader from "../components/layout/ProfileHeader";
import { useTranslation } from "react-i18next";

function ProTrade() {
  const { t } = useTranslation();
  return (
    <>
      <div className="flex">
        <Sidebar />
        <main className="min-w-0 flex-1 text-app-text">
          <ProfileHeader />
          <div className="mx-auto max-w-7xl p-4 md:p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-app-text-muted">
                  {t("pro-trade.title-1")}
                </p>
                <h1 className="text-3xl font-black">BTC/USDT</h1>
              </div>
              <span className="rounded-lg bg-app-success/10 px-3 py-2 text-app-success">
                ● {t("pro-trade.title-2")}
              </span>
            </div>
            <div className="mt-6 grid gap-4 xl:grid-cols-4">
              <div className="rounded-2xl border border-app-text/10 bg-app-surface p-5 xl:col-span-3">
                <div className="flex items-center justify-between">
                  <div>
                    <b className="text-2xl">$67,842.21</b>
                    <span className="ml-3 text-app-success">+4.82%</span>
                  </div>
                  <div className="text-xs text-app-text-muted">
                    1m &nbsp; 5m &nbsp; <b className="text-app-primary">1H</b>{" "}
                    &nbsp; 4H &nbsp; 1D
                  </div>
                </div>
                <div className="mt-6 grid h-[460px] place-items-center rounded-xl bg-app-input">
                  <div className="text-center text-app-text-muted">
                    <div className="text-5xl">📈</div>
                    <p className="mt-3">TradingView chart placeholder</p>
                    <p className="text-xs">
                      Connect your chart library in React
                    </p>
                  </div>
                </div>
              </div>
              <div className="rounded-2xl border border-app-text/10 bg-app-surface p-5">
                <div className="flex gap-2">
                  <button className="flex-1 rounded-lg bg-app-primary py-2 text-sm font-bold">
                    {t("pro-trade.limit")}
                  </button>
                  <button className="flex-1 rounded-lg bg-app-text/5 py-2 text-sm text-app-text-muted">
                    {t("pro-trade.market")}
                  </button>
                </div>
                <label className="mt-5 block text-xs text-app-text-muted">
                  {t("pro-trade.price")}
                </label>
                <input
                  className="mt-2 w-full rounded-xl outline-none border border-app-text/10 bg-app-input p-3 focus:border-app-primary"
                  //   value="67842.21"
                  placeholder="67842.21"
                />
                <label className="mt-4 block text-xs text-app-text-muted">
                  {t("pro-trade.amount")}
                </label>
                <input
                  className="mt-2 w-full rounded-xl outline-none border border-app-text/10 bg-app-input p-3  focus:border-app-primary"
                  placeholder="0.00"
                />
                <div className="mt-4 flex gap-1">
                  <span>{t("pro-trade.cost")} :</span>
                  <span>100$</span>
                </div>
                <button className="mt-5 w-full rounded-xl bg-app-success py-3 font-bold text-app-background">
                  {t("pro-trade.buy")} BTC
                </button>
                <button className="mt-2 w-full rounded-xl bg-app-danger py-3 font-bold text-app-text">
                  {t("pro-trade.sell")} BTC
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default ProTrade;
