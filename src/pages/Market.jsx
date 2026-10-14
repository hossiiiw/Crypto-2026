import { useTranslation } from "react-i18next";
import MarketHeader from "../components/Markets/MarketHeader";
import { useMarkets } from "../hooks/useMarkets";
import Loading from "../components/common/Loading";
import MarketTable from "../components/Markets/MarketTable";
import ErrorMessage from "../components/common/ErrorMessage";
import { useState } from "react";

function Market() {
  const { t } = useTranslation();

  const { symbols, markets, loading, error } = useMarkets(t);
  const [search, setSearch] = useState("");

  const displayedMarkets = search.trim()
    ? markets.filter((coin) =>
        coin.symbol.toLowerCase().includes(search.trim().toLowerCase()),
      )
    : symbols
        .map((symbol) => markets.find((coin) => coin.symbol === symbol))
        .filter(Boolean);
  if (loading) {
    return (
      <main className="mx-auto max-w-7xl text-app-text px-4 py-12">
        <MarketHeader search={search} onSearchChange={setSearch} />
        <Loading />
      </main>
    );
  }
  if (error) {
    return (
      <>
        <main className="mx-auto max-w-7xl text-app-text px-4 py-12">
          <MarketHeader search={search} onSearchChange={setSearch} />
          <ErrorMessage message={error} />
        </main>
      </>
    );
  }

  return (
    <>
      <main className="mx-auto max-w-7xl text-app-text px-4 py-12">
        <MarketHeader search={search} onSearchChange={setSearch} />
        <div className="mt-4 overflow-x-auto rounded-2xl border border-app-text/10 bg-app-surface">
          <MarketTable markets={displayedMarkets} />
        </div>
      </main>
    </>
  );
}

export default Market;
