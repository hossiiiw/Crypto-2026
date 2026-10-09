import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function Sidebar() {
  const { t } = useTranslation();
  return (
    <aside className="hidden min-h-screen w-64 text-app-text shrink-0 border-r border-app-text/10 bg-app-surface p-4 lg:block">
      <Link
        to="/"
        className="mb-8 flex items-center gap-2 px-3 text-xl font-black"
      >
        <span className="grid h-9 w-9 place-items-center rounded-xl bg-app-primary text-app-text">
          C
        </span>{" "}
        Coinova
      </Link>
      <p className="px-3 pb-2 text-xs font-bold uppercase tracking-widest text-app-text-muted">
        {t("sidebar.title-1")}
      </p>
      <nav className="space-y-1">
        <Link
          to="/dashboard"
          className="block rounded-xl bg-app-primary/20 px-3 py-3 text-sm font-semibold text-app-text"
        >
          {t("sidebar.dashboard")}
        </Link>
        <Link
          to="/easy-trade"
          className="block rounded-xl px-3 py-3 text-sm text-app-text-muted hover:bg-app-text/5 hover:text-app-text"
        >
          {t("sidebar.easy-trade")}
        </Link>
        <Link
          to="/pro-trade"
          className="block rounded-xl px-3 py-3 text-sm text-app-text-muted hover:bg-app-text/5 hover:text-app-text"
        >
          {t("sidebar.pro-trade")}
        </Link>
        <Link
          to="/wallet"
          className="block rounded-xl px-3 py-3 text-sm text-app-text-muted hover:bg-app-text/5 hover:text-app-text"
        >
          {t("sidebar.wallet")}
        </Link>
        <Link
          to="/market"
          className="block rounded-xl px-3 py-3 text-sm text-app-text-muted hover:bg-app-text/5 hover:text-app-text"
        >
          {t("sidebar.markets")}
        </Link>
        <Link
          to="/history"
          className="block rounded-xl px-3 py-3 text-sm text-app-text-muted hover:bg-app-text/5 hover:text-app-text"
        >
          {t("sidebar.history")}
        </Link>
      </nav>
      <p className="px-3 pb-2 pt-8 text-xs font-bold uppercase tracking-widest text-app-text-muted">
        {t("sidebar.account")}
      </p>
      <nav className="space-y-1">
        <Link
          to="/profile"
          className="block rounded-xl px-3 py-3 text-sm text-app-text-muted hover:bg-app-text/5 hover:text-app-text"
        >
          {t("sidebar.profile")}
        </Link>
        <Link
          to="/setting"
          className="block rounded-xl px-3 py-3 text-sm text-app-text-muted hover:bg-app-text/5 hover:text-app-text"
        >
          {t("sidebar.setting")}
        </Link>
        <Link
          to="/support"
          className="block rounded-xl px-3 py-3 text-sm text-app-text-muted hover:bg-app-text/5 hover:text-app-text"
        >
          {t("sidebar.support")}
        </Link>
      </nav>
    </aside>
  );
}

export default Sidebar;
