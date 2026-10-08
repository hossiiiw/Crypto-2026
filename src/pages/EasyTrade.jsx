import React from "react";
import Sidebar from "../components/layout/Sidebar";
import ProfileHeader from "../components/layout/ProfileHeader";

function EasyTrade() {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <main className="min-w-0 flex-1 text-app-text">
          <ProfileHeader />
          <div className="mx-auto max-w-7xl p-4 md:p-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-sm text-app-text-muted">Easy Trade</p>
                <h1 className="text-3xl font-black">Buy & Sell Crypto</h1>
              </div>
              <a
                href="pro-trade.html"
                className="rounded-xl border border-white/10 bg-app-surface px-4 py-2 text-sm"
              >
                Pro Trading →
              </a>
            </div>
            <div className="mt-7 grid gap-6 lg:grid-cols-5">
              <div className="rounded-3xl border border-white/10 bg-app-surface p-6 lg:col-span-3">
                <div className="flex gap-2">
                  <button className="flex-1 rounded-xl bg-app-primary py-3 font-bold">
                    Buy
                  </button>
                  <button className="flex-1 rounded-xl bg-white/5 py-3 text-app-text-muted">
                    Sell
                  </button>
                </div>
                <div className="mt-6 flex items-center justify-between rounded-xl border border-white/10 bg-app-input p-4">
                  <div>
                    <p className="text-xs text-app-text-muted">Pay</p>
                    <b className="text-2xl">1,000</b>
                  </div>
                  <b>USD ▾</b>
                </div>
                <div className="mx-auto my-3 grid h-10 w-10 place-items-center rounded-full border border-app-primary bg-card">
                  ↓
                </div>
                <div className="flex items-center justify-between rounded-xl border border-white/10 bg-app-input p-4">
                  <div>
                    <p className="text-xs text-app-text-muted">Receive</p>
                    <b className="text-2xl">0.0147</b>
                  </div>
                  <b>BTC ▾</b>
                </div>
                <button className="mt-6 w-full rounded-xl bg-app-primary py-4 font-bold">
                  Preview Order
                </button>
              </div>
              <div className="rounded-3xl border border-white/10 bg-app-surface p-6 lg:col-span-2">
                <h3 className="font-bold">Market overview</h3>
                <div className="mt-5 rounded-2xl bg-app-input p-5">
                  <p className="text-sm text-app-text-muted">BTC/USDT</p>
                  <p className="mt-1 text-3xl font-black">$67,842.21</p>
                  <p className="mt-1 text-sm text-app-success">+4.82%</p>
                </div>
                <div className="mt-4 space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-app-text-muted">Spread</span>
                    <b>0.02%</b>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-app-text-muted">24h Volume</span>
                    <b>$2.8B</b>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-app-text-muted">Liquidity</span>
                    <b className="text-app-success">High</b>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default EasyTrade;
