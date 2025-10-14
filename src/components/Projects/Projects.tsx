import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ProjectCard from './ProjectCard';
import { Code2, Rocket } from 'lucide-react';

const projects = [
  {
    title: 'Startup Stage',
    description: 'Modern platform for startup showcases with authentication and content management',
    longDescription: 'A comprehensive platform built with Next.js featuring user authentication, content management through Sanity CMS, and error monitoring with Sentry. Provides startups with a professional showcase platform.',
    techStack: ['Next.js', 'Sanity', 'NextAuth', 'Sentry', 'TypeScript'],
    githubUrl: 'https://github.com/DipHldr/pitch_your_startup',
    liveUrl: 'https://pitch-your-startup-6t33.vercel.app/',
    gradient: 'from-blue-500 to-cyan-600',
    icon: 'Rocket',
  },
  {
    title: 'Subscription Tracker',
    description: 'Full-stack application for managing and tracking subscription services',
    longDescription: 'A robust subscription management system with automated email notifications, secure API endpoints using ArcJet, and MongoDB for data persistence. Helps users track and manage their recurring subscriptions.',
    techStack: ['Express.js', 'MongoDB', 'Nodemailer', 'ArcJet', 'Node.js'],
    githubUrl: 'https://github.com/DipHldr/subscription-tracker-backend',
    gradient: 'from-violet-500 to-fuchsia-600',
    icon: 'CreditCard',
  },
  {
    title: 'MovieMania',
    description: 'Movie discovery app with real-time data from TMDB API',
    longDescription: 'An interactive movie discovery platform featuring real-time movie data, advanced search capabilities, detailed movie information, and a responsive design. Built with modern React practices and Tailwind CSS.',
    techStack: ['React.js', 'TMDB API', 'Tailwind CSS', 'JavaScript'],
    githubUrl: 'https://github.com/DipHldr/movieapp',
    liveUrl: 'https://movieapp-ten-amber.vercel.app/',
    gradient: 'from-red-500 to-pink-600',
    icon: 'Film',
  },
  {
    title: 'AI Resume Analyzer',
    description: 'Smart resume analysis tool with AI-powered recommendations',
    longDescription: 'An AI-powered resume analysis tool that provides intelligent feedback and recommendations. Features modern state management with Zustand, client-side routing, and integration with Puter for file processing.',
    techStack: ['React Router', 'Zustand', 'Puter', 'Tailwind CSS', 'AI/ML'],
    githubUrl: 'https://github.com/DipHldr/AI-Based-Resume-Analyser',
    liveUrl: 'https://ai-based-resume-analyser-khaki.vercel.app/',
    gradient: 'from-green-500 to-emerald-600',
    icon: 'Brain',
  },
  {
    title: 'Chess Engine',
    description: 'High-performance chess engine implemented in C++',
    longDescription: 'A sophisticated chess engine built from scratch using bitboards for efficient board representation, minimax algorithm with alpha-beta pruning for optimal move calculation, and advanced position evaluation functions.',
    techStack: ['C++', 'Bitboards', 'Minimax', 'Alpha-Beta Pruning'],
    githubUrl: 'https://github.com/DipHldr/chess_engine',
    gradient: 'from-slate-500 to-zinc-700',
    icon: 'Crown',
  },
  {
    title: 'Wireless Sensor Network Optimization',
    description: 'Wireless Sensor Network optimization using Ant Colony Algorithm',
    longDescription: 'Research project implementing Ant Colony Optimization algorithm to solve routing problems in Wireless Sensor Networks. Focuses on energy efficiency and network lifetime optimization with comprehensive performance analysis.',
    techStack: ['Python', 'ACO Algorithm', 'Metaheuristics', 'NetworkX', 'Data Analysis'],
    githubUrl: 'https://github.com/DipHldr/Computer_Networks',
    gradient: 'from-orange-500 to-amber-600',
    icon: 'Network',
  },
];

export default function Projects() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="projects" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900" />

      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          {/* <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 mb-6"
          >
            <Rocket className="w-4 h-4 text-cyan-400" />
            <span className="text-sm font-medium text-cyan-400">Featured Work</span>
          </motion.div> */}

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              Featured
            </span>
            {/* <br /> */}
            <span className="ml-2 bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>

          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-cyan-500" />
            <Code2 className="w-6 h-6 text-cyan-400" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-cyan-500" />
          </div>

          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            A curated collection showcasing technical expertise, creative problem-solving, and production-ready applications across various domains
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 text-center"
        >
          <div className="inline-block">
            <p className="text-gray-400 mb-4">Want to see more?</p>
            <motion.a
              href="https://github.com/DipHldr"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-gray-800 to-gray-900 border border-white/10 text-white font-medium hover:border-cyan-500/50 transition-all group"
            >
              <span>Visit My GitHub</span>
              <motion.div
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.div>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
