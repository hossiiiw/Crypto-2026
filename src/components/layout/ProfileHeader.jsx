import React from "react";
import { useTranslation } from "react-i18next";

function ProfileHeader() {
  const { t } = useTranslation();
  return (
    <>
      <header className="flex h-16 text-app-text items-center justify-between border-b border-app-text/10 bg-bg/80 px-4 backdrop-blur md:px-6">
        <div>
          <p className="text-sm text-app-text-muted">
            {t("profileHeader.wellcome")}
          </p>
          <h2 className="font-bold">{t("profileHeader.Good")}, Alex</h2>
        </div>
        <div className="flex items-center gap-3">
          <button className="grid h-10 w-10 place-items-center rounded-xl border border-app-text/10 bg-app-surface text-app-text-muted">
            🔔
          </button>
          <div className="hidden rounded-xl bg-app-surface px-3 py-2 text-sm sm:block">
            Alex Morgan
          </div>
        </div>
      </header>
    </>
  );
}

export default ProfileHeader;
