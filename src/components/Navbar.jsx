import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Download } from 'lucide-react';
import { useScrollSpy } from '../hooks/useScrollSpy';

const navLinks = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'CV', href: '#cv' },
  { label: 'Contato', href: '#contato' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeId = useScrollSpy(navLinks.map((l) => l.href.slice(1)), 80);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const scrollTo = (href) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[rgba(10,10,15,0.9)] backdrop-blur-lg shadow-lg shadow-black/20'
            : 'bg-transparent'
        }`}
      >
        <div className="mx-auto max-w-7xl flex items-center justify-between px-6 py-4">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => { e.preventDefault(); scrollTo('#hero'); }}
            className="font-mono font-bold text-xl select-none"
          >
            <span className="bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] bg-clip-text text-transparent">
              {'<GO/>'}
            </span>
          </a>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map(({ label, href }) => {
              const isActive = activeId === href.slice(1);
              return (
                <li key={href}>
                  <a
                    href={href}
                    onClick={(e) => { e.preventDefault(); scrollTo(href); }}
                    className={`relative text-sm font-medium tracking-wide transition-colors duration-300 ${
                      isActive ? 'text-[#6366f1]' : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    {label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full bg-gradient-to-r from-[#6366f1] to-[#8b5cf6]"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Desktop CTA */}
          <a
            href="/cv-gustavo.pdf"
            download
            className="hidden md:inline-flex items-center gap-2 rounded-lg bg-[#6366f1] px-5 py-2 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#8b5cf6] hover:shadow-[0_0_24px_rgba(99,102,241,0.45)]"
          >
            <Download size={16} />
            Baixar CV
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="md:hidden text-gray-300 hover:text-white transition-colors"
            aria-label="Menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 bg-[rgba(5,5,10,0.97)] backdrop-blur-xl"
          >
            {navLinks.map(({ label, href }, i) => {
              const isActive = activeId === href.slice(1);
              return (
                <motion.a
                  key={href}
                  href={href}
                  onClick={(e) => { e.preventDefault(); scrollTo(href); }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: i * 0.07, duration: 0.3 }}
                  className={`text-2xl font-semibold tracking-wide transition-colors duration-300 ${
                    isActive ? 'text-[#6366f1]' : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {label}
                </motion.a>
              );
            })}

            <motion.a
              href="/cv-gustavo.pdf"
              download
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ delay: navLinks.length * 0.07, duration: 0.3 }}
              className="mt-4 inline-flex items-center gap-2 rounded-lg bg-[#6366f1] px-6 py-3 text-lg font-semibold text-white transition-all duration-300 hover:bg-[#8b5cf6] hover:shadow-[0_0_24px_rgba(99,102,241,0.45)]"
            >
              <Download size={20} />
              Baixar CV
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
