import React, { useContext } from "react";
import Sidebar from "../components/layout/Sidebar";
import ProfileHeader from "../components/layout/ProfileHeader";
import { AppThemeContext } from "../context/Theme/ThemeContext";

function Setting() {
  const { theme, handleTheme } = useContext(AppThemeContext);
  return (
    <>
      <div className="flex">
        <Sidebar />
        <main className="min-w-0 flex-1 text-app-text">
          <ProfileHeader />
          <div className="mx-auto max-w-7xl p-4 md:p-6">
            <div>
              <p className="text-sm text-app-text-muted">Account preferences</p>
              <h1 className="text-3xl font-black">Settings</h1>
            </div>
            <div className="mt-7 max-w-4xl space-y-5">
              <section className="rounded-2xl border border-app-text/10 bg-app-surface p-6">
                <h3 className="font-bold">Appearance</h3>
                <div className="mt-5 flex items-center justify-between">
                  <div>
                    <b>Theme</b>
                    <p className="text-sm text-app-text-muted">
                      Choose how Coinova looks.
                    </p>
                  </div>
                  <div className="flex rounded-xl bg-app-input p-1">
                    <button
                      onClick={handleTheme}
                      className={`rounded-lg ${theme === "dark" ? "bg-app-primary" : ""} px-4 py-2 text-sm cursor-pointer  transition-colors duration-500`}
                    >
                      Dark
                    </button>
                    <button
                      onClick={handleTheme}
                      className={`rounded-lg ${theme === "light" ? "bg-app-primary" : ""} px-4 py-2 text-sm cursor-pointer transition-colors duration-500`}
                    >
                      Light
                    </button>
                  </div>
                </div>
                <div className="mt-5 flex items-center justify-between">
                  <div>
                    <b>Language</b>
                    <p className="text-sm text-app-text-muted">
                      Select your preferred language.
                    </p>
                  </div>
                  <select className="rounded-xl border border-app-text/10 bg-app-surface px-4 py-2">
                    <option value={"EN"}>English </option>
                    <option value={"FA"}>فارسی </option>
                  </select>
                </div>
              </section>
              <section className="rounded-2xl border border-app-text/10 bg-app-surface p-6">
                <h3 className="font-bold">Security</h3>
                <div className="mt-5 divide-y divide-white/10">
                  <div className="flex items-center justify-between py-4">
                    <div>
                      <b>Two-factor authentication</b>
                      <p className="text-sm text-app-text-muted">
                        Protect your account with an authenticator app.
                      </p>
                    </div>
                    <span className="rounded-full bg-app-success/10 px-3 py-1 text-xs text-app-success">
                      Enabled
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-4">
                    <div>
                      <b>Login notifications</b>
                      <p className="text-sm text-app-text-muted">
                        Receive alerts when a new device signs in.
                      </p>
                    </div>
                    <span className="h-6 w-11 rounded-full bg-app-primary p-1">
                      <span className="block h-4 w-4 translate-x-5 rounded-full bg-app-text"></span>
                    </span>
                  </div>
                </div>
              </section>
              <section className="rounded-2xl border border-app-danger/20 bg-app-danger/5 p-6">
                <h3 className="font-bold text-app-danger">Danger zone</h3>
                <p className="mt-2 text-sm text-app-text-muted">
                  Deleting your account is permanent and cannot be undone.
                </p>
                <button className="mt-4 rounded-xl border border-danger/30 px-4 py-2 text-sm text-app-danger cursor-pointer">
                  Delete Account
                </button>
              </section>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default Setting;
