import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function MarketHeader() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-wrap items-center justify-between gap-4">
      <div>
        <div className="mb-2 flex items-center gap-2 text-sm text-app-text-muted">
          <Link to={-1}>{t("trade-page.home")}</Link>
          <span>/</span>
          <span className="text-app-primary">
            {" "}
            {t("trade-page.easy-trade")}
          </span>
        </div>
        <h1 className="text-2xl font-black tracking-tight sm:text-3xl">
          {t("trade-page.title")}
        </h1>
        <p className="mt-2 text-sm text-app-text-muted">
          {t("trade-page.description")}
        </p>
      </div>

      <div className="flex items-center gap-3 rounded-2xl border border-app-text/10 bg-app-surface px-4 py-3 shadow-lg shadow-black/5">
        <span className="relative flex h-2.5 w-2.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
        </span>
        <div>
          <p className="text-xs text-app-text-muted">
            {t("trade-page.market-status")}{" "}
          </p>
          <p className="mt-1 text-sm font-bold text-emerald-500">
            {t("trade-page.market-active")}{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default MarketHeader;
