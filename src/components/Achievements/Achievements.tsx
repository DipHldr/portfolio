import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Trophy, Code, Users, Heart } from 'lucide-react';

const achievements = [
  {
    icon: Code,
    title: '600+ Problems Solved',
    description: 'Competitive programming across LeetCode, Codeforces, and GeeksforGeeks',
    color: 'from-purple-500 to-blue-600',
    shadowColor: 'purple-500/25',
  },
  {
    icon: Trophy,
    title: 'Top 5 in Hackzilla',
    description: 'ML-based crowd flow predictor that impressed judges with innovative approach',
    color: 'from-yellow-500 to-orange-600',
    shadowColor: 'yellow-500/25',
  },
  {
    icon: Users,
    title: 'Vihaan 8.0 Participant',
    description: 'Built healthcare application focused on improving patient care and accessibility',
    color: 'from-green-500 to-teal-600',
    shadowColor: 'green-500/25',
  },
  {
    icon: Heart,
    title: 'Open Source Contributor',
    description: 'Active contributor to various open-source projects and community initiatives',
    color: 'from-red-500 to-pink-600',
    shadowColor: 'red-500/25',
  },
];

export default function Achievements() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Achievements
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-600 mx-auto mb-8" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative group cursor-pointer transform hover:scale-105 transition-all duration-300`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${achievement.color} rounded-xl blur opacity-20 group-hover:opacity-30 transition-opacity`} />
              
              <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-xl p-6 hover:border-opacity-50 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className={`bg-gradient-to-br ${achievement.color} p-3 rounded-xl shadow-lg`}>
                    <achievement.icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300">
                      {achievement.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}