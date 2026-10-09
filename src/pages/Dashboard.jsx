import React from "react";
import Sidebar from "../components/layout/Sidebar";
import ProfileHeader from "../components/layout/ProfileHeader";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <main className="min-w-0 flex-1 text-app-text">
          <ProfileHeader />
          <div class="mx-auto max-w-7xl p-4 md:p-6">
            <div class="flex items-end justify-between">
              <div>
                <p class="text-sm text-app-text-muted">Portfolio value</p>
                <h1 class="mt-1 text-4xl font-black">$24,892.64</h1>
                <p class="mt-2 text-sm text-app-success">
                  +$1,248.32 (+5.27%) today
                </p>
              </div>
              <Link
                to="/buy-crypto"
                class="rounded-xl bg-app-primary px-5 py-3 font-bold"
              >
                Buy Crypto
              </Link>
            </div>
            <div class="mt-7 grid gap-4 md:grid-cols-3">
              <div class="rounded-2xl border border-app-text/10 bg-app-surface p-5">
                <p class="text-sm text-app-text-muted">Available balance</p>
                <p class="mt-2 text-2xl font-black">$8,420.20</p>
              </div>
              <div class="rounded-2xl border border-app-text/10 bg-app-surface p-5">
                <p class="text-sm text-app-text-muted">Invested</p>
                <p class="mt-2 text-2xl font-black">$16,472.44</p>
              </div>
              <div class="rounded-2xl border border-app-text/10 bg-app-surface p-5">
                <p class="text-sm text-app-text-muted">24h P&L</p>
                <p class="mt-2 text-2xl font-black text-app-success">
                  +$842.10
                </p>
              </div>
            </div>
            <div class="mt-6 grid gap-6 lg:grid-cols-3">
              <div class="rounded-2xl border border-app-text/10 bg-app-surface p-6 lg:col-span-2">
                <div class="flex justify-between">
                  <h3 class="font-bold">Portfolio performance</h3>
                  <button class="rounded-lg bg-app-text/5 px-3 py-2 text-xs text-app-text-muted">
                    7D ▾
                  </button>
                </div>
                <div class="mt-8 flex h-64 items-end gap-2">
                  <div class="flex-1 rounded-t bg-app-primary/{30+(i%6)*10}"></div>
                </div>
              </div>
              <div class="rounded-2xl border border-app-text/10 bg-app-surface p-6">
                <h3 class="font-bold">Your assets</h3>
                <div class="mt-5 space-y-4">
                  <div class="flex items-center justify-between">
                    <div>
                      <b>c</b>
                      <p class="text-xs text-app-text-muted">v</p>
                    </div>
                    <b>
                      <pre></pre>
                    </b>
                  </div>
                </div>
              </div>
            </div>
            <div class="mt-6 rounded-2xl border border-app-text/10 bg-app-surface p-6">
              <div class="flex justify-between">
                <h3 class="font-bold">Recent transactions</h3>
                <Link to="/history" class="text-sm text-app-primary">
                  View all
                </Link>
              </div>
              <div class="mt-4 space-y-3">
                <div class="flex items-center justify-between rounded-xl bg-app-text/5 p-4">
                  <div>
                    <b>t</b>
                    <p class="text-xs text-app-text-muted">d</p>
                  </div>
                  <span class="{cl}">amt</span>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default Dashboard;
