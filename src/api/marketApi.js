import api from "./axios";

// دریافت اطلاعات یک نماد مشخص
export const getMarketData = async (symbol) => {
  const { data } = await api.get("/api/v3/ticker/24hr", {
    params: { symbol },
  });

  return data;
};

// دریافت اطلاعات تمام بازارها
export const getMarkets = async () => {
  const { data } = await api.get("/api/v3/ticker/24hr");

  return data.filter((market) => market.symbol.endsWith("USDT"));
};
