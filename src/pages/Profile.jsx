import { useTranslation } from "react-i18next";
import ProfileHeader from "../components/layout/ProfileHeader";
import Sidebar from "../components/layout/Sidebar";

function Profile() {
  const { t } = useTranslation();
  return (
    <>
      <div className="flex">
        <Sidebar />
        <main className="min-w-0 flex-1 text-app-text">
          <ProfileHeader />
          <div className="mx-auto max-w-7xl p-4 md:p-6">
            <div>
              <p className="text-sm text-app-text-muted">
                {t("profile.account")}
              </p>
              <h1 className="text-3xl font-black">{t("profile.profile")}</h1>
            </div>
            <div className="mt-7 grid gap-6 lg:grid-cols-3">
              <div className="rounded-2xl border border-app-text/10 bg-app-surface p-6 text-center">
                <div className="mx-auto grid h-24 w-24 place-items-center rounded-full bg-app-primary/20 text-3xl font-black text-app-primary">
                  AM
                </div>
                <h2 className="mt-4 text-xl font-bold">Alex Morgan</h2>
                <p className="text-sm text-app-text-muted">alex@example.com</p>
                <span className="mt-4 inline-block rounded-full bg-app-success/10 px-3 py-1 text-xs text-app-success">
                  {t("profile.verified")}
                </span>
              </div>
              <div className="rounded-2xl border border-app-text/10 bg-app-surface p-6 lg:col-span-2">
                <h3 className="font-bold">{t("profile.title-1")}</h3>
                <div className="mt-5 grid gap-4 md:grid-cols-2">
                  <label className="text-sm text-app-text-muted">
                    {t("profile.label-1")}
                    <input
                      className="mt-2 w-full rounded-xl border border-app-text/10 bg-app-input p-3 text-app-text-muted outline-none focus:border-app-primary"
                      // value="Alex"
                    />
                  </label>
                  <label className="text-sm text-app-text-muted">
                    {t("profile.label-2")}
                    <input
                      className="mt-2 w-full rounded-xl border border-app-text/10 bg-app-input p-3 text-app-text-muted outline-none focus:border-app-primary"
                      // value="Morgan"
                    />
                  </label>
                  <label className="text-sm text-app-text-muted">
                    {t("profile.label-3")}
                    <input
                      className="mt-2 w-full rounded-xl border border-app-text/10 bg-app-input p-3 text-app-text-muted outline-none focus:border-app-primary"
                      // value="alex@example.com"
                    />
                  </label>
                  <label className="text-sm text-app-text-muted">
                    {t("profile.label-4")}
                    <input
                      className="mt-2 w-full rounded-xl border border-app-text/10 bg-app-input p-3 text-app-text-muted outline-none focus:border-app-primary"
                      // value="+1 555 123 4567"
                    />
                  </label>
                </div>
                <button className="mt-6 rounded-xl bg-app-primary px-5 py-3 font-bold">
                  {t("profile.save")}
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default Profile;
