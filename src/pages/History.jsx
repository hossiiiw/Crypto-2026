import React from "react";
import ProfileHeader from "../components/layout/ProfileHeader";
import Sidebar from "../components/layout/Sidebar";
import { useTranslation } from "react-i18next";

function History() {
  const { t } = useTranslation();
  return (
    <>
      <div className="flex">
        <Sidebar />
        <main className="min-w-0 flex-1 text-app-text">
          <ProfileHeader />

          <div class="mx-auto max-w-7xl p-4 md:p-6">
            <div>
              <p class="text-sm text-app-text-muted">{t("history.title-1")}</p>
              <h1 class="text-3xl font-black">{t("history.title-2")}</h1>
            </div>
            <div class="mt-7 rounded-2xl border border-app-text/10 bg-app-surface p-4">
              <div class="flex flex-wrap gap-2">
                <button class="rounded-lg bg-app-primary px-4 py-2 text-sm">
                  {t("history.all")}
                </button>
                <button class="rounded-lg bg-app-text/5 px-4 py-2 text-sm text-app-text-muted">
                  {t("history.buy")}
                </button>
                <button class="rounded-lg bg-app-text/5 px-4 py-2 text-sm text-app-text-muted">
                  {t("history.sell")}
                </button>
                <button class="rounded-lg bg-app-text/5 px-4 py-2 text-sm text-app-text-muted">
                  {t("history.deposit")}
                </button>
              </div>
            </div>
            <div class="mt-4 overflow-x-auto rounded-2xl border border-app-text/10 bg-app-surface">
              <table class="w-[90%] min-w-[700px] text-left">
                <thead class="border-b border-app-text/10 text-sm text-app-text-muted">
                  <tr>
                    <th class="p-5">{t("history.type")}</th>
                    <th>{t("history.assets")}</th>
                    <th>{t("history.amount")}</th>
                    <th>{t("history.status")}</th>
                    <th>{t("history.date")}</th>
                    <th>{t("history.id")}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="border-b border-app-text/5">
                    <td class="p-5 font-bold">t</td>
                    <td>a</td>
                    <td>amt</td>
                    <td>
                      <span class="rounded-full bg-app-success/10 px-2 py-1 text-xs text-app-success">
                        s
                      </span>
                    </td>
                    <td class="text-app-text-muted">d</td>
                    <td class="text-xs text-app-text-muted">#A9n2F</td>
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

export default History;
