import React from "react";
import useLandingMarket from "../../hooks/useLandingMarket";
import { OrbitProgress } from "react-loading-indicators";
import LandingLoading from "../common/LandingLoading";

function CryptoPrice() {
  const BTC = useLandingMarket("BTCUSDT");
  const ETH = useLandingMarket("ETHUSDT");
  const SOL = useLandingMarket("SOLUSDT");
  const BNB = useLandingMarket("BNBUSDT");
  return (
    <>
      <section className="border-y border-app-text/10 bg-app-surface/40">
        <div className="text-app-text mx-auto grid max-w-7xl grid-cols-2 gap-4 px-4 py-8 md:grid-cols-4">
          <div>
            {BTC.loading ? (
              <LandingLoading />
            ) : (
              <>
                <p className="text-sm text-app-text-muted">
                  {BTC.market?.symbol}
                </p>
                <b>${BTC.market?.price.toLocaleString()}</b>
                <span
                  className={
                    BTC.market?.changePercent > 0
                      ? "ml-2 text-app-success"
                      : "ml-2 text-app-danger"
                  }
                >
                  {BTC.market?.changePercent}%
                </span>
              </>
            )}
          </div>
          <div>
            {ETH.loading ? (
              <LandingLoading />
            ) : (
              <>
                <p className="text-sm text-app-text-muted">
                  {ETH.market?.symbol}
                </p>
                <b>${ETH.market?.price}</b>
                <span
                  className={
                    ETH.market?.changePercent > 0
                      ? "ml-2 text-app-success"
                      : "ml-2 text-app-danger"
                  }
                >
                  {ETH.market?.changePercent}%
                </span>
              </>
            )}
          </div>
          <div>
            {SOL.loading ? (
              <LandingLoading />
            ) : (
              <>
                <p className="text-sm text-app-text-muted">
                  {SOL.market?.symbol}
                </p>
                <b>${SOL.market?.price}</b>
                <span
                  className={
                    SOL.market?.changePercent > 0
                      ? "ml-2 text-app-success"
                      : "ml-2 text-app-danger"
                  }
                >
                  {SOL.market?.changePercent}%
                </span>
              </>
            )}
          </div>
          <div>
            {BNB.loading ? (
              <LandingLoading />
            ) : (
              <>
                <p className="text-sm text-app-text-muted">
                  {BNB.market?.symbol}
                </p>
                <b>${BNB.market?.price}</b>
                <span
                  className={
                    BNB.market?.changePercent > 0
                      ? "ml-2 text-app-success"
                      : "ml-2 text-app-danger"
                  }
                >
                  {BNB.market?.changePercent}%
                </span>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default CryptoPrice;
