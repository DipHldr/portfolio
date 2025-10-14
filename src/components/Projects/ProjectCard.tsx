import { motion } from 'framer-motion';
import { useState, MouseEvent } from 'react';
import { ExternalLink, Github, Sparkles } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  longDescription: string;
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
  gradient: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePosition({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: 50, y: 50 });
    setIsFlipped(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative h-[480px] group perspective-1000"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className="relative w-full h-full"
        style={{
          transformStyle: 'preserve-3d',
        }}
        animate={{
          rotateY: isFlipped ? 180 : 0,
        }}
        transition={{ duration: 0.7, type: 'spring', stiffness: 100 }}
      >
        <div
          className="absolute inset-0 backface-hidden"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <motion.div
            className="relative h-full rounded-3xl overflow-hidden cursor-pointer"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            onClick={() => setIsFlipped(true)}
          >
            <div
              className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 blur-3xl`}
              style={{
                transform: `translate(${(mousePosition.x - 50) * 0.2}px, ${(mousePosition.y - 50) * 0.2}px)`,
              }}
            />

            <div className="relative h-full rounded-3xl bg-gradient-to-br from-gray-900/95 to-gray-800/95 backdrop-blur-xl border border-white/10 overflow-hidden">
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `radial-gradient(600px circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(255,255,255,0.06), transparent 40%)`,
                }}
              />

              <div className="relative h-full p-8 flex flex-col justify-between z-10">
                <div>
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-2xl bg-gradient-to-br ${project.gradient} shadow-lg`}>
                      <Sparkles className="w-6 h-6 text-white" />
                    </div>
                    <motion.div
                      className="text-xs font-medium text-gray-400 bg-gray-800/50 px-3 py-1.5 rounded-full border border-gray-700/50"
                      whileHover={{ scale: 1.05 }}
                    >
                      Click to explore
                    </motion.div>
                  </div>

                  <h3 className="text-3xl font-bold text-white mb-4 tracking-tight">
                    {project.title}
                  </h3>

                  <p className="text-gray-300 leading-relaxed text-lg">
                    {project.description}
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.slice(0, 4).map((tech, i) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 + i * 0.05 }}
                        className="px-4 py-2 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 text-sm font-medium text-gray-200"
                      >
                        {tech}
                      </motion.span>
                    ))}
                    {project.techStack.length > 4 && (
                      <span className="px-4 py-2 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 text-sm font-medium text-gray-200">
                        +{project.techStack.length - 4}
                      </span>
                    )}
                  </div>

                  <div className={`h-1 rounded-full bg-gradient-to-r ${project.gradient} opacity-50`} />
                </div>
              </div>

              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-white/5 to-transparent rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
            </div>
          </motion.div>
        </div>

        <div
          className="absolute inset-0 backface-hidden"
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
        >
          <motion.div
            className="relative h-full rounded-3xl overflow-hidden"
            onClick={() => setIsFlipped(false)}
          >
            <div className="relative h-full rounded-3xl bg-gradient-to-br from-gray-900/98 to-gray-800/98 backdrop-blur-xl border border-white/10 overflow-hidden">
              <div
                className="absolute inset-0"
                style={{
                  background: `radial-gradient(600px circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(255,255,255,0.04), transparent 40%)`,
                }}
              />

              <div className="relative h-full p-8 flex flex-col z-10">
                <div className="flex items-start justify-between mb-4 flex-shrink-0">
                  <h3 className="text-2xl font-bold text-white tracking-tight">
                    {project.title}
                  </h3>
                  <motion.button
                    whileHover={{ rotate: 180 }}
                    transition={{ duration: 0.3 }}
                    className="text-gray-400 hover:text-white transition-colors flex-shrink-0"
                    onClick={() => setIsFlipped(false)}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </motion.button>
                </div>

                <div className="flex-1 overflow-y-auto overflow-x-hidden min-h-0 pr-2 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
                  <p className="text-gray-300 leading-relaxed mb-6">
                    {project.longDescription}
                  </p>

                  <div className="mb-4">
                    <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                      <div className="w-8 h-px bg-gradient-to-r from-cyan-500 to-transparent" />
                      Tech Stack
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      {project.techStack.map((tech) => (
                        <motion.div
                          key={tech}
                          whileHover={{ scale: 1.05, x: 4 }}
                          className={`px-3 py-2 rounded-lg bg-gradient-to-br ${project.gradient} bg-opacity-10 border border-white/10 text-sm font-medium text-gray-200 flex items-center gap-2`}
                        >
                          <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-br ${project.gradient}`} />
                          {tech}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="space-y-3 mt-6 flex-shrink-0">
                  <div className="flex gap-3">
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 text-white font-medium hover:bg-white/10 transition-all group"
                    >
                      <Github className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                      View Code
                    </motion.a>

                    {project.liveUrl && (
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`flex-1 flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r ${project.gradient} text-white font-medium shadow-lg hover:shadow-xl transition-all group`}
                      >
                        <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        Live Demo
                      </motion.a>
                    )}
                  </div>

                  {!project.liveUrl && (
                    <div className="text-center text-xs text-gray-500">
                      Source code available on GitHub
                    </div>
                  )}
                </div>
              </div>

              <div className={`absolute top-0 right-0 w-96 h-96 bg-gradient-to-br ${project.gradient} opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2`} />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}
