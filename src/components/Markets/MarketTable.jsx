import { useTranslation } from "react-i18next";
import { formatPrice } from "../../utils/FormatPrice";
import { Link } from "react-router-dom";

function MarketTable({ markets }) {
  const { t } = useTranslation();
  return (
    <>
      <table className="w-[95%] min-w-[760px] text-left text-sm">
        <thead className="border-b border-app-text/10 text-app-text-muted">
          <tr>
            <th className="p-5">{t("markets.asset")}</th>
            <th>{t("markets.price")}</th>
            <th>24h {t("markets.change")}</th>
            <th>24h {t("markets.high")}</th>
            <th>24h {t("markets.low")}</th>
            <th>{t("markets.volume")}</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {markets.map((coin) => {
            const change = Number(coin.priceChangePercent);
            const baseAsset = coin.symbol.replace("USDT", "");

            return (
              <tr
                key={coin.symbol}
                className="border-b border-app-text/5 hover:bg-app-text/5"
              >
                <td className="p-5">
                  <b>{baseAsset}</b>
                  <span className="ml-2 text-xs text-app-text-muted">
                    {coin.symbol.replace("USDT", "")}
                  </span>
                </td>
                <td>${formatPrice(coin.lastPrice)}</td>
                <td
                  className={`${change >= 0 ? "text-app-success" : "text-app-danger"}`}
                >
                  {change >= 0 ? "+" : ""}
                  {change}%
                </td>
                <td>${formatPrice(coin.highPrice)}</td>
                <td>${formatPrice(coin.lowPrice)}</td>
                <td>${formatPrice(coin.volume)}</td>
                <td>
                  <Link
                    to={`/market/${coin.symbol}`}
                    className="rounded-lg bg-app-primary/15 px-3 py-2 text-app-primary"
                  >
                    {t("markets.trade")}
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default MarketTable;
