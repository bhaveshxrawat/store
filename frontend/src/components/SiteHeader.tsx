import { Link, useResolvedPath } from "react-router-dom";
import { ShoppingBag, ShoppingCart } from "lucide-react";
import ThemeSelector from "./ThemeSelector";

const SiteHeader = () => {
  const { pathname } = useResolvedPath(window.location.pathname);
  const isHomepage = pathname === "/";
  return (
    <header className="bg-base-100/80 backdrop-blur-lg border-b border-base-content/10 sticky top-0 z-50">
      <div className="max-w-7xl max-auto">
        <div className="navbar px-4 min-h justify-between">
          <Link to="/" className="flex items-center gap-1">
            <ShoppingBag />
            <span className="uppercase text-xl font-bold tracking-widest bg-gradient-to-r from-primary to-secondary font-mono text-transparent bg-clip-text">
              Dashboard
            </span>
          </Link>
          <div className="flex items-center gap-4">
            <ThemeSelector />
            {isHomepage && (
              <div className="indicator">
                <button
                  className="p-2 rounnded-full hover:bag-base-200 transition-colors"
                  aria-label="View cart"
                >
                  <ShoppingCart className="size-5" />
                  <span className="badge badge-sm badge-primary indicator-item">
                    8
                  </span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default SiteHeader;
