import  { useState } from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import { Transition } from "@headlessui/react";
import { Fragment } from "react";

function Sidebar() {
  const { t } = useTranslation();

  const [isOpen, setIsOpen] = useState(false);

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
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                  ? "block rounded-xl bg-app-primary/20 px-3 py-3 text-sm font-semibold text-app-text"
                  : "block rounded-xl px-3 py-3 text-sm text-app-text-muted hover:bg-app-text/5 hover:text-app-text"
            }
          >
            {t("sidebar.dashboard")}
          </NavLink>
          <NavLink
            to="/easy-trade"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                  ? "block rounded-xl bg-app-primary/20 px-3 py-3 text-sm font-semibold text-app-text"
                  : "block rounded-xl px-3 py-3 text-sm text-app-text-muted hover:bg-app-text/5 hover:text-app-text"
            }
          >
            {t("sidebar.easy-trade")}
          </NavLink>
          <NavLink
            to="/pro-trade"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                  ? "block rounded-xl bg-app-primary/20 px-3 py-3 text-sm font-semibold text-app-text"
                  : "block rounded-xl px-3 py-3 text-sm text-app-text-muted hover:bg-app-text/5 hover:text-app-text"
            }
          >
            {t("sidebar.pro-trade")}
          </NavLink>
          <NavLink
            to="/wallet"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                  ? "block rounded-xl bg-app-primary/20 px-3 py-3 text-sm font-semibold text-app-text"
                  : "block rounded-xl px-3 py-3 text-sm text-app-text-muted hover:bg-app-text/5 hover:text-app-text"
            }
          >
            {t("sidebar.wallet")}
          </NavLink>
          <NavLink
            to="/market"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                  ? "block rounded-xl bg-app-primary/20 px-3 py-3 text-sm font-semibold text-app-text"
                  : "block rounded-xl px-3 py-3 text-sm text-app-text-muted hover:bg-app-text/5 hover:text-app-text"
            }
          >
            {t("sidebar.markets")}
          </NavLink>
          <NavLink
            to="/history"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                  ? "block rounded-xl bg-app-primary/20 px-3 py-3 text-sm font-semibold text-app-text"
                  : "block rounded-xl px-3 py-3 text-sm text-app-text-muted hover:bg-app-text/5 hover:text-app-text"
            }
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
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                  ? "block rounded-xl bg-app-primary/20 px-3 py-3 text-sm font-semibold text-app-text"
                  : "block rounded-xl px-3 py-3 text-sm text-app-text-muted hover:bg-app-text/5 hover:text-app-text"
            }
          >
            {t("sidebar.profile")}
          </NavLink>
          <NavLink
            to="/setting"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                  ? "block rounded-xl bg-app-primary/20 px-3 py-3 text-sm font-semibold text-app-text"
                  : "block rounded-xl px-3 py-3 text-sm text-app-text-muted hover:bg-app-text/5 hover:text-app-text"
            }
          >
            {t("sidebar.setting")}
          </NavLink>
          <NavLink
            to="/support"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                  ? "block rounded-xl bg-app-primary/20 px-3 py-3 text-sm font-semibold text-app-text"
                  : "block rounded-xl px-3 py-3 text-sm text-app-text-muted hover:bg-app-text/5 hover:text-app-text"
            }
          >
            {t("sidebar.support")}
          </NavLink>
        </nav>
      </aside>
      {/* --------------------mobile menu---------------------------- */}

      <div className="relative">
        {/* دکمه همبرگری */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none"
          aria-label="Toggle menu"
        >
          {/* آیکون ساده همبرگری */}
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* منوی کشویی با انیمیشن */}
        <Transition
          show={isOpen}
          as={Fragment}
          enter="transition ease-out duration-300"
          enterFrom="opacity-0 -translate-x-4"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-in duration-200"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 -translate-y-4"
        >
          <div className="absolute z-10 top-[50px]  mt-2 w-52 p-2 bg-app-surface text-app-text rounded-lg shadow-lg ring-1 ring-app-primary  focus:outline-none">
            <div className="py-1">
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
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                        ? "block rounded-xl px-3 py-3 text-sm text-app-text bg-app-primary/50"
                        : "block rounded-xl px-3 py-3 text-sm text-app-text-muted hover:bg-app-primary/5 hover:text-app-text"
                  }
                >
                  {t("sidebar.dashboard")}
                </NavLink>
                <NavLink
                  to="/easy-trade"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                        ? "block rounded-xl px-3 py-3 text-sm text-app-text bg-app-primary/50"
                        : "block rounded-xl px-3 py-3 text-sm text-app-text-muted hover:bg-app-primary/5 hover:text-app-text"
                  }
                >
                  {t("sidebar.easy-trade")}
                </NavLink>
                <NavLink
                  to="/pro-trade"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                        ? "block rounded-xl px-3 py-3 text-sm text-app-text bg-app-primary/50"
                        : "block rounded-xl px-3 py-3 text-sm text-app-text-muted hover:bg-app-primary/5 hover:text-app-text"
                  }
                >
                  {t("sidebar.pro-trade")}
                </NavLink>
                <NavLink
                  to="/wallet"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                        ? "block rounded-xl px-3 py-3 text-sm text-app-text bg-app-primary/50"
                        : "block rounded-xl px-3 py-3 text-sm text-app-text-muted hover:bg-app-primary/5 hover:text-app-text"
                  }
                >
                  {t("sidebar.wallet")}
                </NavLink>
                <NavLink
                  to="/market"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                        ? "block rounded-xl px-3 py-3 text-sm text-app-text bg-app-primary/50"
                        : "block rounded-xl px-3 py-3 text-sm text-app-text-muted hover:bg-app-primary/5 hover:text-app-text"
                  }
                >
                  {t("sidebar.markets")}
                </NavLink>
                <NavLink
                  to="/history"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                        ? "block rounded-xl px-3 py-3 text-sm text-app-text bg-app-primary/50"
                        : "block rounded-xl px-3 py-3 text-sm text-app-text-muted hover:bg-app-primary/5 hover:text-app-text"
                  }
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
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                        ? "block rounded-xl px-3 py-3 text-sm text-app-text bg-app-primary/50"
                        : "block rounded-xl px-3 py-3 text-sm text-app-text-muted hover:bg-app-primary/5 hover:text-app-text"
                  }
                >
                  {t("sidebar.profile")}
                </NavLink>
                <NavLink
                  to="/setting"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                        ? "block rounded-xl px-3 py-3 text-sm text-app-text bg-app-primary/50"
                        : "block rounded-xl px-3 py-3 text-sm text-app-text-muted hover:bg-app-primary/5 hover:text-app-text"
                  }
                >
                  {t("sidebar.setting")}
                </NavLink>
                <NavLink
                  to="/support"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                        ? "block rounded-xl px-3 py-3 text-sm text-app-text bg-app-primary/50"
                        : "block rounded-xl px-3 py-3 text-sm text-app-text-muted hover:bg-app-primary/5 hover:text-app-text"
                  }
                >
                  {t("sidebar.support")}
                </NavLink>
              </nav>
            </div>
          </div>
        </Transition>
      </div>
    </>
  );
}

export default Sidebar;
