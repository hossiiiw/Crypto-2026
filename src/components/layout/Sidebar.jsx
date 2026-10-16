import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

function Sidebar() {
  const { t } = useTranslation();
  const [test, setTest] = useState(false);
  return (
    <>
      <aside className="hidden min-h-screen w-64 text-app-text shrink-0 border-r border-app-text/10 bg-app-surface p-4 lg:block">
        <NavLink
          to="/"
          className="mb-8 flex items-center gap-2 px-3 text-xl font-black"
        >
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-app-primary text-app-text">
            C
          </span>{" "}
          Coinova
        </NavLink>
        <p className="px-3 pb-2 text-xs font-bold uppercase tracking-widest text-app-text-muted">
          {t("sidebar.title-1")}
        </p>
        <nav className="space-y-1">
          <NavLink
            to="/dashboard"
            className="block rounded-xl bg-app-primary/20 px-3 py-3 text-sm font-semibold text-app-text"
          >
            {t("sidebar.dashboard")}
          </NavLink>
          <NavLink
            to="/easy-trade"
            className="block rounded-xl px-3 py-3 text-sm text-app-text-muted hover:bg-app-text/5 hover:text-app-text"
          >
            {t("sidebar.easy-trade")}
          </NavLink>
          <NavLink
            to="/pro-trade"
            className="block rounded-xl px-3 py-3 text-sm text-app-text-muted hover:bg-app-text/5 hover:text-app-text"
          >
            {t("sidebar.pro-trade")}
          </NavLink>
          <NavLink
            to="/wallet"
            className="block rounded-xl px-3 py-3 text-sm text-app-text-muted hover:bg-app-text/5 hover:text-app-text"
          >
            {t("sidebar.wallet")}
          </NavLink>
          <NavLink
            to="/market"
            className="block rounded-xl px-3 py-3 text-sm text-app-text-muted hover:bg-app-text/5 hover:text-app-text"
          >
            {t("sidebar.markets")}
          </NavLink>
          <NavLink
            to="/history"
            className="block rounded-xl px-3 py-3 text-sm text-app-text-muted hover:bg-app-text/5 hover:text-app-text"
          >
            {t("sidebar.history")}
          </NavLink>
        </nav>
        <p className="px-3 pb-2 pt-8 text-xs font-bold uppercase tracking-widest text-app-text-muted">
          {t("sidebar.account")}
        </p>
        <nav className="space-y-1">
          <NavLink
            to="/profile"
            className="block rounded-xl px-3 py-3 text-sm text-app-text-muted hover:bg-app-text/5 hover:text-app-text"
          >
            {t("sidebar.profile")}
          </NavLink>
          <NavLink
            to="/setting"
            className="block rounded-xl px-3 py-3 text-sm text-app-text-muted hover:bg-app-text/5 hover:text-app-text"
          >
            {t("sidebar.setting")}
          </NavLink>
          <NavLink
            to="/support"
            className="block rounded-xl px-3 py-3 text-sm text-app-text-muted hover:bg-app-text/5 hover:text-app-text"
          >
            {t("sidebar.support")}
          </NavLink>
        </nav>
      </aside>
      {/* --------------------mobile menu---------------------------- */}
      <div className="absolute md:hidden z-10 w-full h-screen bg-app-surface/80 transition-all duration-300 ease-in-out">
        <span className="absolute left-6 top-6 font-extrabold text-3xl text-app-primary">
          X
        </span>
        <nav className="w-full flex flex-col items-center gap-3 mt-10">
          <NavLink
            to="/"
            className="mb-8 flex items-center gap-2 px-3 text-xl font-black text-app-text"
          >
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-app-primary text-app-text">
              C
            </span>{" "}
            Coinova
          </NavLink>
          <NavLink
            to="/dashboard"
            className="block rounded-xl px-3 py-3 text-center text-sm text-app-text-muted w-[50%] bg-app-input hover:bg-app-text/5 hover:text-app-text"
          >
            {t("sidebar.dashboard")}
          </NavLink>
          <NavLink
            to="/easy-trade"
            className="block rounded-xl px-3 py-3 text-center text-sm text-app-text-muted w-[50%] bg-app-input hover:bg-app-text/5 hover:text-app-text"
          >
            {t("sidebar.easy-trade")}
          </NavLink>
          <NavLink
            to="/pro-trade"
            className="block rounded-xl px-3 py-3 text-center text-sm text-app-text-muted w-[50%] bg-app-input hover:bg-app-text/5 hover:text-app-text"
          >
            {t("sidebar.pro-trade")}
          </NavLink>
          <NavLink
            to="/wallet"
            className="block rounded-xl px-3 py-3 text-center text-sm text-app-text-muted w-[50%] bg-app-input hover:bg-app-text/5 hover:text-app-text"
          >
            {t("sidebar.wallet")}
          </NavLink>
          <NavLink
            to="/market"
            className="block rounded-xl px-3 py-3 text-center text-sm text-app-text-muted w-[50%] bg-app-input hover:bg-app-text/5 hover:text-app-text"
          >
            {t("sidebar.markets")}
          </NavLink>
          <NavLink
            to="/history"
            className="block rounded-xl px-3 py-3 text-center text-sm text-app-text-muted w-[50%] bg-app-input hover:bg-app-text/5 hover:text-app-text"
          >
            {t("sidebar.history")}
          </NavLink>
          <NavLink
            to="/profile"
            className="block rounded-xl px-3 py-3 text-center text-sm text-app-text-muted w-[50%] bg-app-input hover:bg-app-text/5 hover:text-app-text"
          >
            {t("sidebar.profile")}
          </NavLink>
          <NavLink
            to="/setting"
            className="block rounded-xl px-3 py-3 text-center text-sm text-app-text-muted w-[50%] bg-app-input hover:bg-app-text/5 hover:text-app-text"
          >
            {t("sidebar.setting")}
          </NavLink>
          <NavLink
            to="/support"
            className="block rounded-xl px-3 py-3 text-center text-sm text-app-text-muted w-[50%] bg-app-input hover:bg-app-text/5 hover:text-app-text"
          >
            {t("sidebar.support")}
          </NavLink>
        </nav>
      </div>
    </>
  );
}

export default Sidebar;
