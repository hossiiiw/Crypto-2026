
import Sidebar from "../components/layout/Sidebar";
import ProfileHeader from "../components/layout/ProfileHeader";
import { useTranslation } from "react-i18next";
import CryptoChart from "../components/Chart/CryptoChart";
import { useState } from "react";
import useLandingMarket from "../hooks/useLandingMarket";
import { formatPrice } from "../utils/FormatPrice";
import Loading from "../components/common/Loading";
import ProCrypto from "../components/ProTrade/ProCrypto";

function ProTrade() {
  const { t } = useTranslation();

  const [interval, setInterval] = useState("1m");
  const [symbol, setSymbol] = useState("BTCUSDT");
  const { market } = useLandingMarket(symbol);

  const [amount, setAmount] = useState(0);
  const [cost, setCost] = useState("");

  const totalCost = Number(amount || 0) * Number(cost || 0);
  const change = market?.changePercent;

  const setIntervalHandler = (value) => {
    setInterval(value);
  };

  const setTradeSymbol = (value) => {
    setSymbol(`${value}USDT`);
  };

  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <main className="min-w-0 flex-1 text-app-text">
        <ProfileHeader />

        <div className="mx-auto w-full max-w-7xl p-3 sm:p-4 md:p-6">
          <ProCrypto info={market} handler={setTradeSymbol} />

          {/* اطلاعات ارز */}
          <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
            <div className="min-w-0">
              <p className="text-sm text-app-text-muted">
                {t("pro-trade.title-1")}
              </p>

              <h1 className="break-words text-2xl font-black sm:text-3xl">
                {market?.symbol}
              </h1>
            </div>

            <span className="shrink-0 rounded-lg bg-app-success/10 px-3 py-2 text-sm text-app-success">
              ● {t("pro-trade.title-2")}
            </span>
          </div>

          {/* نمودار و پنل معامله */}
          <div className="mt-5 flex min-w-0 flex-col gap-4 lg:flex-row lg:items-start">

            {/* نمودار */}
            <section className="w-full min-w-0 rounded-2xl border border-app-text/10 bg-app-surface p-3 sm:p-5 lg:w-[70%]">
              {market ? (
                <>
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex min-w-0 flex-wrap items-center gap-2">
                      <span className="text-xl font-bold sm:text-2xl">
                        <button
                          type="button"
                          onClick={() => setCost(String(market.price))}
                        >
                          {formatPrice(market.price)}
                        </button>{" "}
                        $
                      </span>

                      <span
                        className={`text-sm ${
                          Number(change) > 0
                            ? "text-app-success"
                            : Number(change) < 0
                              ? "text-app-danger"
                              : "text-app-text-muted"
                        }`}
                      >
                        {change}%
                      </span>
                    </div>

                    {/* انتخاب تایم‌فریم */}
                    <div className="flex flex-wrap items-center gap-4 text-xs text-app-text-muted sm:justify-end">
                      {[
                        { label: "1m", value: "1m" },
                        { label: "5m", value: "5m" },
                        { label: "1H", value: "1h" },
                        { label: "4H", value: "4h" },
                        { label: "1D", value: "1d" },
                      ].map((item) => (
                        <button
                          key={item.value}
                          type="button"
                          onClick={() => setIntervalHandler(item.value)}
                          className={`cursor-pointer transition-colors ${
                            interval === item.value
                              ? "font-bold text-app-primary"
                              : "hover:text-app-primary"
                          }`}
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* محدوده نمودار */}
                  <div className="mt-5 h-[300px] min-w-0 overflow-hidden rounded-xl bg-app-input sm:h-[380px] lg:h-[460px]">
                    <div className="h-full w-full min-w-0">
                      <CryptoChart
                        symbol={market.symbol}
                        interval={interval}
                      />
                    </div>
                  </div>
                </>
              ) : (
                <div className="grid h-[300px] place-items-center sm:h-[460px]">
                  <Loading />
                </div>
              )}
            </section>

            {/* پنل خریدوفروش */}
            <section className="w-full min-w-0 rounded-2xl border border-app-text/10 bg-app-surface p-4 sm:p-5 lg:w-[30%] lg:shrink-0">
              <div className="flex gap-2">
                <button
                  type="button"
                  className="flex-1 rounded-lg bg-app-primary py-2 text-sm font-bold"
                >
                  {t("pro-trade.limit")}
                </button>

                <button
                  type="button"
                  className="flex-1 rounded-lg bg-app-text/5 py-2 text-sm text-app-text-muted"
                >
                  {t("pro-trade.market")}
                </button>
              </div>

              <label className="mt-5 block text-xs text-app-text-muted">
                {t("pro-trade.price")}
              </label>

              <input
                type="number"
                min="0"
                step="any"
                className="mt-2 w-full min-w-0 rounded-xl border border-app-text/10 bg-app-input p-3 outline-none focus:border-app-primary"
                placeholder={String(market?.price ?? "0.00")}
                value={cost}
                onChange={(e) => setCost(e.target.value)}
              />

              <label className="mt-4 block text-xs text-app-text-muted">
                {t("pro-trade.amount")}
              </label>

              <input
                type="number"
                min="0"
                step="any"
                className="mt-2 w-full min-w-0 rounded-xl border border-app-text/10 bg-app-input p-3 outline-none focus:border-app-primary"
                placeholder="0.00"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />

              <div className="mt-4 flex flex-wrap items-center justify-between gap-2 text-sm">
                <span>{t("pro-trade.cost")}:</span>
                <span className="font-bold">
                  {totalCost.toFixed(3)} $
                </span>
              </div>

              <button
                type="button"
                className="mt-5 w-full rounded-xl bg-app-success py-3 font-bold text-app-background transition-opacity hover:opacity-80"
              >
                {t("pro-trade.buy")}{" "}
                {market?.symbol?.replace("USDT", "")}
              </button>

              <button
                type="button"
                className="mt-2 w-full rounded-xl bg-app-danger py-3 font-bold text-app-text transition-opacity hover:opacity-80"
              >
                {t("pro-trade.sell")}{" "}
                {market?.symbol?.replace("USDT", "")}
              </button>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}

export default ProTrade;
