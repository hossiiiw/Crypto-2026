import React from "react";
import Sidebar from "../components/layout/Sidebar";
import ProfileHeader from "../components/layout/ProfileHeader";

function Wallet() {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <main className="min-w-0 flex-1">
          <ProfileHeader />
          <div className="mx-auto max-w-7xl text-app-text p-4 md:p-6">
            <div className="flex items-end justify-between">
              <div>
                <p className="text-sm text-app-text-muted">Wallet</p>
                <h1 className="text-3xl font-black">Your assets</h1>
              </div>
              <div className="flex gap-2">
                <button className="rounded-xl border border-app-text/10 bg-app-surface px-4 py-2">
                  Deposit
                </button>
                <button className="rounded-xl bg-app-primary px-4 py-2 font-bold">
                  Withdraw
                </button>
              </div>
            </div>
            <div className="mt-7 rounded-2xl border border-app-text/10 bg-app-surface p-6">
              <p className="text-sm text-app-text-muted">Total balance</p>
              <p className="mt-2 text-4xl font-black">$24,892.64</p>
            </div>
            <div className="mt-6 overflow-x-auto rounded-2xl border border-app-text/10 bg-app-surface">
              <table className="w-full min-w-[700px] text-left">
                <thead className="border-b border-app-text/10 text-sm text-app-text-muted">
                  <tr>
                    <th className="p-5">Asset</th>
                    <th>Balance</th>
                    <th>Price</th>
                    <th>Value</th>
                    <th>24h</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-app-text/5">
                    <td className="p-5 font-bold">a</td>
                    <td>b</td>
                    <td>p</td>
                    <td>v</td>
                    <td className="{cl}">ch</td>
                    <td>
                      <button className="text-app-primary">Manage</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default Wallet;
