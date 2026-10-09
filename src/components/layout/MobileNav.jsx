import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function MobileNav() {
  const { t } = useTranslation();
  return (
    <>
      <nav className="fixed bottom-0 left-0 right-0 z-[60] border-t border-app-text/10 bg-[#221B4D]/95 px-2 pb-[env(safe-area-inset-bottom)] pt-2 backdrop-blur-xl lg:hidden">
        <div className="mx-auto grid max-w-lg grid-cols-5 gap-1">
          <Link
            to="/"
            className="flex flex-col items-center gap-1 rounded-xl py-2 text-[10px] text-app-text-muted"
          >
            <span className="text-lg">⌂</span>
            {t("mobile-nav.home")}
          </Link>
          <Link
            to="/market"
            className="flex flex-col items-center gap-1 rounded-xl py-2 text-[10px] text-app-text-muted"
          >
            <span className="text-lg">◈</span>
            {t("mobile-nav.markets")}
          </Link>
          <Link
            to="/buy-crypto"
            className="flex flex-col items-center gap-1 rounded-xl bg-app-primary/20 py-2 text-[10px] font-bold text-app-primary"
          >
            <span className="text-lg">＋</span>
            {t("mobile-nav.buy")}
          </Link>
          <Link
            to="/login"
            className="flex flex-col items-center gap-1 rounded-xl py-2 text-[10px] text-app-text-muted"
          >
            <span className="text-lg">⇥</span>
            {t("mobile-nav.login")}
          </Link>
          <Link
            to="/support"
            className="flex flex-col items-center gap-1 rounded-xl py-2 text-[10px] text-app-text-muted"
          >
            <span className="text-lg">?</span>
            {t("mobile-nav.support")}
          </Link>
        </div>
      </nav>
    </>
  );
}

export default MobileNav;
