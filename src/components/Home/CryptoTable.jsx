import React from "react";
import { useTranslation } from "react-i18next";
import useLandingMarket from "../../hooks/useLandingMarket";
import Loading from "../common/Loading";

function CryptoTable() {
  const { t } = useTranslation();
  const { market, loading, error } = useLandingMarket("BTCUSDT");
  const priceChangeIsPositive = market?.changePercent > 0;
  return (
    <>
      {loading ? (
        <div className="rounded-3xl border border-app-text/10 bg-app-surface p-5 shadow-2xl shadow-app-primary/10 flex items-center justify-center">
            <Loading/>
        </div>
      ) : (
        <div className="rounded-3xl border border-app-text/10 bg-app-surface p-5 shadow-2xl shadow-app-primary/10">
          <div className="flex justify-between">
            <div>
              <p className="text-sm text-muted">
                {market?.symbol.toLocaleString()}
              </p>
              <p className="mt-1 text-3xl font-black">
                ${market?.price.toLocaleString()}
              </p>
            </div>
            <span
              className={
                priceChangeIsPositive
                  ? "h-fit rounded-lg bg-app-success/10 px-2 py-1 text-sm text-app-success"
                  : "h-fit rounded-lg bg-app-success/10 px-2 py-1 text-sm text-app-danger"
              }
            >
             {market?.changePercent}%
            </span>
          </div>
          <div className="mt-8 flex h-[35.5vh] items-end gap-2"></div>
          <div className="mt-5 grid grid-cols-3 gap-3 text-center text-xs text-app-text-muted">
            <span>
              24H {t("landing.high")}
              <br />
              <b className="text-text">${market?.highPrice.toLocaleString()}</b>
            </span>
            <span>
              24H {t("landing.low")}
              <br />
              <b className="text-text">${market?.lowPrice.toLocaleString()}</b>
            </span>
            <span>
              {t("landing.volume")}
              <br />
              <b className="text-text">
                ${market?.quoteVolume.toLocaleString()}B
              </b>
            </span>
          </div>
        </div>
      )}
    </>
  );
}

export default CryptoTable;
