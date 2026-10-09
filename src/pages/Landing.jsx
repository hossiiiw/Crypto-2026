import { Link } from "react-router-dom";
import CryptoPrice from "../components/Home/CryptoPrice";
import CryptoTable from "../components/Home/CryptoTable";
import { useTranslation } from "react-i18next";

export default function Landing() {
  const { t } = useTranslation();
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl text-app-text gap-12 px-4 py-20 md:grid-cols-2 md:items-center md:py-28">
          <div>
            <span className="rounded-full border border-primary/30 bg-app-primary/10 px-3 py-1 text-xs font-bold text-app-primary">
              {t("landing.title1")}
            </span>
            <h1 className="mt-6 text-5xl text-app-text font-black leading-tight  md:text-7xl">
              {t("landing.title2")}
              <br />
              <span className="text-app-primary">{t("landing.title3")}</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-app-text-muted">
              {t("landing.title4")}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/register"
                className="rounded-xl bg-app-primary px-6 py-3 font-bold hover:bg-purple-600"
              >
                {t("landing.btn1")}
              </Link>
              <Link
                to="/market"
                className="rounded-xl border border-app-text/10 bg-app-surface px-6 py-3 font-bold hover:bg-app-border"
              >
                {t("landing.btn2")}
              </Link>
            </div>
            <div className="mt-8 flex gap-8 text-sm">
              <div>
                <b className="text-xl">2.4M+</b>
                <p className="text-app-text-muted">{t("landing.user")}</p>
              </div>
              <div>
                <b className="text-xl">$18B+</b>
                <p className="text-app-text-muted">{t("landing.volume")}</p>
              </div>
              <div>
                <b className="text-xl">99.99%</b>
                <p className="text-app-text-muted">{t("landing.uptime")}</p>
              </div>
            </div>
          </div>
          <CryptoTable />
        </div>
      </section>
      <CryptoPrice />
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
            <h3 className="mt-5 text-xl font-bold">
              {" "}
              {t("landing.b-title-3")}
            </h3>
            <p className="mt-3 text-sm leading-6 text-app-text-muted">
              {t("landing.b-span-3")}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
