import { useTranslation } from "react-i18next";

function BuyCrypto() {
  const { t } = useTranslation();
  return (
    <>
      <main className="mx-auto w-full max-w-6xl px-4 py-8 text-app-text sm:px-6 sm:py-10 lg:px-8 lg:py-12">
        {/* Header */}
        <div className="text-center">
          <p className="font-bold text-app-primary">
            {t("buy-crypto.title-1")}
          </p>

          <h1 className="mt-2 text-3xl font-black sm:text-4xl">
            {t("buy-crypto.title-2")}
          </h1>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-app-text-muted sm:text-base">
            {t("buy-crypto.title-3")}
          </p>
        </div>

        {/* Content */}
        <div className="mx-auto mt-8 grid w-full max-w-4xl grid-cols-1 gap-5 sm:mt-10 lg:grid-cols-2">
          {/* Buy Form */}
          <div className="min-w-0 rounded-3xl border border-app-text/10 bg-app-surface p-4 sm:p-6">
            {/* Buy / Sell */}
            <div className="flex gap-2">
              <button className="min-h-11 flex-1 rounded-xl bg-app-primary px-3 py-3 text-sm font-bold sm:text-base">
                {t("buy-crypto.buy")}
              </button>

              <button className="min-h-11 flex-1 rounded-xl bg-app-text/5 px-3 py-3 text-sm text-app-text-muted sm:text-base">
                {t("buy-crypto.sell")}
              </button>
            </div>

            {/* You Pay */}
            <label className="mt-6 block text-sm text-app-text-muted sm:mt-7">
              {t("buy-crypto.pay")}
            </label>

            <div className="mt-2 flex min-w-0 items-center rounded-xl border border-app-text/10 bg-app-input p-3 sm:p-4">
              <input
                type="number"
                inputMode="decimal"
                placeholder="0"
                className="min-w-0 flex-1 bg-transparent text-xl font-bold outline-none sm:text-2xl"
              />

              <span className="ml-3 shrink-0 text-sm font-bold sm:text-base">
                USD
              </span>
            </div>

            {/* You Receive */}
            <label className="mt-5 block text-sm text-app-text-muted">
              {t("buy-crypto.receive")}
            </label>

            <div className="mt-2 flex min-w-0 items-center rounded-xl border border-app-text/10 bg-app-input p-3 sm:p-4">
              <input
                type="number"
                inputMode="decimal"
                placeholder="0"
                className="min-w-0 flex-1 bg-transparent text-xl font-bold outline-none sm:text-2xl"
              />

              <span className="ml-3 shrink-0 text-sm font-bold sm:text-base">
                BTC
              </span>
            </div>

            {/* Continue */}
            <button className="mt-5 min-h-12 w-full cursor-pointer rounded-xl bg-app-primary px-4 py-3 font-bold transition hover:bg-app-primary-hover sm:mt-6">
              {t("buy-crypto.continue")}
            </button>
          </div>

          {/* Order Summary */}
          <div className="min-w-0 rounded-3xl border border-app-text/10 bg-app-surface p-4 sm:p-6">
            <h3 className="text-lg font-bold sm:text-xl">
              {t("buy-crypto.summary")}
            </h3>

            <div className="mt-6 space-y-4 text-sm sm:mt-7">
              <div className="flex items-center justify-between gap-4">
                <span className="text-app-text-muted">
                  BTC {t("buy-crypto.price")}
                </span>

                <b className="shrink-0">$67,842.21</b>
              </div>

              <div className="flex items-center justify-between gap-4">
                <span className="text-app-text-muted">
                  {t("buy-crypto.amount")}
                </span>

                <b className="shrink-0">$1,000.00</b>
              </div>

              <div className="flex items-center justify-between gap-4">
                <span className="text-app-text-muted">
                  {t("buy-crypto.fee")}
                </span>

                <b className="shrink-0">$2.50</b>
              </div>

              <div className="h-px bg-app-text/10" />

              <div className="flex items-center justify-between gap-4 text-lg">
                <span>{t("buy-crypto.total")}</span>

                <b className="shrink-0">$1,002.50</b>
              </div>
            </div>

            {/* Notice */}
            <div className="mt-6 rounded-xl bg-app-primary/10 p-3 text-xs leading-5 text-app-primary sm:mt-8 sm:p-4 sm:text-sm">
              {t("buy-crypto.time")}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default BuyCrypto;
