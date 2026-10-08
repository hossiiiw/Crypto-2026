import React from "react";

function CryptoPrice() {
  return (
    <>
      <section className="border-y border-white/10 bg-app-surface/40">
        <div className="text-app-text mx-auto grid max-w-7xl grid-cols-2 gap-4 px-4 py-8 md:grid-cols-4">
          <div>
            <p className="text-sm text-app-text-muted">Bitcoin</p>
            <b>$67,842</b>
            <span className="ml-2 text-app-success">+4.8%</span>
          </div>
          <div>
            <p className="text-sm text-app-text-muted">Ethereum</p>
            <b>$3,482</b>
            <span className="ml-2 text-app-danger">-1.2%</span>
          </div>
          <div>
            <p className="text-sm text-app-text-muted">Solana</p>
            <b>$184.22</b>
            <span className="ml-2 text-app-success">+7.1%</span>
          </div>
          <div>
            <p className="text-sm text-app-text-muted">BNB</p>
            <b>$612.40</b>
            <span className="ml-2 text-app-success">+2.4%</span>
          </div>
        </div>
      </section>
    </>
  );
}

export default CryptoPrice;
