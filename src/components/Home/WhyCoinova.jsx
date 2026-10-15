import React from "react";
import { useTranslation } from "react-i18next";

function WhyCoinova() {
  const { t } = useTranslation();
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 text-app-text">
      <div className="text-center">
        <p className="font-bold text-app-primary">{t("landing.why")}</p>
        <h2 className="mt-2 text-4xl font-black">{t("landing.title5")}</h2>
      </div>
      <div className="mt-12 grid gap-5 md:grid-cols-3">
        <div className="rounded-2xl border border-app-text/10 bg-app-surface p-6">
          <div className="text-3xl">🛡️</div>
          <h3 className="mt-5 text-xl font-bold">{t("landing.b-title-1")}</h3>
          <p className="mt-3 text-sm leading-6 text-app-text-muted">
            {t("landing.b-span-1")}
          </p>
        </div>
        <div className="rounded-2xl border border-app-text/10 bg-app-surface p-6">
          <div className="text-3xl">⚡</div>
          <h3 className="mt-5 text-xl font-bold">{t("landing.b-title-2")}</h3>
          <p className="mt-3 text-sm leading-6 text-app-text-muted">
            {t("landing.b-span-2")}
          </p>
        </div>
        <div className="rounded-2xl border border-app-text/10 bg-app-surface p-6">
          <div className="text-3xl">📊</div>
          <h3 className="mt-5 text-xl font-bold"> {t("landing.b-title-3")}</h3>
          <p className="mt-3 text-sm leading-6 text-app-text-muted">
            {t("landing.b-span-3")}
          </p>
        </div>
      </div>
    </section>
  );
}

export default WhyCoinova;
