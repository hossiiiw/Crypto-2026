import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { getMarkets } from "../api/marketApi";
const symbols = ["BTCUSDT", "ETHUSDT", "BNBUSDT", "XRPUSDT", "ADAUSDT"];

function Market() {
  const { t } = useTranslation();

  const [markets, setMarkets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  useEffect(() => {
    let active = true;

    const fetchMarkets = async () => {
      try {
        const data = await getMarkets(symbols);

        if (active) {
          setMarkets(data);
          setError("");
        }
      } catch (err) {
        if (active) {
          setError("دریافت اطلاعات بازار ناموفق بود.");
          console.error(err.response?.data || err.message);
        }
      } finally {
        if (active) setLoading(false);
      }
    };

    fetchMarkets();
    const intervalId = setInterval(fetchMarkets, 5000);

    return () => {
      active = false;
      clearInterval(intervalId);
    };
  }, []);

  const formatPrice = (value) =>
    Number(value).toLocaleString("en-US", {
      maximumFractionDigits: 8,
    });

  if (loading) {
    return <p className="p-6 text-gray-400">Loading markets...</p>;
  }

  if (error) {
    return <p className="p-6 text-red-400">{error}</p>;
  }

  if (loading) {
    return <p className="p-6 text-gray-400">Loading markets...</p>;
  }

  if (error) {
    return <p className="p-6 text-red-400">{error}</p>;
  }

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
                <th className="p-5">{t("markets.asset")}</th>
                <th>{t("markets.price")}</th>
                <th>24h {t("markets.change")}</th>
                <th>24h {t("markets.high")}</th>
                <th>24h {t("markets.low")}</th>
                <th>{t("markets.volume")}</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {markets.map((coin) => {
                const change = Number(coin.priceChangePercent);
                const baseAsset = coin.symbol.replace("USDT", "");
                console.log(coin);

                return (
                  <>
                    <tr className="border-b border-app-text/5 hover:bg-app-text/5">
                      <td className="p-5">
                        <b>{baseAsset}</b>
                        <span className="ml-2 text-xs text-app-text-muted">
                          {coin.symbol.replace("USDT", "")}
                        </span>
                      </td>
                      <td>${formatPrice(coin.lastPrice)}</td>
                      <td
                        className={`${change >= 0 ? "text-app-success" : "text-app-danger"}`}
                      >
                        {change >= 0 ? "+" : ""}
                        {change}%
                      </td>
                      <td>${formatPrice(coin.highPrice)}</td>
                      <td>${formatPrice(coin.lowPrice)}</td>
                      <td>${formatPrice(coin.volume)}</td>
                      <td>
                        <a
                          href="trade.html"
                          className="rounded-lg bg-app-primary/15 px-3 py-2 text-app-primary"
                        >
                          {t("markets.trade")}
                        </a>
                      </td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
        </div>
      </main>
    </>
  );
}

export default Market;
