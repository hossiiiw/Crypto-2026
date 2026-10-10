import api from "./axios";

export const getMarketData = async (symbol) => {
  const { data } = await api.get("/api/v3/ticker/24hr", {
    params: { symbol },
  });

  return data;
};

export const getMarkets = async (symbols) => {
  return Promise.all(symbols.map(getMarketData));
};
