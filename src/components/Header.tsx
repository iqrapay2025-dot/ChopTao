import { useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/menu", label: "Menu" },
  { to: "/about", label: "About" },
  { to: "/order", label: "Order" },
  { to: "/contact", label: "Contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const transparent = false;

  return (
    <header
      className={`relative z-50 transition-all duration-300 ${
        transparent
          ? "bg-transparent"
          : "bg-offwhite/96 backdrop-blur-md shadow-sm border-b border-blush/30"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-18 flex items-center justify-between" style={{ height: "4.5rem" }}>
        {/* Logo */}
        <Link to="/" className="flex items-center group">
          <span
            className={`text-2xl font-black tracking-tight transition-colors ${transparent ? "text-white" : "text-charcoal"}`}
            style={{ fontFamily: '"Nunito", sans-serif' }}
          >
            ChopTao
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) =>
                `nav-link relative text-sm font-semibold transition-colors pb-0.5 ${
                  isActive
                    ? `text-maroon nav-active`
                    : transparent
                    ? "text-white/85 hover:text-white"
                    : "text-charcoal/75 hover:text-charcoal"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <Link
            to="/order"
            className="btn btn-charcoal text-xs px-5 py-2.5 ml-2"
            style={{ padding: "0.55rem 1.3rem" }}
          >
            Order Now
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 flex flex-col gap-1.5"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className={`block w-5 h-0.5 rounded transition-all ${transparent ? "bg-white" : "bg-charcoal"} ${
                menuOpen && i === 0 ? "translate-y-2 rotate-45" : menuOpen && i === 1 ? "opacity-0" : menuOpen && i === 2 ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          ))}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="mobile-menu md:hidden bg-offwhite/98 backdrop-blur-lg border-t border-blush/30 px-6 pt-3 pb-5 flex flex-col gap-1">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) =>
                `py-2.5 px-3 rounded-xl text-sm font-semibold transition-colors ${
                  isActive ? "bg-blush text-maroon" : "text-charcoal hover:bg-cream"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <Link
            to="/order"
            className="btn btn-charcoal mt-2 text-center text-sm"
            style={{ padding: "0.65rem 1.5rem" }}
          >
            Order Now
          </Link>
        </div>
      )}
    </header>
  );
}
