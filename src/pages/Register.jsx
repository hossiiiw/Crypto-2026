import React from "react";
import { Link } from "react-router-dom";

function Register() {
  return (
    <>
      <main className="grid min-h-[calc(98vh-64px)] text-app-text place-items-center px-4 py-12">
        <div className="w-full max-w-md rounded-3xl border border-white/10 bg-app-surface p-7 shadow-2xl">
          <div className="text-center">
            <div className="mx-auto grid h-12 w-12 place-items-center rounded-2xl bg-app-primary text-xl font-black">
              C
            </div>
            <h1 className="mt-5 text-3xl font-black">Create your account</h1>
            <p className="mt-2 text-sm text-app-text-muted">
              Secure access to your Coinova account
            </p>
          </div>
          <form className="mt-8 space-y-4">
            <input
              className="w-full rounded-xl border border-white/10 bg-app-input px-4 py-3 outline-none focus:border-app-primary"
              placeholder="Full name"
            />
            <input
              className="w-full rounded-xl border border-white/10 bg-app-input px-4 py-3 outline-none focus:border-app-primary"
              placeholder="Email address"
              type="email"
            />
            <input
              className="w-full rounded-xl border border-white/10 bg-app-input px-4 py-3 outline-none focus:border-app-primary"
              placeholder="Password"
              type="password"
            />
            <button className="w-full rounded-xl bg-app-primary py-3 font-bold cursor-pointer hover:bg-app-primary-hover">
              Create Account
            </button>
          </form>
          <div className="my-6 flex items-center gap-3 text-xs text-app-text-muted">
            <span className="h-px flex-1 bg-white/10"></span>OR
            <span className="h-px flex-1 bg-white/10"></span>
          </div>
          <button className="w-full rounded-xl border border-white/10 py-3 font-semibold">
            Continue with Google
          </button>
          <p className="mt-6 text-center text-sm text-app-text-muted">
            Already have an account?{" "}
            <Link className="font-bold text-app-primary" to="/login">
              Log in
            </Link>
          </p>
        </div>
      </main>
    </>
  );
}

export default Register;
