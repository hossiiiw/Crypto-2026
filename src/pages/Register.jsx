import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function Register() {
  const { t } = useTranslation();
  return (
    <>
      <main className="grid min-h-[calc(98vh-64px)] text-app-text place-items-center px-4 py-12">
        <div className="w-full max-w-md rounded-3xl border border-app-text/10 bg-app-surface p-7 shadow-2xl">
          <div className="text-center">
            <div className="mx-auto grid h-12 w-12 place-items-center rounded-2xl bg-app-primary text-xl font-black">
              C
            </div>
            <h1 className="mt-5 text-3xl font-black">
              {t("register.title-1")}
            </h1>
            <p className="mt-2 text-sm text-app-text-muted">
              {t("register.title-2")}
            </p>
          </div>
          <form className="mt-8 space-y-4">
            <input
              className="w-full rounded-xl border border-app-text/10 bg-app-input px-4 py-3 outline-none focus:border-app-primary"
              placeholder={t("register.input-name")}
            />
            <input
              className="w-full rounded-xl border border-app-text/10 bg-app-input px-4 py-3 outline-none focus:border-app-primary"
              placeholder={t("register.input-email")}
              type="email"
            />
            <input
              className="w-full rounded-xl border border-app-text/10 bg-app-input px-4 py-3 outline-none focus:border-app-primary"
              placeholder={t("register.input-pass")}
              type="password"
            />
            <button className="w-full rounded-xl bg-app-primary py-3 font-bold cursor-pointer hover:bg-app-primary-hover">
              {t("register.create")}
            </button>
          </form>
          <div className="my-6 flex items-center gap-3 text-xs text-app-text-muted">
            <span className="h-px flex-1 bg-app-text/10"></span>
            {t("register.or")}
            <span className="h-px flex-1 bg-app-text/10"></span>
          </div>
          <button className="w-full rounded-xl border border-app-text/10 py-3 font-semibold">
            {t("register.google")}
          </button>
          <p className="mt-6 text-center text-sm text-app-text-muted">
            {t("register.title-3")}
            <Link className="font-bold text-app-primary" to="/login">
              {t("register.title-4")}
            </Link>
          </p>
        </div>
      </main>
    </>
  );
}

export default Register;
