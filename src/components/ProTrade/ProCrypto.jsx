function ProCrypto({ info, handler }) {
  const coins = ["BTC", "ETH", "TRX", "DOGE", "CAKE"];

  return (
    <div className="my-4 flex flex-wrap items-center gap-2">
      {coins.map((coin) => {
        const isActive = info?.symbol === `${coin}USDT`;

        return (
          <button
            key={coin}
            type="button"
            onClick={() => handler(coin)}
            className={`rounded-xl border border-app-text/10 px-4 py-2.5 text-sm font-bold transition-colors sm:px-6 sm:py-3 sm:text-base ${
              isActive ? "bg-app-border" : "bg-app-surface hover:bg-app-border"
            }`}
          >
            {coin}
          </button>
        );
      })}
    </div>
  );
}

export default ProCrypto;
