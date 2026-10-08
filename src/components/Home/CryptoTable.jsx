import React from "react";

function CryptoTable() {
  return (
    <>
      <div class="rounded-3xl border border-white/10 bg-app-surface p-5 shadow-2xl shadow-app-primary/10">
        <div class="flex justify-between">
          <div>
            <p class="text-sm text-muted">BTC / USDT</p>
            <p class="mt-1 text-3xl font-black">$67,842.21</p>
          </div>
          <span class="h-fit rounded-lg bg-app-success/10 px-2 py-1 text-sm text-app-success">
            +4.82%
          </span>
        </div>
        <div class="mt-8 flex h-64 items-end gap-2"></div>
        <div class="mt-5 grid grid-cols-3 gap-3 text-center text-xs text-app-text-muted">
          <span>
            24H High
            <br />
            <b class="text-text">$69,420</b>
          </span>
          <span>
            24H Low
            <br />
            <b class="text-text">$64,102</b>
          </span>
          <span>
            Volume
            <br />
            <b class="text-text">$2.8B</b>
          </span>
        </div>
      </div>
    </>
  );
}

export default CryptoTable;
