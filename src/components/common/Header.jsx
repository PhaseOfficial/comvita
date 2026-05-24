import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaFacebook, FaTiktok, FaWhatsapp } from "react-icons/fa";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  const socialLinks = [
    { name: "Facebook", href: "#", icon: <FaFacebook /> },
    { name: "TikTok", href: "#", icon: <FaTiktok /> },
    { name: "WhatsApp", href: "#", icon: <FaWhatsapp /> },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-xl border-b border-outline/10 h-20 flex justify-between items-center px-6 md:px-12 transition-all duration-500">
      
      {/* Logo + Mobile Menu Toggle */}
      <div className="flex items-center gap-6">
        <button
          onClick={toggleMenu}
          className="md:hidden text-primary flex items-center justify-center p-2 hover:bg-surface-container rounded-full transition-colors"
        >
          <span className="material-symbols-outlined text-2xl cursor-pointer">
            {isMenuOpen ? "close" : "menu"}
          </span>
        </button>

        <Link to="/" className="flex items-center">
          <span className="font-headline text-3xl font-bold tracking-tighter text-primary uppercase">
            Comvita
          </span>
        </Link>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex gap-10">
        {navLinks.map((link) => (
          <NavLink
            key={link.name}
            to={link.path}
            className={({ isActive }) =>
              `font-label text-label-md uppercase tracking-[0.15em] transition-all duration-500 relative py-2 group ${
                isActive
                  ? "text-primary font-bold"
                  : "text-on-surface-variant hover:text-primary"
              }`
            }
          >
            {link.name}
            <span className={`absolute bottom-0 left-0 w-full h-[1px] bg-secondary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
            <motion.span 
              layoutId="nav-underline"
              className={`absolute bottom-0 left-0 w-full h-[2px] bg-secondary ${link.path === window.location.pathname ? 'opacity-100' : 'opacity-0'}`}
            />
          </NavLink>
        ))}
      </nav>

      {/* Desktop CTA */}
      <Link
        to="/contact"
        className="hidden md:flex bg-primary text-on-primary font-label text-label-sm uppercase tracking-widest px-8 py-4 rounded-none hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/20"
      >
        GET A QUOTE
      </Link>

      {/* Mobile Sidebar Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleMenu}
              className="fixed inset-0 bg-primary/20 backdrop-blur-md z-[90] md:hidden"
            />

            {/* Sidebar */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 200 }}
              className="fixed top-0 left-0 h-screen w-[85%] max-w-sm bg-surface shadow-[20px_0_60px_rgba(0,0,0,0.1)] z-[100] md:hidden flex flex-col p-10"
            >
              
              {/* Sidebar Header */}
              <div className="flex justify-between items-center mb-16">
                <Link to="/" onClick={toggleMenu}>
                  <span className="font-headline text-3xl font-bold tracking-tighter text-primary uppercase">
                    Comvita
                  </span>
                </Link>

                <button
                  onClick={toggleMenu}
                  className="w-10 h-10 rounded-full flex items-center justify-center text-primary hover:bg-surface-container transition-all"
                >
                  <span className="material-symbols-outlined text-2xl">
                    close
                  </span>
                </button>
              </div>

              {/* Sidebar Navigation */}
              <nav className="flex flex-col flex-1 gap-4">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.name}
                    to={link.path}
                    onClick={toggleMenu}
                    className={({ isActive }) =>
                      `font-headline text-3xl py-4 border-b border-outline/10 w-full text-left flex justify-between items-center transition-all ${
                        isActive
                          ? "text-primary font-bold"
                          : "text-on-surface-variant hover:text-primary"
                      }`
                    }
                  >
                    {link.name}
                    <span className="material-symbols-outlined text-xl opacity-30">
                      arrow_outward
                    </span>
                  </NavLink>
                ))}
              </nav>

              {/* Sidebar Footer */}
              <div className="mt-auto pt-10 border-t border-outline/10 flex flex-col gap-8">
                <div className="flex gap-6">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-primary/60 hover:text-secondary transition-colors"
                    >
                      <span className="text-2xl">{social.icon}</span>
                    </a>
                  ))}
                </div>
                
                <Link
                  to="/contact"
                  onClick={toggleMenu}
                  className="bg-primary text-on-primary p-6 rounded-none text-label-sm font-bold uppercase tracking-widest text-center shadow-xl active:scale-[0.98] transition-transform"
                >
                  START YOUR QUOTE
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
