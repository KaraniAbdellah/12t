import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import first_part from "../assets/12t.png";
import second_part from "../assets/12.png";
interface NavItem {
  label: string;
  href: string;
  isRouterLink?: boolean;
}

const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/", isRouterLink: true },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Pricing", href: "/#pricing" },
  { label: "Blogs", href: "/blogs", isRouterLink: true },
  { label: "About Me", href: "/aboutMe", isRouterLink: true },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isCurrentActive = (item: NavItem) => {
    if (item.isRouterLink) {
      return location.pathname === item.href;
    }
    return location.pathname + location.hash === item.href;
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="sticky top-0 inset-x-0 z-50 p-2 sm:px-6 bg-gradient-to-b from-white/90 via-blue-50/30 to-transparent"
    >
      <motion.div
        animate={{
          maxWidth: isScrolled ? "1080px" : "1280px",
          backgroundColor: isScrolled
            ? "rgba(255, 255, 255, 0.92)"
            : "rgba(255, 255, 255, 0.7)",
          boxShadow: isScrolled
            ? "0 20px 25px -5px rgba(0, 0, 0, 0.08), 0 8px 10px -6px rgba(0, 0, 0, 0.04)"
            : "0 0px 0px 0px rgba(0,0,0,0)",
          borderRadius: isScrolled ? "9999px" : "1.25rem",
          paddingLeft: "1.25rem",
          paddingRight: "1.25rem",
          paddingTop: isScrolled ? "0.65rem" : "0.9rem",
          paddingBottom: isScrolled ? "0.65rem" : "0.9rem",
          borderWidth: isScrolled ? "1px" : "0px",
        }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="flex items-center justify-between mx-auto backdrop-blur-xl border-slate-200/80 transition-colors"
      >
        {/* Brand Logo */}
        <Link to="/" className="flex items-center group flex-shrink-0">
          <img src={second_part} alt="12T" className="h-12 w-12" />
          <img src={first_part} alt="12T" className="h-12 w-12" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 bg-slate-100/80 backdrop-blur-md px-2.5 py-1 rounded-full border border-slate-200/60 shadow-xs">
          {NAV_ITEMS.map((item) => {
            const active = isCurrentActive(item);
            const className = `flex items-center px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${
              active
                ? "bg-white text-blue-600 shadow-xs border border-slate-200/60"
                : "text-slate-600 hover:text-slate-950 hover:bg-slate-200/50"
            }`;

            return item.isRouterLink ? (
              <Link key={item.label} to={item.href} className={className}>
                {item.label}
              </Link>
            ) : (
              <a key={item.label} href={item.href} className={className}>
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* CTA & Mobile Menu Button */}
        <div className="flex items-center gap-2.5 flex-shrink-0">
          <motion.a
            href="/#contact-us"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="hidden sm:inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold px-5 py-2.5 rounded-full transition-colors shadow-xs"
          >
            Contact Us
          </motion.a>

          <button
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
            className="md:hidden p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 transition-colors"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </motion.div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, marginTop: 0 }}
            animate={{ opacity: 1, marginTop: 8 }}
            exit={{ opacity: 0, marginTop: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden"
          >
            <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-xl border border-slate-200/80 p-4 flex flex-col gap-3">
              <div className="flex flex-col gap-1">
                {NAV_ITEMS.map((item) => {
                  const active = isCurrentActive(item);
                  const className = `px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                    active
                      ? "bg-blue-50 text-blue-600"
                      : "text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                  }`;

                  return item.isRouterLink ? (
                    <Link
                      key={item.label}
                      to={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={className}
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={className}
                    >
                      {item.label}
                    </a>
                  );
                })}
              </div>

              <div className="h-[1px] bg-slate-100 my-0.5" />

              <a
                href="/#contact-us"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold py-3 rounded-xl shadow-xs transition-colors"
              >
                Get 12 Testers
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
