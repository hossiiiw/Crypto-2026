import { useParams } from "react-router-dom";
import useLandingMarket from "../../hooks/useLandingMarket";
import CryptoChart from "../Chart/CryptoChart";
import MarketHeader from "./dynamicMarketCom/MarketHeader";
import MarketHistory from "./dynamicMarketCom/MarketHistory";
import MarketOpenOrder from "./dynamicMarketCom/MarketOpenOrder";
import MarketOverview from "./dynamicMarketCom/MarketOverview";
import OrderBook from "./dynamicMarketCom/OrderBook";
import TradeForm from "./dynamicMarketCom/TradeForm";

const DynamicMarket = () => {
  const param = useParams();
  const { market } = useLandingMarket(param.symbol);
  console.log(market);
  return (
    <>
      <main className="min-h-screen bg-app-background p-3 text-app-text sm:p-5 lg:p-6">
        <div className="mx-auto max-w-[1600px] space-y-5">
          {/* Page Header */}
          <MarketHeader />

          {/* Market Overview */}
          <MarketOverview data={market} />

          {/* Main Trading Area */}
          <section className="w-full flex flex-col gap-2 items-center justify-between">
            {/*  */}
            <div className="w-full flex flex-wrap gap-2 items-center justify-between">
              <div className="w-[48%] h-[57.2vh]">
                <CryptoChart symbol={market?.symbol} />
              </div>
              <OrderBook data={market} />
              <div className="w-[48%] flex flex-col gap-16">
                <MarketHistory />
                <MarketOpenOrder />
              </div>
              <TradeForm data={market} />
            </div>
            {/*  */}
          </section>
        </div>
      </main>
    </>
  );
};

export default DynamicMarket;
