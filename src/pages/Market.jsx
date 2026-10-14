import { useTranslation } from "react-i18next";
import MarketHeader from "../components/Markets/MarketHeader";
import { useMarkets } from "../hooks/useMarkets";
import Loading from "../components/common/Loading";
import MarketTable from "../components/Markets/MarketTable";
import ErrorMessage from "../components/common/ErrorMessage";

function Market() {
  const { t } = useTranslation();

  const { markets, loading, error } = useMarkets(t);
  if (loading) {
    return <Loading />;
  }

  if (error) {
    return (
      <>
        <main className="mx-auto max-w-7xl text-app-text px-4 py-12">
          <MarketHeader />
          <ErrorMessage message={error} />
        </main>
      </>
    );
  }

  return (
    <>
      <main className="mx-auto max-w-7xl text-app-text px-4 py-12">
        <MarketHeader />
        <div className="mt-4 overflow-x-auto rounded-2xl border border-app-text/10 bg-app-surface">
          <MarketTable markets={markets} />
        </div>
      </main>
    </>
  );
}

export default Market;
