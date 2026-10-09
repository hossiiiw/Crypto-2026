import React from "react";
import { useTranslation } from "react-i18next";

function CryptoTable() {
  const { t } = useTranslation();
  return (
    <>
      <div className="rounded-3xl border border-app-text/10 bg-app-surface p-5 shadow-2xl shadow-app-primary/10">
        <div className="flex justify-between">
          <div>
            <p className="text-sm text-muted">BTC / USDT</p>
            <p className="mt-1 text-3xl font-black">$67,842.21</p>
          </div>
          <span className="h-fit rounded-lg bg-app-success/10 px-2 py-1 text-sm text-app-success">
            +4.82%
          </span>
        </div>
        <div className="mt-8 flex h-64 items-end gap-2"></div>
        <div className="mt-5 grid grid-cols-3 gap-3 text-center text-xs text-app-text-muted">
          <span>
            24H {t("landing.high")}
            <br />
            <b className="text-text">$69,420</b>
          </span>
          <span>
            24H {t("landing.low")}
            <br />
            <b className="text-text">$64,102</b>
          </span>
          <span>
            {t("landing.volume")}
            <br />
            <b className="text-text">$2.8B</b>
          </span>
        </div>
      </div>
    </>
  );
}

export default CryptoTable;
