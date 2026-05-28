import { motion } from 'framer-motion';
import { ArrowDown, Download, MessageCircle } from 'lucide-react';
import { useTypewriter } from '../hooks/useTypewriter';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] },
});

const orbs = [
  {
    className:
      'w-72 h-72 bg-gradient-to-br from-[#6366f1]/30 to-[#8b5cf6]/10 top-[10%] left-[15%] animate-float',
    style: { animationDelay: '0s' },
  },
  {
    className:
      'w-96 h-96 bg-gradient-to-br from-[#8b5cf6]/20 to-[#6366f1]/5 top-[50%] right-[10%] animate-float',
    style: { animationDelay: '2s' },
  },
  {
    className:
      'w-64 h-64 bg-gradient-to-br from-[#a78bfa]/20 to-[#6366f1]/10 bottom-[15%] left-[40%] animate-float',
    style: { animationDelay: '4s' },
  },
  {
    className:
      'w-52 h-52 bg-gradient-to-br from-[#6366f1]/15 to-[#c084fc]/10 top-[25%] right-[35%] animate-float',
    style: { animationDelay: '6s' },
  },
];

export default function Hero() {
  const { text } = useTypewriter([
    'Desenvolvedor de Software',
    'Engenheiro de Software Jr',
    'Criador da Az1 Agência Digital',
  ]);

  const scrollTo = (selector) => {
    const el = document.querySelector(selector);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Floating gradient orbs */}
      {orbs.map((orb, i) => (
        <div
          key={i}
          className={`absolute rounded-full blur-3xl pointer-events-none ${orb.className}`}
          style={orb.style}
        />
      ))}

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-4xl">
        {/* Profile avatar */}
        <motion.div
          {...fadeUp(0)}
          className="mb-8 rounded-full p-[3px] bg-gradient-to-br from-[#6366f1] to-[#8b5cf6]"
        >
          <div className="w-32 h-32 rounded-full bg-[#0a0a0f] flex items-center justify-center">
            <span className="text-3xl font-bold bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] bg-clip-text text-transparent select-none">
              GO
            </span>
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1
          {...fadeUp(0.15)}
          className="text-5xl md:text-7xl font-bold leading-tight"
        >
          <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
            Gustavo Oliveira
          </span>
        </motion.h1>

        {/* Typewriter */}
        <motion.p
          {...fadeUp(0.3)}
          className="mt-4 text-xl md:text-2xl text-gray-400 h-8"
        >
          {text}
          <span className="typewriter-cursor ml-0.5 text-[#6366f1]">|</span>
        </motion.p>

        {/* Tech stack */}
        <motion.p
          {...fadeUp(0.45)}
          className="mt-6 text-sm md:text-base text-gray-500 tracking-[0.25em] uppercase"
        >
          Python · React · APIs REST · Testes QA
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          {...fadeUp(0.6)}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          {/* Primary */}
          <button
            onClick={() => scrollTo('#projetos')}
            className="inline-flex items-center gap-2 rounded-lg bg-[#6366f1] px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#8b5cf6] hover:shadow-[0_0_28px_rgba(99,102,241,0.5)] active:scale-95"
          >
            <ArrowDown size={18} />
            Ver Projetos
          </button>

          {/* Outline — CV */}
          <a
            href="/cv-gustavo.pdf"
            download
            className="inline-flex items-center gap-2 rounded-lg border border-[#6366f1] px-6 py-3 text-sm font-semibold text-[#6366f1] transition-all duration-300 hover:bg-[#6366f1]/10 hover:shadow-[0_0_20px_rgba(99,102,241,0.25)] active:scale-95"
          >
            <Download size={18} />
            Baixar CV
          </a>

          {/* Outline — Contact */}
          <button
            onClick={() => scrollTo('#contato')}
            className="inline-flex items-center gap-2 rounded-lg border border-gray-600 px-6 py-3 text-sm font-semibold text-gray-300 transition-all duration-300 hover:border-[#6366f1] hover:text-[#6366f1] hover:bg-[#6366f1]/5 active:scale-95"
          >
            <MessageCircle size={18} />
            Falar Comigo
          </button>
        </motion.div>
      </div>
    </section>
  );
}
