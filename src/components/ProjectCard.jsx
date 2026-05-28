import { motion } from 'framer-motion';
import { ExternalLink, Play, Star } from 'lucide-react';

export default function ProjectCard({ project }) {
  const { nome, descricao, stack, categoria, cor, github, demo, destaque } =
    project;

  return (
    <motion.div
      layout
      className="group relative bg-dark-card/80 backdrop-blur-sm border border-dark-border rounded-2xl 
                 overflow-hidden transition-all duration-300 
                 hover:scale-[1.02] hover:shadow-xl hover:shadow-accent/10 hover:border-accent/50"
    >
      {/* Gradient Top Bar */}
      <div
        className="h-[2px] w-full"
        style={{
          background: `linear-gradient(90deg, ${cor || '#6366f1'}, ${cor || '#6366f1'}88, transparent)`,
        }}
      />

      <div className="p-6">
        {/* Badges */}
        <div className="flex items-center gap-2 mb-3 flex-wrap">
          <span
            className="text-xs font-medium px-2.5 py-0.5 rounded-full"
            style={{
              backgroundColor: `${cor || '#6366f1'}20`,
              color: cor || '#6366f1',
              border: `1px solid ${cor || '#6366f1'}40`,
            }}
          >
            {categoria}
          </span>
          {destaque && (
            <span className="flex items-center gap-1 text-xs font-medium px-2.5 py-0.5 rounded-full bg-amber-500/15 text-amber-400 border border-amber-500/30">
              <Star size={12} className="fill-amber-400" />
              Destaque
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="text-xl font-semibold text-white mb-2">{nome}</h3>

        {/* Description */}
        <p className="text-text-secondary text-sm line-clamp-3 mb-4 leading-relaxed">
          {descricao}
        </p>

        {/* Stack Chips */}
        {stack && stack.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-5">
            {stack.map((tech) => (
              <span
                key={tech}
                className="bg-dark-bg/50 rounded-full px-3 py-1 text-xs text-gray-400 border border-dark-border/50"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex items-center gap-3 pt-2 border-t border-dark-border/50">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-accent 
                         border border-dark-border rounded-lg px-3 py-1.5 
                         hover:border-accent/50 transition-all duration-200"
            >
              <ExternalLink size={14} />
              GitHub
            </a>
          )}
          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-accent 
                         border border-dark-border rounded-lg px-3 py-1.5 
                         hover:border-accent/50 transition-all duration-200"
            >
              <Play size={14} />
              Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
