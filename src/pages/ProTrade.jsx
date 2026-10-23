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
    <>
      <div className="flex">
        <Sidebar />
        <main className="min-w-0 flex-1 text-app-text">
          <ProfileHeader />
          <div className="mx-auto max-w-7xl p-4 md:p-6">
            {/* ---------------------- */}
            <ProCrypto info={market} handler={setTradeSymbol} />
            {/* ---------------------- */}
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-app-text-muted">
                  {t("pro-trade.title-1")}
                </p>
                <h1 className="text-3xl font-black">{market?.symbol}</h1>
              </div>
              <span className="rounded-lg bg-app-success/10 px-3 py-2 text-app-success">
                ● {t("pro-trade.title-2")}
              </span>
            </div>
            <div
              className={`mt-6 w-full grid gap-4 xl:${market ? "grid-cols-4" : "grid-cols-2"}`}
            >
              {market ? (
                <>
                  <div className="rounded-2xl border border-app-text/10 bg-app-surface p-5 xl:col-span-3">
                    <div className="flex items-center justify-between">
                      <div className="flex flex-row-reverse items-center ">
                        <span className="text-2xl font-bold">
                          {market ? (
                            <button
                              onClick={() => {
                                setCost(market?.price);
                              }}
                            >
                              {formatPrice(market?.price)}
                            </button>
                          ) : (
                            "loading"
                          )}{" "}
                          $
                        </span>
                        <span
                          className={`ml-3 ${change > 0 ? "text-app-success" : "text-app-danger"}`}
                        >
                          {change}%
                        </span>
                      </div>
                      <div className="text-xs text-app-text-muted flex flex-row-reverse gap-4">
                        <button
                          onClick={() => {
                            setIntervalHandler("1m");
                          }}
                          className={
                            interval === "1m" ? "text-app-primary" : ""
                          }
                        >
                          1m
                        </button>
                        <button
                          onClick={() => {
                            setIntervalHandler("5m");
                          }}
                          className={
                            interval === "5m"
                              ? "text-app-primary cursor-pointer"
                              : " cursor-pointer"
                          }
                        >
                          5m
                        </button>
                        <button
                          onClick={() => {
                            setIntervalHandler("1h");
                          }}
                          className={
                            interval === "1h"
                              ? "text-app-primary cursor-pointer"
                              : " cursor-pointer"
                          }
                        >
                          1H
                        </button>
                        <button
                          onClick={() => {
                            setIntervalHandler("4h");
                          }}
                          className={
                            interval === "4h"
                              ? "text-app-primary cursor-pointer"
                              : " cursor-pointer"
                          }
                        >
                          4H
                        </button>
                        <button
                          onClick={() => {
                            setIntervalHandler("1d");
                          }}
                          className={
                            interval === "1d"
                              ? "text-app-primary cursor-pointer"
                              : " cursor-pointer"
                          }
                        >
                          1D
                        </button>
                      </div>
                    </div>
                    <div className="mt-6 grid h-[460px] place-items-center rounded-xl bg-app-input">
                      <div className="flex itmes-center justify-center w-full h-full text-center text-app-text-muted">
                        <div className="w-full h-full ">
                          <CryptoChart
                            symbol={market?.symbol}
                            interval={interval}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex w-full h-[50vh] rounded-2xl bg-app-surface ">
                    <Loading />
                  </div>
                </>
              )}

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
                  placeholder={market?.price}
                  value={cost}
                  onChange={(e) => {
                    setCost(e.target.value);
                  }}
                />
                <label className="mt-4 block text-xs text-app-text-muted">
                  {t("pro-trade.amount")}
                </label>
                <input
                  className="mt-2 w-full rounded-xl outline-none border border-app-text/10 bg-app-input p-3  focus:border-app-primary"
                  placeholder="0.00"
                  onChange={(e) => {
                    setAmount(e.target.value);
                  }}
                />
                <div className="mt-4 flex gap-1">
                  <span>{t("pro-trade.cost")} :</span>
                  <span className="font-bold">{totalCost.toFixed(3)} $</span>
                </div>
                <button className="mt-5 w-full rounded-xl bg-app-success py-3 font-bold text-app-background">
                  {t("pro-trade.buy")} {market?.symbol.replace("USDT", "")}
                </button>
                <button className="mt-2 w-full rounded-xl bg-app-danger py-3 font-bold text-app-text">
                  {t("pro-trade.sell")} {market?.symbol.replace("USDT", "")}
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
