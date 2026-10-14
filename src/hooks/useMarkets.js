
import { useEffect, useState } from "react";
import { getMarkets } from "../api/marketApi";

const symbols = [
  "BTCUSDT",
  "ETHUSDT",
  "BNBUSDT",
  "XRPUSDT",
  "ADAUSDT",
];

export function useMarkets(t) {
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
          setError(t("markets.error"));
          console.error(
            err.response?.data || err.message
          );
        }
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    };

    fetchMarkets();

    const intervalId = setInterval(fetchMarkets, 5000);

    return () => {
      active = false;
      clearInterval(intervalId);
    };
  }, [t]);

  return {
    markets,
    loading,
    error,
  };
}
