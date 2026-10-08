import React from "react";
import CryptoPrice from "../components/Home/CryptoPrice";
import CryptoTable from "../components/Home/CryptoTable";
import MobileNav from "../components/layout/MobileNav";

export default function Landing() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl text-app-text gap-12 px-4 py-20 md:grid-cols-2 md:items-center md:py-28">
          <div>
            <span className="rounded-full border border-primary/30 bg-app-primary/10 px-3 py-1 text-xs font-bold text-app-primary">
              THE FUTURE OF DIGITAL ASSETS
            </span>
            <h1 className="mt-6 text-5xl text-app-text font-black leading-tight  md:text-7xl">
              Trade crypto.
              <br />
              <span className="text-app-primary">Your way.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-app-text-muted">
              Buy, sell and manage your digital assets with a secure, fast and
              beautifully simple crypto exchange.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="register.html"
                className="rounded-xl bg-app-primary px-6 py-3 font-bold hover:bg-purple-600"
              >
                Start Trading
              </a>
              <a
                href="markets.html"
                className="rounded-xl border border-white/10 bg-app-surface px-6 py-3 font-bold hover:bg-app-border"
              >
                Explore Markets
              </a>
            </div>
            <div className="mt-8 flex gap-8 text-sm">
              <div>
                <b className="text-xl">2.4M+</b>
                <p className="text-app-text-muted">Users</p>
              </div>
              <div>
                <b className="text-xl">$18B+</b>
                <p className="text-app-text-muted">Volume</p>
              </div>
              <div>
                <b className="text-xl">99.99%</b>
                <p className="text-app-text-muted">Uptime</p>
              </div>
            </div>
          </div>
          <CryptoTable />
        </div>
      </section>
      <CryptoPrice />
      <section className="mx-auto max-w-7xl px-4 py-20 text-app-text">
        <div className="text-center">
          <p className="font-bold text-app-primary">WHY COINOVA</p>
          <h2 className="mt-2 text-4xl font-black">Everything you need to trade</h2>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-app-surface p-6">
            <div className="text-3xl">🛡️</div>
            <h3 className="mt-5 text-xl font-bold">Bank-grade security</h3>
            <p className="mt-3 text-sm leading-6 text-app-text-muted">
              Two-factor authentication, cold storage and advanced account
              protection.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-app-surface p-6">
            <div className="text-3xl">⚡</div>
            <h3 className="mt-5 text-xl font-bold">Lightning fast</h3>
            <p className="mt-3 text-sm leading-6 text-app-text-muted">
              Fast execution and a clean interface built for every level of
              trader.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-app-surface p-6">
            <div className="text-3xl">📊</div>
            <h3 className="mt-5 text-xl font-bold">Advanced tools</h3>
            <p className="mt-3 text-sm leading-6 text-app-text-muted">
              Real-time markets, charts, portfolio analytics and professional
              trading tools.
            </p>
          </div>
        </div>
      </section>
      
    </>
  );
}
