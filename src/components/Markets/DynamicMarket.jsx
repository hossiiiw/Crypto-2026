import { useParams } from "react-router-dom";
import CryptoChart from "../Chart/CryptoChart";
import useLandingMarket from "../../hooks/useLandingMarket";
import { useState } from "react";

const DynamicMarket = () => {
  const { symbol } = useParams();
  const { market } = useLandingMarket(symbol);
  const [interval, setInterval] = useState("1m");

  console.log(market);

  return (
    <div className="h-[400px]">
      <CryptoChart symbol={symbol} interval={interval} />
      <p className="text-app-text text-2xl">{market?.symbol}</p>
      <p className="text-app-text text-2xl">{market?.price}</p>

      <select
        className="text-app-text text-2xl"
        name=""
        id=""
        value={interval}
        onChange={(e) => setInterval(e.target.value)}
      >
        <option value="1m">1m</option>
        <option value="5m">5m</option>
        <option value="1h">1h</option>
      </select>
    </div>
  );
};

export default DynamicMarket;
