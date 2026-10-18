import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import { AppAuthContext } from "../../context/Auth/AuthContext";

function MobileNav() {
  const { t } = useTranslation();
  const { login } = useContext(AppAuthContext);
  return (
    <>
      <nav className="fixed bottom-0 left-0 right-0 z-[60] border-t border-app-text/10 bg-[#221B4D]/95 px-2  pb-[env(safe-area-inset-bottom)] pt-2 backdrop-blur-xl lg:hidden">
        <div className="mx-auto grid max-w-lg grid-cols-5 gap-1 py-2">
          {login && (
            <NavLink
              to="/dashboard"
              className={({ isActive, isPending }) =>
                isPending
                  ? ""
                  : isActive
                    ? "flex flex-col items-center gap-1 rounded-xl bg-app-primary/20 py-2 text-[10px] font-bold text-app-primary"
                    : "flex flex-col items-center gap-1 rounded-xl py-2 text-[10px] text-app-text-muted"
              }
            >
              <span className="text-lg">⌂</span>
              {t("mobile-nav.dashboard")}
            </NavLink>
          )}
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending
                ? ""
                : isActive
                  ? "flex flex-col items-center gap-1 rounded-xl bg-app-primary/20 py-2 text-[10px] font-bold text-app-primary"
                  : "flex flex-col items-center gap-1 rounded-xl py-2 text-[10px] text-app-text-muted"
            }
          >
            <span className="text-lg">⌂</span>
            {t("mobile-nav.home")}
          </NavLink>
          <NavLink
            to="/market"
            className={({ isActive, isPending }) =>
              isPending
                ? ""
                : isActive
                  ? "flex flex-col items-center gap-1 rounded-xl bg-app-primary/20 py-2 text-[10px] font-bold text-app-primary"
                  : "flex flex-col items-center gap-1 rounded-xl py-2 text-[10px] text-app-text-muted"
            }
          >
            <span className="text-lg">◈</span>
            {t("mobile-nav.markets")}
          </NavLink>
          <NavLink
            to="/buy-crypto"
            className={({ isActive, isPending }) =>
              isPending
                ? ""
                : isActive
                  ? "flex flex-col items-center gap-1 rounded-xl bg-app-primary/20 py-2 text-[10px] font-bold text-app-primary"
                  : "flex flex-col items-center gap-1 rounded-xl py-2 text-[10px] text-app-text-muted"
            }
          >
            <span className="text-lg">＋</span>
            {t("mobile-nav.buy")}
          </NavLink>
          {!login && (
            <NavLink
              to="/login"
              className={({ isActive, isPending }) =>
                isPending
                  ? ""
                  : isActive
                    ? "flex flex-col items-center gap-1 rounded-xl bg-app-primary/20 py-2 text-[10px] font-bold text-app-primary"
                    : "flex flex-col items-center gap-1 rounded-xl py-2 text-[10px] text-app-text-muted"
              }
            >
              <span className="text-lg">⇥</span>
              {t("mobile-nav.login")}
            </NavLink>
          )}
          <NavLink
            to="/support"
            className={({ isActive, isPending }) =>
              isPending
                ? ""
                : isActive
                  ? "flex flex-col items-center gap-1 rounded-xl bg-app-primary/20 py-2 text-[10px] font-bold text-app-primary"
                  : "flex flex-col items-center gap-1 rounded-xl py-2 text-[10px] text-app-text-muted"
            }
          >
            <span className="text-lg">?</span>
            {t("mobile-nav.support")}
          </NavLink>
        </div>
      </nav>
    </>
  );
}

export default MobileNav;
