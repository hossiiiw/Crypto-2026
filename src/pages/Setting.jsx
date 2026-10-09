import React, { useContext } from "react";
import Sidebar from "../components/layout/Sidebar";
import ProfileHeader from "../components/layout/ProfileHeader";
import { AppThemeContext } from "../context/Theme/ThemeContext";
import { AppLanguageContext } from "../context/Theme/Language/LanguageContext";
import { useTranslation } from "react-i18next";

function Setting() {
  const { theme, handleTheme } = useContext(AppThemeContext);
  const { languageHandler } = useContext(AppLanguageContext);
  const { t } = useTranslation();
  return (
    <>
      <div className="flex">
        <Sidebar />
        <main className="min-w-0 flex-1 text-app-text">
          <ProfileHeader />
          <div className="mx-auto max-w-7xl p-4 md:p-6">
            <div>
              <p className="text-sm text-app-text-muted">
                {t("setting.title-1")}
              </p>
              <h1 className="text-3xl font-black">{t("setting.setting")}</h1>
            </div>
            <div className="mt-7 max-w-4xl space-y-5">
              <section className="rounded-2xl border border-app-text/10 bg-app-surface p-6">
                <h3 className="font-bold">{t("setting.appearance")}</h3>
                <div className="mt-5 flex items-center justify-between">
                  <div>
                    <b>{t("setting.theme")}</b>
                    <p className="text-sm text-app-text-muted">
                      {t("setting.title-2")}
                    </p>
                  </div>
                  <div className="flex rounded-xl bg-app-input p-1">
                    <button
                      onClick={handleTheme}
                      className={`rounded-lg ${theme === "dark" ? "bg-app-primary" : ""} px-4 py-2 text-sm cursor-pointer  transition-colors duration-500`}
                    >
                      {t("setting.dark")}
                    </button>
                    <button
                      onClick={handleTheme}
                      className={`rounded-lg ${theme === "light" ? "bg-app-primary" : ""} px-4 py-2 text-sm cursor-pointer transition-colors duration-500`}
                    >
                      {t("setting.light")}
                    </button>
                  </div>
                </div>
                <div className="mt-5 flex items-center justify-between">
                  <div>
                    <b>{t("setting.language")}</b>
                    <p className="text-sm text-app-text-muted">
                      {t("setting.title-3")}
                    </p>
                  </div>
                  <select
                    onClick={(e) => {
                      languageHandler(e.target.value);
                    }}
                    className="rounded-xl border border-app-text/10 bg-app-surface px-4 py-2"
                  >
                    <option value={"en"}>English </option>
                    <option value={"fa"}>فارسی </option>
                  </select>
                </div>
              </section>
              <section className="rounded-2xl border border-app-text/10 bg-app-surface p-6">
                <h3 className="font-bold">{t("setting.security")}</h3>
                <div className="mt-5 divide-y divide-white/10">
                  <div className="flex items-center justify-between py-4">
                    <div>
                      <b>{t("setting.two-factor")}</b>
                      <p className="text-sm text-app-text-muted">
                        {t("setting.title-4")}
                      </p>
                    </div>
                    <span className="rounded-full bg-app-success/10 px-3 py-1 text-xs text-app-success">
                      {t("setting.enable")}
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-4">
                    <div>
                      <b>{t("setting.login")}</b>
                      <p className="text-sm text-app-text-muted">
                        {t("setting.title-5")}
                      </p>
                    </div>
                    <span className="h-6 w-11 rounded-full bg-app-primary p-1">
                      <span className="block h-4 w-4 translate-x-5 rounded-full bg-app-text"></span>
                    </span>
                  </div>
                </div>
              </section>
              <section className="rounded-2xl border border-app-danger/20 bg-app-danger/5 p-6">
                <h3 className="font-bold text-app-danger">
                  {t("setting.danger")}
                </h3>
                <p className="mt-2 text-sm text-app-text-muted">
                  {t("setting.title-6")}
                </p>
                <button className="mt-4 rounded-xl border border-danger/30 px-4 py-2 text-sm text-app-danger cursor-pointer">
                  {t("setting.delete")}
                </button>
              </section>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default Setting;
