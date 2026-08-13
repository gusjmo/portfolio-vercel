import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const skills = [
  { name: 'Python', level: 90 },
  { name: 'JavaScript / TypeScript', level: 85 },
  { name: 'React & Node.js', level: 80 },
  { name: 'APIs REST & Flask', level: 85 },
  { name: 'Pytest & QA Automatizado', level: 85 },
  { name: 'IA, LLMs & Prompt Eng.', level: 80 },
  { name: 'Git, CI/CD & GitHub Actions', level: 80 },
];

const techChips = [
  'Python',
  'JavaScript',
  'TypeScript',
  'React',
  'Node.js',
  'Flask',
  'Pytest',
  'TDD / SDD',
  'JWT',
  'CI/CD',
  'GitHub Actions',
  'GenAI / LLM',
  'Git',
  'HTML5',
  'CSS3',
  'SEO',
];

function getBarColor(level) {
  if (level >= 85) return '#10b981';
  if (level >= 80) return '#6366f1';
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
    'Desenvolvedor Full Stack',
    'Python',
    'JavaScript/TypeScript',
    'React',
    'Node.js',
    'Flask',
    'APIs REST',
    'Pytest',
    'CI/CD',
    'AZ1 Agência Digital',
    'JobFit AI',
    'Faculdade Impacta',
  ];

  const text =
    'Desenvolvedor Full Stack com foco em Python, JavaScript/TypeScript, React, Node.js, Flask e APIs REST. Desenvolvo aplicações web e integrações com IA, aplicando testes automatizados com Pytest, TDD, CI/CD e GitHub Actions para entregar soluções mais confiáveis. Fundador da AZ1 Agência Digital, criei o JobFit AI (SaaS com IA) e entreguei soluções sob medida para clientes. Formado em Análise e Desenvolvimento de Sistemas pela Faculdade Impacta.';

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
