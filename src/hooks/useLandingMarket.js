import { useEffect, useState } from "react";
import { get24hrTicker } from "../api/marketApi";

function useLandingMarket(symbol) {
  const [market, setMarket] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let active = true;
    const fetchLanfigMarket = async () => {
      try {
        const data = await get24hrTicker(symbol || "BTCUSDT");
        setMarket(data);
      } catch (err) {
        setError("خطا در دریافت اطلاعات");
      } finally {
        setLoading(false);
      }
    };

    fetchLanfigMarket();

    const intervalId = setInterval(fetchLanfigMarket, 5000);

    return () => {
      active = false;
      clearInterval(intervalId);
    };
  }, []);

  return {
    market,
    loading,
    error,
  };
}

export default useLandingMarket;
