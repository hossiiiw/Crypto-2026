import React from "react";

function MobileNav() {
  return (
    <>
      <nav className="fixed bottom-0 left-0 right-0 z-[60] border-t border-white/10 bg-[#221B4D]/95 px-2 pb-[env(safe-area-inset-bottom)] pt-2 backdrop-blur-xl lg:hidden">
        <div className="mx-auto grid max-w-lg grid-cols-5 gap-1">
          <a
            href="index.html"
            className="flex flex-col items-center gap-1 rounded-xl py-2 text-[10px] text-app-text-muted"
          >
            <span className="text-lg">⌂</span>Home
          </a>
          <a
            href="markets.html"
            className="flex flex-col items-center gap-1 rounded-xl py-2 text-[10px] text-app-text-muted"
          >
            <span className="text-lg">◈</span>Markets
          </a>
          <a
            href="buy.html"
            className="flex flex-col items-center gap-1 rounded-xl bg-app-primary/20 py-2 text-[10px] font-bold text-app-primary"
          >
            <span className="text-lg">＋</span>Buy
          </a>
          <a
            href="login.html"
            className="flex flex-col items-center gap-1 rounded-xl py-2 text-[10px] text-app-text-muted"
          >
            <span className="text-lg">⇥</span>Login
          </a>
          <a
            href="support.html"
            className="flex flex-col items-center gap-1 rounded-xl py-2 text-[10px] text-app-text-muted"
          >
            <span className="text-lg">?</span>Support
          </a>
        </div>
      </nav>
    </>
  );
}

export default MobileNav;
