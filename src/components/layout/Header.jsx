import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <header className="sticky top-0 z-50 border-b border-white/10 bg-app-background backdrop-blur">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
          <Link
            to="/"
            className="flex items-center gap-2 text-xl font-black text-white"
          >
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-app-primary text-white">
              C
            </span>
            <span>Coinova</span>
          </Link>
          <nav className="hidden items-center gap-7 text-sm text-app-text-muted md:flex">
            <Link className="hover:text-white" to="/market">
              Markets
            </Link>
            <Link className="hover:text-white" to="/buy-crypto">
              Buy Crypto
            </Link>
            <Link className="hover:text-white" to="/">
              Trade
            </Link>
            <Link className="hover:text-white" to="/support">
              Support
            </Link>
          </nav>
          <div className="flex items-center gap-2">
            <Link
              to="/login"
              className="hidden rounded-xl px-4 py-2 text-sm text-app-text-muted hover:text-white sm:block"
            >
              Log in
            </Link>
            <Link
              to="/"
              className="rounded-xl bg-app-primary px-4 py-2 text-sm font-bold text-white hover:bg-app-primary-hover"
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
