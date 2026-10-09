function Support() {
  return (
    <>
      <main className="mx-auto text-app-text max-w-6xl px-4 py-12">
        <div className="text-center">
          <p className="font-bold text-app-primary">SUPPORT</p>
          <h1 className="mt-2 text-4xl font-black">How can we help?</h1>
          <div className="mx-auto mt-6 max-w-2xl">
            <input
              className="w-full rounded-2xl border border-app-text/10 bg-app-surface px-5 py-4 outline-none focus:border-app-primary"
              placeholder="Search help articles..."
            />
          </div>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          <div className="rounded-2xl border border-app-text/10 bg-app-surface p-6">
            <span className="text-3xl">🔐</span>
            <h3 className="mt-4 font-bold">Account & Security</h3>
            <p className="mt-2 text-sm text-muted">
              Login, verification and account protection.
            </p>
          </div>
          <div className="rounded-2xl border border-app-text/10 bg-app-surface p-6">
            <span className="text-3xl">💳</span>
            <h3 className="mt-4 font-bold">Payments</h3>
            <p className="mt-2 text-sm text-muted">
              Deposits, withdrawals and payment methods.
            </p>
          </div>
          <div className="rounded-2xl border border-app-text/10 bg-app-surface p-6">
            <span className="text-3xl">📈</span>
            <h3 className="mt-4 font-bold">Trading</h3>
            <p className="mt-2 text-sm text-muted">
              Orders, fees, markets and trading tools.
            </p>
          </div>
        </div>
        <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-app-text/10 bg-app-surface p-6">
          <h2 className="text-xl font-bold">Frequently asked questions</h2>
          <details className="rounded-xl mt-4 bg-app-input p-4">
            <summary className="cursor-pointer font-semibold">test</summary>
            <p className="mt-3 text-sm leading-6 text-muted">test</p>
          </details>
        </div>
      </main>
    </>
  );
}

export default Support;
