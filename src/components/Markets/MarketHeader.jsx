import React from "react";
import { useTranslation } from "react-i18next";

function MarketHeader() {
  const { t } = useTranslation();
  return (
    <>
      <div className="flex flex-wrap items-end justify-between gap-5">
        <div>
          <p className="font-bold text-app-primary">{t("markets.title-1")}</p>
          <h1 className="mt-2 text-4xl font-black">{t("markets.title-2")}</h1>
        </div>
        <div className="flex rounded-xl border border-app-text/10 bg-app-surface p-1">
          <button className="rounded-lg bg-app-primary px-4 py-2 text-sm font-bold">
            {t("markets.all")}
          </button>
          <button className="px-4 py-2 text-sm text-app-text-muted">
            {t("markets.spot")}
          </button>
          <button className="px-4 py-2 text-sm text-app-text-muted">
            {t("markets.futures")}
          </button>
        </div>
      </div>
      <div className="mt-8 rounded-2xl border border-app-text/10 bg-app-surface p-4">
        <input
          className="w-full rounded-xl border border-app-text/10 bg-app-input px-4 py-3 outline-none focus:border-app-primary"
          placeholder={t("markets.input-plc")}
        />
      </div>
    </>
  );
}

export default MarketHeader;
