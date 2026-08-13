import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Download,
  Mail,
  Briefcase,
  GraduationCap,
  Award,
  Languages,
  Code2,
  FolderGit2,
  User,
  ExternalLink,
} from 'lucide-react';

/* ── Inline SVG icons for social platforms (not available in lucide-react) ── */
const GithubIcon = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

const LinkedinIcon = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
};

const skills = [
  'Python',
  'JavaScript',
  'TypeScript',
  'React',
  'Node.js',
  'Flask',
  'APIs REST',
  'Pytest',
  'TDD / SDD',
  'CI/CD (GitHub Actions)',
  'IA & Prompt Eng.',
  'Git / GitHub',
];

export default function CV() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="cv"
      ref={sectionRef}
      className="relative min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-dark-bg"
    >
      {/* ── Section title ── */}
      <motion.div
        className="text-center mb-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-text-primary">Currículo</h2>
        <div className="mt-3 mx-auto h-1 w-24 rounded-full bg-gradient-to-r from-accent to-accent-light" />
      </motion.div>

      {/* ── CV Card ── */}
      <motion.div
        className="max-w-4xl mx-auto bg-dark-card/60 backdrop-blur border border-dark-border rounded-2xl p-6 sm:p-8 md:flex gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        custom={1}
      >
        {/* ────── Left Column ────── */}
        <div className="md:w-3/5 space-y-8 text-left">
          {/* Resumo */}
          <motion.div variants={fadeUp} custom={2}>
            <SectionHeading icon={<User size={18} />} title="Resumo Profissional" />
            <p className="text-text-secondary text-sm leading-relaxed">
              Desenvolvedor Full Stack com foco em Python, JavaScript/TypeScript, React, Node.js, Flask e APIs REST. Desenvolvo aplicações web e integrações com IA, aplicando testes automatizados com Pytest, TDD, CI/CD e GitHub Actions para entregar soluções mais confiáveis.
            </p>
            <p className="text-text-secondary text-sm leading-relaxed mt-2">
              Possuo 10+ projetos práticos, incluindo o <strong>JobFit AI</strong> (SaaS de otimização de currículos e matching de vagas), suíte de testes de API de e-commerce e sistemas de CRM. Como fundador da <strong>AZ1 Agência Digital</strong>, desenvolvo soluções web e integrações sob medida.
            </p>
          </motion.div>

          {/* Experiência / Projetos Técnicos */}
          <motion.div variants={fadeUp} custom={3}>
            <SectionHeading icon={<Briefcase size={18} />} title="Projetos & Experiência" />
            <div className="space-y-6">
              {/* AZ1 Agência Digital */}
              <div className="border-l-2 border-accent/40 pl-4 ml-1">
                <h4 className="text-text-primary font-semibold text-sm">
                  Fundador & Desenvolvedor —{' '}
                  <span className="text-accent">AZ1 Agência Digital</span>
                </h4>
                <span className="text-xs text-text-secondary">Dez de 2025 — Atual</span>
                <ul className="mt-2 space-y-1.5 text-text-secondary text-xs sm:text-sm list-disc list-inside">
                  <li>
                    <strong className="text-text-primary">JobFit AI:</strong> desenvolvi SaaS de otimização de currículo e matching de vagas com IA.
                  </li>
                  <li>
                    <strong className="text-text-primary">QA E-commerce API:</strong> suíte com 15+ testes em Pytest (JWT, CRUD, schema validation) e CI/CD via GitHub Actions.
                  </li>
                  <li>
                    <strong className="text-text-primary">CRM Barbearia:</strong> sistema de agendamento e gestão de clientes em Python e Flask.
                  </li>
                  <li>
                    <strong className="text-text-primary">Landing Pages:</strong> entregas de alta conversão (Studio Go Interiores em HTML/CSS/JS e LP B2B em React).
                  </li>
                  <li>
                    <strong className="text-text-primary">Automação de Arquivos:</strong> organizador automático em Python (pathlib, shutil) com logs em CSV.
                  </li>
                </ul>
              </div>

              {/* Experiência Anterior */}
              <div className="border-l-2 border-accent/40 pl-4 ml-1">
                <h4 className="text-text-primary font-semibold text-sm">
                  Logística, Vendas e Atendimento ao Cliente
                </h4>
                <span className="text-xs text-text-secondary">2010 — 2021 (Unival, Axxio, Softex, Brancaleone)</span>
                <ul className="mt-2 space-y-1.5 text-text-secondary text-xs sm:text-sm list-disc list-inside">
                  <li>Gerenciamento de estoque em grande escala (~800 mil peças) com acuracidade de dados.</li>
                  <li>Cadastramento de 10 mil+ itens em CRM/e-commerce e atendimento a 500+ clientes.</li>
                  <li>Gestão comercial do contato ao fechamento, gerando R$ 80k+ em vendas em um quadrimestre.</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Formação */}
          <motion.div variants={fadeUp} custom={5}>
            <SectionHeading icon={<GraduationCap size={18} />} title="Formação Acadêmica" />
            <div className="border-l-2 border-accent/40 pl-4 ml-1">
              <h4 className="text-text-primary font-semibold text-sm">
                Análise e Desenvolvimento de Sistemas
              </h4>
              <p className="text-text-secondary text-sm">Faculdade Impacta Tecnologia</p>
              <span className="text-xs text-text-secondary">Fev. 2023 — Jun. 2026</span>
            </div>
          </motion.div>
        </div>

        {/* ────── Right Column ────── */}
        <div className="md:w-2/5 mt-8 md:mt-0 space-y-8 text-left">
          {/* Competências */}
          <motion.div variants={fadeUp} custom={3}>
            <SectionHeading icon={<Code2 size={18} />} title="Competências" />
            <div className="flex flex-wrap gap-2">
              {skills.map((s) => (
                <span
                  key={s}
                  className="text-xs px-3 py-1 rounded-full bg-accent/10 text-accent border border-accent/20"
                >
                  {s}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Certificações */}
          <motion.div variants={fadeUp} custom={4}>
            <SectionHeading icon={<Award size={18} />} title="Certificações (DIO)" />
            <ul className="space-y-1.5 text-xs sm:text-sm text-text-secondary list-disc list-inside">
              <li>Fundamentos de Banco de Dados e SQL</li>
              <li>Tratamento de Exceções e Depuração em Python</li>
              <li>Trabalhando com Arquivos e Dados Externos em Python</li>
              <li>Programação Orientada a Objetos com Python</li>
              <li>Copiloto Microsoft para Consultas SQL</li>
            </ul>
          </motion.div>

          {/* Idiomas */}
          <motion.div variants={fadeUp} custom={5}>
            <SectionHeading icon={<Languages size={18} />} title="Idiomas" />
            <ul className="space-y-1 text-sm text-text-secondary">
              <li>
                Português —{' '}
                <span className="text-text-primary font-medium">Nativo</span>
              </li>
              <li>
                Inglês —{' '}
                <span className="text-text-primary font-medium">Intermediário</span>
              </li>
            </ul>
          </motion.div>

          {/* Contato */}
          <motion.div variants={fadeUp} custom={6}>
            <SectionHeading icon={<Mail size={18} />} title="Contato" />
            <ul className="space-y-3 text-sm">
              <ContactRow
                icon={<Mail size={14} />}
                href="mailto:gto12233@gmail.com"
                label="gto12233@gmail.com"
              />
              <ContactRow
                icon={<GithubIcon size={14} />}
                href="https://github.com/gusjmo"
                label="github.com/gusjmo"
                external
              />
              <ContactRow
                icon={<LinkedinIcon size={14} />}
                href="https://www.linkedin.com/in/gusjmo/"
                label="linkedin.com/in/gusjmo"
                external
              />
            </ul>
          </motion.div>
        </div>
      </motion.div>

      {/* ── Floating download button ── */}
      <AnimatePresence>
        {visible && (
          <motion.a
            href="/GujmoCV.pdf"
            download
            className="fixed bottom-8 right-8 z-50 group flex items-center gap-2 bg-accent text-white rounded-full p-4 shadow-lg shadow-accent/25 hover:scale-110 transition-transform"
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.6 }}
            title="Baixar PDF do CV"
          >
            <Download size={20} />
            <span className="max-w-0 overflow-hidden group-hover:max-w-[8rem] transition-all duration-300 text-sm font-semibold whitespace-nowrap">
              Baixar CV PDF
            </span>
          </motion.a>
        )}
      </AnimatePresence>
    </section>
  );
}

/* ── Helper components ── */

function SectionHeading({ icon, title }) {
  return (
    <div className="flex items-center gap-2 mb-3">
      <span className="text-accent">{icon}</span>
      <h3 className="text-text-primary font-semibold text-base">{title}</h3>
    </div>
  );
}

function ContactRow({ icon, href, label, external }) {
  return (
    <li>
      <a
        href={href}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        className="flex items-center gap-2 text-text-secondary hover:text-accent transition-colors"
      >
        <span className="text-accent/80">{icon}</span>
        {label}
      </a>
    </li>
  );
}
