import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <header className="sticky top-0 z-50 border-b border-app-text/10 bg-app-background backdrop-blur">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
          <Link
            to="/"
            className="flex items-center gap-2 text-xl font-black text-app-text"
          >
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-app-primary text-app-text">
              C
            </span>
            <span className="text-app-text">Coinova</span>
          </Link>
          <nav className="hidden items-center gap-7 text-sm text-app-text-muted md:flex">
            <Link className="hover:textapp-texte" to="/market">
              Markets
            </Link>
            <Link className="hover:text-app-text" to="/buy-crypto">
              Buy Crypto
            </Link>
            <Link className="hover:text-app-text" to="/easy-trade">
              Trade
            </Link>
            <Link className="hover:text-app-text" to="/support">
              Support
            </Link>
          </nav>
          <div className="flex items-center gap-2">
            <Link
              to="/login"
              className="hidden rounded-xl px-4 py-2 text-sm text-app-text-muted hover:text-app-text sm:block"
            >
              Log in
            </Link>
            <Link
              to="/"
              className="rounded-xl bg-app-primary px-4 py-2 text-sm font-bold text-app-text hover:bg-app-primary-hover"
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
