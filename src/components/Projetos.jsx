import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectCard from './ProjectCard';
import projetos from '../data/projetos';

const categories = ['Todos', 'Jogos', 'Web', 'QA'];

export default function Projetos() {
  const [activeFilter, setActiveFilter] = useState('Todos');

  const filtered =
    activeFilter === 'Todos'
      ? projetos
      : projetos.filter((p) => p.categoria === activeFilter);

  return (
    <section id="projetos" className="py-20 px-6 max-w-6xl mx-auto">
      {/* Section Title */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
          Projetos
        </h2>
        <div className="mx-auto w-24 h-1 rounded-full bg-gradient-to-r from-accent via-purple-500 to-pink-500" />
      </motion.div>

      {/* Category Filter */}
      <motion.div
        className="flex flex-wrap justify-center gap-3 mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveFilter(cat)}
            className={`px-5 py-2 rounded-lg text-sm font-medium transition-all duration-300 cursor-pointer
              ${
                activeFilter === cat
                  ? 'bg-accent text-white shadow-lg shadow-accent/25'
                  : 'bg-dark-card border border-dark-border text-gray-400 hover:border-accent hover:text-gray-200'
              }`}
          >
            {cat}
          </button>
        ))}
      </motion.div>

      {/* Projects Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.35, delay: index * 0.07 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Empty State */}
      {filtered.length === 0 && (
        <motion.p
          className="text-center text-text-secondary mt-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          Nenhum projeto encontrado nesta categoria.
        </motion.p>
      )}
    </section>
  );
}
