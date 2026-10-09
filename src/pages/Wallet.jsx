import React from "react";
import Sidebar from "../components/layout/Sidebar";
import ProfileHeader from "../components/layout/ProfileHeader";
import { useTranslation } from "react-i18next";

function Wallet() {
  const { t } = useTranslation();
  return (
    <>
      <div className="flex">
        <Sidebar />
        <main className="min-w-0 flex-1">
          <ProfileHeader />
          <div className="mx-auto max-w-7xl text-app-text p-4 md:p-6">
            <div className="flex items-end justify-between">
              <div>
                <p className="text-sm text-app-text-muted">
                  {t("wallet.wallet")}
                </p>
                <h1 className="text-3xl font-black">
                  {t("wallet.your-assets")}
                </h1>
              </div>
              <div className="flex gap-2">
                <button className="rounded-xl border border-app-text/10 bg-app-surface px-4 py-2">
                  {t("wallet.deposit")}
                </button>
                <button className="rounded-xl bg-app-primary px-4 py-2 font-bold">
                  {t("wallet.withdraw")}
                </button>
              </div>
            </div>
            <div className="mt-7 rounded-2xl border border-app-text/10 bg-app-surface p-6">
              <p className="text-sm text-app-text-muted">
                {t("wallet.your-balance")}
              </p>
              <p className="mt-2 text-4xl font-black">$24,892.64</p>
            </div>
            <div className="mt-6 overflow-x-auto rounded-2xl border border-app-text/10 bg-app-surface">
              <table className="w-[90%] min-w-[700px] text-right">
                <thead className="border-b border-app-text/10 text-sm text-app-text-muted">
                  <tr>
                    <th className="p-5">{t("wallet.assets")}</th>
                    <th>{t("wallet.balance")}</th>
                    <th>{t("wallet.price")}</th>
                    <th>{t("wallet.value")}</th>
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
                      <button className="text-app-primary">
                        {t("wallet.manage")}
                      </button>
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
