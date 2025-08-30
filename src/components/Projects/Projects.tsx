import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ProjectCard from './ProjectCard';

const projects = [
  {
    title: 'Startup Stage',
    description: 'Modern platform for startup showcases with authentication and content management',
    longDescription: 'A comprehensive platform built with Next.js featuring user authentication, content management through Sanity CMS, and error monitoring with Sentry. Provides startups with a professional showcase platform.',
    techStack: ['Next.js', 'Sanity', 'NextAuth', 'Sentry', 'TypeScript'],
    githubUrl: 'https://github.com/DipHldr/pitch_your_startup',
    liveUrl: 'https://pitch-your-startup-6t33.vercel.app/',
    gradient: 'from-blue-500 to-cyan-600',
  },
  {
    title: 'Subscription Tracker',
    description: 'Full-stack application for managing and tracking subscription services',
    longDescription: 'A robust subscription management system with automated email notifications, secure API endpoints using ArcJet, and MongoDB for data persistence. Helps users track and manage their recurring subscriptions.',
    techStack: ['Express.js', 'MongoDB', 'Nodemailer', 'ArcJet', 'Node.js'],
    githubUrl: 'https://github.com/DipHldr/subscription-tracker-backend',
    gradient: 'from-purple-500 to-indigo-600',
  },
  {
    title: 'MovieMania',
    description: 'Movie discovery app with real-time data from TMDB API',
    longDescription: 'An interactive movie discovery platform featuring real-time movie data, advanced search capabilities, detailed movie information, and a responsive design. Built with modern React practices and Tailwind CSS.',
    techStack: ['React.js', 'TMDB API', 'Tailwind CSS', 'JavaScript'],
    githubUrl: 'https://github.com/DipHldr/movieapp',
    liveUrl: 'https://movieapp-ten-amber.vercel.app/',
    gradient: 'from-red-500 to-pink-600',
  },
  {
    title: 'AI Resume Analyzer',
    description: 'Smart resume analysis tool with AI-powered recommendations',
    longDescription: 'An AI-powered resume analysis tool that provides intelligent feedback and recommendations. Features modern state management with Zustand, client-side routing, and integration with Puter for file processing.',
    techStack: ['React Router', 'Zustand', 'Puter', 'Tailwind CSS', 'AI/ML'],
    githubUrl: 'https://github.com/DipHldr/resume-analyser',
    gradient: 'from-green-500 to-teal-600',
  },
  {
    title: 'Chess Engine',
    description: 'High-performance chess engine implemented in C++',
    longDescription: 'A sophisticated chess engine built from scratch using bitboards for efficient board representation, minimax algorithm with alpha-beta pruning for optimal move calculation, and advanced position evaluation functions.',
    techStack: ['C++', 'Bitboards', 'Minimax', 'Alpha-Beta Pruning'],
    githubUrl: 'https://github.com/DipHldr/chess_engine',
    gradient: 'from-gray-600 to-gray-800',
  },
  {
    title: 'Wireless Sensor Network  Optimization',
    description: 'Wireless Sensor Network optimization using Ant Colony Algorithm',
    longDescription: 'Research project implementing Ant Colony Optimization algorithm to solve routing problems in Wireless Sensor Networks. Focuses on energy efficiency and network lifetime optimization with comprehensive performance analysis.',
    techStack: ['Python', 'ACO Algorithm','Metaheuristics', 'NetworkX', 'Data Analysis'],
    githubUrl: 'https://github.com/DipHldr/Computer_Networks',
    gradient: 'from-orange-500 to-red-600',
  },
];

export default function Projects() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="projects" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto mb-8" />
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A showcase of my technical skills and creative problem-solving through various projects
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}