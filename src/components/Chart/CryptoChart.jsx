import { useEffect, useRef, useState } from "react";
import { createChart, CandlestickSeries } from "lightweight-charts";

const API_URL = "https://data-api.binance.vision/api/v3/klines";
const WS_URL = "wss://data-stream.binance.vision/ws";

export default function CryptoChart({ symbol = "BTCUSDT", interval = "1m" }) {
  const containerRef = useRef(null);
  const [status, setStatus] = useState("در حال اتصال...");

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let chart;
    let socket;
    let resizeObserver;
    let cancelled = false;

    async function init() {
      chart = createChart(container, {
        width: container.clientWidth,
        height: container.clientHeight,

        layout: {
          background: { color: "#111827" },
          textColor: "#D1D5DB",
        },

        grid: {
          vertLines: { color: "#1F2937" },
          horzLines: { color: "#1F2937" },
        },

        rightPriceScale: {
          borderColor: "#374151",
        },

        timeScale: {
          borderColor: "#374151",
          timeVisible: true,
          secondsVisible: false,
        },

        autoSize: false,
      });

      const candleSeries = chart.addSeries(CandlestickSeries, {
        upColor: "#22C55E",
        downColor: "#EF4444",
        borderUpColor: "#22C55E",
        borderDownColor: "#EF4444",
        wickUpColor: "#22C55E",
        wickDownColor: "#EF4444",
      });

      resizeObserver = new ResizeObserver(([entry]) => {
        if (!entry || !chart) return;

        chart.applyOptions({
          width: Math.floor(entry.contentRect.width),
          height: Math.floor(entry.contentRect.height),
        });
      });

      resizeObserver.observe(container);

      try {
        const response = await fetch(
          `${API_URL}?symbol=${symbol}&interval=${interval}&limit=1000`,
        );

        if (!response.ok) {
          throw new Error("دریافت کندل‌ها ناموفق بود");
        }

        const rows = await response.json();

        if (cancelled) return;

        const candles = rows.map((row) => ({
          time: row[0] / 1000,
          open: Number(row[1]),
          high: Number(row[2]),
          low: Number(row[3]),
          close: Number(row[4]),
        }));

        candleSeries.setData(candles);
        chart.timeScale().fitContent();

        socket = new WebSocket(
          `${WS_URL}/${symbol.toLowerCase()}@kline_${interval}`,
        );

        socket.onopen = () => {
          if (!cancelled) setStatus("متصل");
        };

        socket.onmessage = (event) => {
          const message = JSON.parse(event.data);
          const k = message.k;

          candleSeries.update({
            time: k.t / 1000,
            open: Number(k.o),
            high: Number(k.h),
            low: Number(k.l),
            close: Number(k.c),
          });
        };

        socket.onerror = () => {
          if (!cancelled) setStatus("خطای اتصال");
        };

        socket.onclose = () => {
          if (!cancelled) setStatus("اتصال قطع شد");
        };
      } catch (error) {
        if (!cancelled) {
          console.error(error);
          setStatus("خطا در دریافت اطلاعات");
        }
      }
    }

    init();

    return () => {
      cancelled = true;

  resizeObserver?.disconnect();

  if (socket) {
    socket.onopen = null;
    socket.onmessage = null;
    socket.onerror = null;
    socket.onclose = null;

    if (
      socket.readyState === WebSocket.OPEN ||
      socket.readyState === WebSocket.CONNECTING
    ) {
      socket.close();
    }
  }

  chart?.remove();
    };
  }, [symbol, interval]);

  return (
    <div className="flex h-full min-h-0 w-full min-w-0 flex-col overflow-hidden rounded-xl border border-gray-800 bg-gray-900">
      <div className="flex shrink-0 items-center gap-3 border-b border-gray-800 px-4 py-3">
        <span className="font-semibold text-white">{symbol}</span>

        <span className="text-sm text-gray-400">{interval}</span>

        <span
          className={`ml-auto text-xs ${
            status === "متصل" ? "text-green-400" : "text-gray-400"
          }`}
        >
          {status}
        </span>
      </div>

      <div ref={containerRef} className="min-h-0 min-w-0 flex-1" />
    </div>
  );
}
