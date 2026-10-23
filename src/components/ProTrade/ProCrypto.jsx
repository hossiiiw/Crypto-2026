function ProCrypto({ info, handler }) {
  return (
    <div className="flex items-center gap-2 my-4">
      <button
        onClick={() => handler("BTC")}
        className={
          info?.symbol === "BTCUSDT"
            ? "rounded-xl border border-app-text/10 px-6 py-3 font-bold bg-app-border"
            : "rounded-xl border border-app-text/10 bg-app-surface px-6 py-3 font-bold hover:bg-app-border"
        }
      >
        BTC
      </button>
      <button
        onClick={() => handler("ETH")}
        className={
          info?.symbol === "ETHUSDT"
            ? "rounded-xl border border-app-text/10 px-6 py-3 font-bold bg-app-border"
            : "rounded-xl border border-app-text/10 bg-app-surface px-6 py-3 font-bold hover:bg-app-border"
        }
      >
        ETH
      </button>
      <button
        onClick={() => handler("TRX")}
        className={
          info?.symbol === "TRXUSDT"
            ? "rounded-xl border border-app-text/10 px-6 py-3 font-bold bg-app-border"
            : "rounded-xl border border-app-text/10 bg-app-surface px-6 py-3 font-bold hover:bg-app-border"
        }
      >
        TRX
      </button>
      <button
        onClick={() => handler("DOGE")}
        className={
          info?.symbol === "DOGEUSDT"
            ? "rounded-xl border border-app-text/10 px-6 py-3 font-bold bg-app-border"
            : "rounded-xl border border-app-text/10 bg-app-surface px-6 py-3 font-bold hover:bg-app-border"
        }
      >
        DOGE
      </button>
      <button
        onClick={() => handler("CAKE")}
        className={
          info?.symbol === "CAKEUSDT"
            ? "rounded-xl border border-app-text/10 px-6 py-3 font-bold bg-app-border"
            : "rounded-xl border border-app-text/10 bg-app-surface px-6 py-3 font-bold hover:bg-app-border"
        }
      >
        CAKE
      </button>
    </div>
  );
}

export default ProCrypto;
