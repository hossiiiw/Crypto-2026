
function Header() {
  return (
    <>
      <header className="sticky top-0 z-50 border-b border-white/10 bg-app-background backdrop-blur">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
          <a
            href="index.html"
            className="flex items-center gap-2 text-xl font-black text-white"
          >
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-app-primary text-white">
              C
            </span>
            <span>Coinova</span>
          </a>
          <nav className="hidden items-center gap-7 text-sm text-app-text-muted md:flex">
            <a className="hover:text-white" href="markets.html">
              Markets
            </a>
            <a className="hover:text-white" href="buy.html">
              Buy Crypto
            </a>
            <a className="hover:text-white" href="trade.html">
              Trade
            </a>
            <a className="hover:text-white" href="support.html">
              Support
            </a>
          </nav>
          <div className="flex items-center gap-2">
            <a
              href="login.html"
              className="hidden rounded-xl px-4 py-2 text-sm text-app-text-muted hover:text-white sm:block"
            >
              Log in
            </a>
            <a
              href="register.html"
              className="rounded-xl bg-app-primary px-4 py-2 text-sm font-bold text-white hover:bg-purple-700"
            >
              Get Started
            </a>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
