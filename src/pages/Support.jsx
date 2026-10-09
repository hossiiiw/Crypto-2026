import { useTranslation } from "react-i18next";

function Support() {
  const { t } = useTranslation();
  return (
    <>
      <main className="mx-auto text-app-text max-w-6xl px-4 py-12">
        <div className="text-center">
          <p className="font-bold text-app-primary">{t("support.support")}</p>
          <h1 className="mt-2 text-4xl font-black">{t("support.title-1")}</h1>
          <div className="mx-auto mt-6 max-w-2xl">
            <input
              className="w-full rounded-2xl border border-app-text/10 bg-app-surface px-5 py-4 outline-none focus:border-app-primary"
              placeholder={t("support.input-plc")}
            />
          </div>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          <div className="rounded-2xl border border-app-text/10 bg-app-surface p-6">
            <span className="text-3xl">🔐</span>
            <h3 className="mt-4 font-bold">{t("support.b1-title-1")}</h3>
            <p className="mt-2 text-sm text-muted">{t("support.b1-title-2")}</p>
          </div>
          <div className="rounded-2xl border border-app-text/10 bg-app-surface p-6">
            <span className="text-3xl">💳</span>
            <h3 className="mt-4 font-bold">{t("support.b2-title-1")}</h3>
            <p className="mt-2 text-sm text-muted">{t("support.b2-title-2")}</p>
          </div>
          <div className="rounded-2xl border border-app-text/10 bg-app-surface p-6">
            <span className="text-3xl">📈</span>
            <h3 className="mt-4 font-bold">{t("support.b3-title-1")}</h3>
            <p className="mt-2 text-sm text-muted">{t("support.b3-title-2")}</p>
          </div>
        </div>
        <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-app-text/10 bg-app-surface p-6">
          <h2 className="text-xl font-bold">{t("support.title-2")}</h2>
          <details className="rounded-xl mt-4 bg-app-input p-4">
            <summary className="cursor-pointer font-semibold">test</summary>
            <p className="mt-3 text-sm leading-6 text-muted">test</p>
          </details>
        </div>
      </main>
    </>
  );
}

export default Support;
