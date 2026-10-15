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

// دریافت اطلاعات بازار در 24 ساعت اخیر

export const get24hrTicker = async ( symbol ) => {
  const { data } = await api.get("/api/v3/ticker/24hr", {
    params: { symbol },
  });
  return {
    symbol: data.symbol,
    price: Number(data.lastPrice),
    chnage: Number(data.priceChange),
    changePercent: Number(data.priceChangePercent),
    highPrice: Number(data.highPrice),
    lowPrice: Number(data.lowPrice),
    volume: Number(data.volume),
    quoteVolume: Number(data.quoteVolume),
    openPrice: Number(data.openPrice),
  };
};
