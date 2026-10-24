import { useTranslation } from "react-i18next";

function OrderBook({ data }) {
  const { t } = useTranslation();
  return (
    <div className="w-[50%] h-[57.2vh] rounded-2xl border border-app-text/10 bg-app-surface p-4 sm:p-5">
      <div className="mb-5 flex items-center justify-between">
        <h2 className="font-bold"> {t("order-book.title")}</h2>
        <span className="rounded-lg bg-app-background px-3 py-2 text-xs text-app-text-muted">
          {data?.symbol.replace("USDT", "")} / USDT
        </span>
      </div>

      <div className="grid grid-cols-3 pb-3 text-xs text-app-text-muted">
        <span>{t("order-book.price")} (USDT)</span>
        <span className="text-center">
          {t("order-book.amount")} ({data?.symbol.replace("USDT", "")})
        </span>
        <span className="text-left">{t("order-book.total")}</span>
      </div>

      <div className="space-y-1">
        <div className="relative grid grid-cols-3 items-center py-2 text-xs sm:text-sm">
          <div className="absolute inset-y-0 right-0 w-[40%] bg-red-500/5" />
          <span className="relative text-red-500">67,438.21</span>
          <span className="relative text-center">0.4212</span>
          <span className="relative text-left">28,391</span>
        </div>
        <div className="relative grid grid-cols-3 items-center py-2 text-xs sm:text-sm">
          <div className="absolute inset-y-0 right-0 w-[60%] bg-red-500/5" />
          <span className="relative text-red-500">67,436.78</span>
          <span className="relative text-center">0.5321</span>
          <span className="relative text-left">35,881</span>
        </div>
        <div className="relative grid grid-cols-3 items-center py-2 text-xs sm:text-sm">
          <div className="absolute inset-y-0 right-0 w-[30%] bg-red-500/5" />
          <span className="relative text-red-500">67,435.12</span>
          <span className="relative text-center">0.3125</span>
          <span className="relative text-left">21,073</span>
        </div>
        <div className="my-3 flex items-center justify-between rounded-xl bg-app-background p-3">
          <span className="text-lg font-black text-emerald-500">
            {data?.price.toLocaleString()}
          </span>
          <span className="text-xs text-app-text-muted">
            {" "}
            {t("order-book.current-price")}
          </span>
        </div>
        <div className="relative grid grid-cols-3 items-center py-2 text-xs sm:text-sm">
          <div className="absolute inset-y-0 right-0 w-[45%] bg-emerald-500/5" />
          <span className="relative text-emerald-500">
            {data?.price.toLocaleString()}
          </span>
          <span className="relative text-center">0.5213</span>
          <span className="relative text-left">35,155</span>
        </div>
        <div className="relative grid grid-cols-3 items-center py-2 text-xs sm:text-sm">
          <div className="absolute inset-y-0 right-0 w-[65%] bg-emerald-500/5" />
          <span className="relative text-emerald-500">67,430.78</span>
          <span className="relative text-center">0.8432</span>
          <span className="relative text-left">56,864</span>
        </div>
        <div className="relative grid grid-cols-3 items-center py-2 text-xs sm:text-sm">
          <div className="absolute inset-y-0 right-0 w-[35%] bg-emerald-500/5" />
          <span className="relative text-emerald-500">67,429.12</span>
          <span className="relative text-center">0.7321</span>
          <span className="relative text-left">49,392</span>
        </div>
      </div>
    </div>
  );
}

export default OrderBook;
