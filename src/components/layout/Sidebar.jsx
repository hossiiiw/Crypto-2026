import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="hidden min-h-screen w-64 text-app-text shrink-0 border-r border-white/10 bg-app-surface p-4 lg:block">
      <Link
        to="/"
        className="mb-8 flex items-center gap-2 px-3 text-xl font-black"
      >
        <span className="grid h-9 w-9 place-items-center rounded-xl bg-app-primary text-white">
          C
        </span>{" "}
        Coinova
      </Link>
      <p className="px-3 pb-2 text-xs font-bold uppercase tracking-widest text-app-text-muted">
        Overview
      </p>
      <nav className="space-y-1">
        <Link
          to="/"
          className="block rounded-xl bg-app-primary/20 px-3 py-3 text-sm font-semibold text-white"
        >
          Dashboard
        </Link>
        <Link
          to="/easy-trade"
          className="block rounded-xl px-3 py-3 text-sm text-app-text-muted hover:bg-white/5 hover:text-white"
        >
          Easy Trade
        </Link>
        <Link
          to="/pro-trade"
          className="block rounded-xl px-3 py-3 text-sm text-app-text-muted hover:bg-white/5 hover:text-white"
        >
          Pro Trade
        </Link>
        <Link
          to="/wallet"
          className="block rounded-xl px-3 py-3 text-sm text-app-text-muted hover:bg-white/5 hover:text-white"
        >
          Wallet
        </Link>
        <Link
          to="/market"
          className="block rounded-xl px-3 py-3 text-sm text-app-text-muted hover:bg-white/5 hover:text-white"
        >
          Markets
        </Link>
        <Link
          to="/history"
          className="block rounded-xl px-3 py-3 text-sm text-app-text-muted hover:bg-white/5 hover:text-white"
        >
          History
        </Link>
      </nav>
      <p className="px-3 pb-2 pt-8 text-xs font-bold uppercase tracking-widest text-app-text-muted">
        Account
      </p>
      <nav className="space-y-1">
        <Link
          to="/profile"
          className="block rounded-xl px-3 py-3 text-sm text-app-text-muted hover:bg-white/5 hover:text-white"
        >
          Profile
        </Link>
        <Link
          to="/setting"
          className="block rounded-xl px-3 py-3 text-sm text-app-text-muted hover:bg-white/5 hover:text-white"
        >
          Settings
        </Link>
        <Link
          to="/support"
          className="block rounded-xl px-3 py-3 text-sm text-app-text-muted hover:bg-white/5 hover:text-white"
        >
          Support
        </Link>
      </nav>
    </aside>
  );
}

export default Sidebar;
