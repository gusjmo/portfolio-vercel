import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const skills = [
  { name: 'HTML/CSS', level: 85 },
  { name: 'Python', level: 80 },
  { name: 'JavaScript', level: 75 },
  { name: 'APIs REST', level: 75 },
  { name: 'Git/GitHub', level: 75 },
  { name: 'React', level: 70 },
  { name: 'Pytest/QA', level: 65 },
];

const techChips = ['Vercel', 'Google Cloud', 'Figma', 'Flask', 'Django'];

function getBarColor(level) {
  if (level >= 80) return '#10b981';
  if (level >= 70) return '#6366f1';
  return '#8b5cf6';
}

function SkillBar({ name, level }) {
  const barRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (barRef.current) observer.observe(barRef.current);
    return () => observer.disconnect();
  }, []);

  const color = getBarColor(level);

  return (
    <div ref={barRef} className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-gray-300">{name}</span>
        <span className="text-sm font-medium text-gray-400">{level}%</span>
      </div>
      <div className="w-full h-2.5 rounded-full bg-dark-bg/60 overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{ backgroundColor: color }}
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        />
      </div>
    </div>
  );
}

function HighlightedBio() {
  const highlights = [
    'Python',
    'APIs REST',
    'Az1 Agência Digital',
    'Análise e Desenvolvimento de Sistemas',
    'Faculdade Impacta Tecnologia',
  ];

  const text =
    'Desenvolvedor com experiência prática em Python, APIs REST e desenvolvimento web. Criador da Az1 Agência Digital. Cursando Análise e Desenvolvimento de Sistemas na Faculdade Impacta Tecnologia. Apaixonado por tecnologia, automação e soluções que resolvem problemas reais.';

  // Build regex from highlights (escape special chars)
  const escaped = highlights.map((h) =>
    h.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  );
  const regex = new RegExp(`(${escaped.join('|')})`, 'g');
  const parts = text.split(regex);

  return (
    <p className="text-text-secondary leading-relaxed text-lg">
      {parts.map((part, i) =>
        highlights.includes(part) ? (
          <span key={i} className="text-accent font-semibold">
            {part}
          </span>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </p>
  );
}

export default function Sobre() {
  return (
    <section id="sobre" className="py-20 px-6 max-w-6xl mx-auto">
      {/* Section Title */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
          Sobre Mim
        </h2>
        <div className="mx-auto w-24 h-1 rounded-full bg-gradient-to-r from-accent via-purple-500 to-pink-500" />
      </motion.div>

      {/* Content Columns */}
      <div className="flex flex-col md:flex-row gap-12">
        {/* Left Column — Bio */}
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <HighlightedBio />
        </motion.div>

        {/* Right Column — Skills */}
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {skills.map((skill) => (
            <SkillBar key={skill.name} name={skill.name} level={skill.level} />
          ))}
        </motion.div>
      </div>

      {/* Tech Chips */}
      <motion.div
        className="mt-14 flex flex-wrap justify-center gap-3"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        {techChips.map((chip) => (
          <span
            key={chip}
            className="text-sm px-4 py-1.5 rounded-full border border-dark-border text-gray-300 
                       hover:border-accent hover:text-accent hover:shadow-[0_0_12px_rgba(99,102,241,0.25)] 
                       transition-all duration-300 cursor-default"
          >
            {chip}
          </span>
        ))}
      </motion.div>
    </section>
  );
}
