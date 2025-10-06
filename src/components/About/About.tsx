import { motion } from 'framer-motion';
import {
  MapPin,
  GraduationCap,
  Mail,
  Linkedin,
  Github,
  Code2,
  Cpu,
  Trophy,
  Award,
  Target,
  Download,
  MessageSquare,
  Sparkles,
} from 'lucide-react';

function Stat({ value, label, delay = 0 }: { value: string; label: string; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      className='group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/10 to-white/5 p-4 backdrop-blur-sm ring-1 ring-white/10 transition-all hover:scale-105 hover:ring-cyan-400/30'
    >
      <div className='absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-indigo-500/10 opacity-0 transition-opacity group-hover:opacity-100' />
      <div className='relative'>
        <div className='text-2xl font-bold text-white'>{value}</div>
        <div className='mt-1 text-xs font-medium text-slate-400'>{label}</div>
      </div>
    </motion.div>
  );
}

function Pill({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay }}
      className='group relative overflow-hidden rounded-full border border-sky-400/20 bg-gradient-to-r from-sky-400/10 to-cyan-400/10 px-4 py-2 text-xs font-medium text-sky-100 transition-all hover:border-sky-400/40 hover:bg-sky-400/20'
    >
      <span className='relative z-10'>{children}</span>
      <div className='absolute inset-0 bg-gradient-to-r from-cyan-400/0 via-sky-400/20 to-cyan-400/0 opacity-0 transition-opacity group-hover:opacity-100' />
    </motion.span>
  );
}

function InfoCard({
  title,
  children,
  delay = 0
}: {
  title: string;
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className='group relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/5 to-white/[0.02] p-6 backdrop-blur-sm ring-1 ring-white/10 transition-all hover:ring-cyan-400/30'
    >
      <div className='absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gradient-to-br from-cyan-500/10 to-indigo-500/10 blur-2xl opacity-0 transition-opacity group-hover:opacity-100' />
      <div className='relative'>
        <div className='flex items-center gap-2'>
          <h3 className='text-lg font-bold text-white'>{title}</h3>
          <Sparkles size={16} className='text-cyan-400 opacity-0 transition-opacity group-hover:opacity-100' />
        </div>
        <div className='mt-4'>{children}</div>
      </div>
    </motion.div>
  );
}

export default function About() {
  return (
    <section
      id='about'
      className='relative overflow-hidden bg-gradient-to-b from-[#0b1020] via-[#0a1634] to-[#081022] px-6 py-24 text-slate-200'
      aria-labelledby='about-title'
    >
      <div className='pointer-events-none absolute inset-0 -z-10'>
        <div className='absolute -left-32 -top-32 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl' />
        <div className='absolute -bottom-40 -right-32 h-[500px] w-[500px] rounded-full bg-indigo-500/10 blur-3xl' />
        <div className='absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-500/5 blur-3xl' />
      </div>

      <div className='mx-auto w-full max-w-7xl'>
        <header className='text-center'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2
              id='about-title'
              className='inline-block bg-gradient-to-r from-cyan-300 via-sky-200 to-indigo-300 bg-clip-text text-5xl font-extrabold tracking-tight text-transparent sm:text-6xl'
            >
              About Me
            </h2>
            <div className='mx-auto mt-4 h-1 w-32 rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-400' />
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className='mx-auto mt-6 max-w-2xl text-lg text-slate-300'
          >
            Backend engineer passionate about building scalable systems and solving complex problems
          </motion.p>

          <div className='mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-6'>
            <Stat value='25+' label='Projects Completed' delay={0.1} />
            <Stat value='1000+' label='DSA Problems Solved' delay={0.2} />
            <Stat value='5+' label='Hackathons Participated' delay={0.3} />
          </div>
        </header>

        <div className='mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2'>
          <InfoCard title='Profile' delay={0.1}>
            <div className='space-y-4'>
              <p className='leading-relaxed text-slate-300'>
                I build reliable backends and clear APIs, mostly using JavaScript/Node.js and Python, with a solid grounding in C++ and algorithms. I enjoy designing scalable systems, working with microservices, Docker, and message queues like RabbitMQ.
              </p>
              <p className='leading-relaxed text-slate-300'>
                Solving 1000+ algorithmic problems has sharpened my problem-solving, edge-case thinking, and ability to design pragmatic solutions under constraints.
              </p>

              <div className='!mt-6 space-y-3 rounded-2xl bg-white/5 p-4 text-sm'>
                <div className='flex items-center gap-3 text-slate-200 transition-colors hover:text-white'>
                  <div className='flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500/20 to-indigo-500/20'>
                    <MapPin size={16} className='text-cyan-400' />
                  </div>
                  <span>Sonepat, Haryana, India • IST (UTC+5:30)</span>
                </div>
                <div className='flex items-center gap-3 text-slate-200 transition-colors hover:text-white'>
                  <div className='flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-sky-500/20 to-cyan-500/20'>
                    <GraduationCap size={16} className='text-sky-400' />
                  </div>
                  <span>IIIT Sonepat • B.Tech CSE • CGPA 8.33</span>
                </div>
                <div className='flex items-center gap-3 text-slate-200 transition-colors hover:text-white'>
                  <div className='flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500/20 to-sky-500/20'>
                    <Mail size={16} className='text-indigo-400' />
                  </div>
                  <a href='mailto:deephalder112002@gmail.com' className='hover:text-cyan-400 transition-colors'>
                    deephalder112002@gmail.com
                  </a>
                </div>
                <div className='flex items-center gap-3 text-slate-200'>
                  <div className='flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500/20 to-indigo-500/20'>
                    <Linkedin size={16} className='text-cyan-400' />
                  </div>
                  <div className='flex gap-3'>
                    <a
                      href='https://www.linkedin.com/in/deep-halder-2ba050289/'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='transition-colors hover:text-cyan-400'
                    >
                      LinkedIn
                    </a>
                    <span className='text-slate-500'>•</span>
                    <a
                      href='https://github.com/DipHldr'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='transition-colors hover:text-cyan-400'
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>

              <div className='!mt-6 flex flex-col gap-3 sm:flex-row'>
                <a
                  href='/resume.pdf'
                  download='DeepHalder_Resume.pdf'
                  className='group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-cyan-600 to-indigo-600 px-6 py-3 font-semibold text-white transition-all hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25'
                >
                  <Download size={18} className='transition-transform group-hover:translate-y-0.5' />
                  <span>Download Résumé</span>
                </a>
                <a
                  href='#contact'
                  className='group inline-flex items-center justify-center gap-2 rounded-xl bg-white/5 px-6 py-3 font-semibold text-slate-100 ring-1 ring-white/10 transition-all hover:bg-white/10 hover:ring-cyan-400/30'
                >
                  <MessageSquare size={18} />
                  <span>Contact Me</span>
                </a>
              </div>
            </div>
          </InfoCard>

          <InfoCard title='Achievements' delay={0.2}>
            <ul className='space-y-4'>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className='group flex items-start gap-4 rounded-xl bg-gradient-to-r from-cyan-500/5 to-transparent p-4 transition-all hover:from-cyan-500/10'
              >
                <div className='flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500/20 to-cyan-500/10 transition-transform group-hover:scale-110'>
                  <Award size={20} className='text-cyan-400' />
                </div>
                <div>
                  <div className='font-semibold text-white'>1000+ Problems Solved</div>
                  <div className='mt-1 text-sm text-slate-400'>
                    Across LeetCode, Codeforces (1114), and GeeksforGeeks
                  </div>
                </div>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className='group flex items-start gap-4 rounded-xl bg-gradient-to-r from-sky-500/5 to-transparent p-4 transition-all hover:from-sky-500/10'
              >
                <div className='flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-sky-500/20 to-sky-500/10 transition-transform group-hover:scale-110'>
                  <Trophy size={20} className='text-sky-400' />
                </div>
                <div>
                  <div className='font-semibold text-white'>Top 5 at Hackzilla</div>
                  <div className='mt-1 text-sm text-slate-400'>
                    ML-based crowd flow predictor to optimize emergency response (Top 5/100+)
                  </div>
                </div>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className='group flex items-start gap-4 rounded-xl bg-gradient-to-r from-indigo-500/5 to-transparent p-4 transition-all hover:from-indigo-500/10'
              >
                <div className='flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500/20 to-indigo-500/10 transition-transform group-hover:scale-110'>
                  <Award size={20} className='text-indigo-400' />
                </div>
                <div>
                  <div className='font-semibold text-white'>Healthcare App at Vihaan 8.0</div>
                  <div className='mt-1 text-sm text-slate-400'>
                    Real-time doctor–patient communication system
                  </div>
                </div>
              </motion.li>
            </ul>

            <div className='mt-6 grid grid-cols-3 gap-3'>
              {[
                { icon: Code2, label: 'LeetCode', href: '#', color: 'cyan' },
                { icon: Cpu, label: 'Codeforces', href: '#', color: 'sky' },
                { icon: Trophy, label: 'AI/ML', href: '#', color: 'indigo' },
              ].map((item, i) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 + i * 0.1 }}
                  className='group flex flex-col items-center gap-2 rounded-xl bg-white/5 p-4 text-center transition-all hover:bg-white/10 hover:ring-1 hover:ring-white/20'
                >
                  <item.icon size={24} className={`text-${item.color}-400`} />
                  <span className='text-xs font-medium text-slate-300 transition-colors group-hover:text-white'>
                    {item.label}
                  </span>
                </motion.a>
              ))}
            </div>
          </InfoCard>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className='mt-8 overflow-hidden rounded-3xl bg-gradient-to-br from-white/5 to-white/[0.02] p-8 backdrop-blur-sm ring-1 ring-white/10'
        >
          <div className='flex items-center gap-3'>
            <Target size={24} className='text-cyan-400' />
            <h3 className='text-xl font-bold text-white'>Current Focus</h3>
          </div>
          <ul className='mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2'>
            {[
              'Scalable backend systems, REST APIs, and microservices',
              'WebSockets, RabbitMQ, and event-driven architectures',
              'Problem-solving with Python, C++, and algorithmic thinking',
              'System design, database modeling, and performance optimization',
            ].map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + i * 0.1 }}
                className='flex items-start gap-3 text-slate-300'
              >
                <div className='mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gradient-to-r from-cyan-400 to-indigo-400' />
                <span className='leading-relaxed'>{item}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className='mt-8'
        >
          <h3 className='mb-6 text-xl font-bold text-white'>Technologies & Tools</h3>
          <div className='flex flex-wrap gap-2'>
            {[
              'TypeScript',
              'React',
              'Next.js',
              'Node.js',
              'Go',
              'Microservices',
              'PostgreSQL',
              'MongoDB',
              'Redis',
              'Docker',
              'Kubernetes',
              'RabbitMQ',
              'GraphQL',
              'gRPC',
              'Scrapy',
              'Airflow',
              'Tailwind',
              'Prisma',
              'Vite',
            ].map((tech, i) => (
              <Pill key={tech} delay={0.5 + i * 0.02}>
                {tech}
              </Pill>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
