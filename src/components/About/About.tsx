// src/components/About/About.tsx
import { motion } from 'framer-motion';
import {
	MapPin,
	GraduationCap,
	Mail,
	Link as LinkIcon,
	Code2,
	Cpu,
	Trophy,
	Award,
	Target,
} from 'lucide-react';

function Stat({ value, label }: { value: string; label: string }) {
	return (
		<span className='inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-xs font-semibold text-slate-100 ring-1 ring-white/10'>
			<span className='text-slate-300'>{label}</span>
			<span className='text-white'>{value}</span>
		</span>
	);
}

function Pill({ children }: { children: React.ReactNode }) {
	return (
		<span className='rounded-full border border-sky-400/20 bg-sky-400/10 px-3 py-1.5 text-xs text-sky-100'>
			{children}
		</span>
	);
}

export default function About() {
	return (
		<motion.section
			id='about'
			initial={{ opacity: 0, y: 18 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, amount: 0.35 }}
			transition={{ duration: 0.6 }}
			className='relative py-20 px-6 text-slate-200 bg-gradient-to-b from-[#0b1020] via-[#0a1634] to-[#081022]'
			aria-labelledby='about-title'>
			{/* subtle deep-blue glows (very low opacity) */}
			<div className='pointer-events-none absolute inset-0 -z-10'>
				<div className='absolute -top-28 -left-28 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl' />
				<div className='absolute -bottom-32 -right-24 h-96 w-96 rounded-full bg-indigo-500/10 blur-3xl' />
			</div>

			<div className='mx-auto w-full max-w-6xl'>
				{/* Heading */}
				<header className='text-center'>
					<h2
						id='about-title'
						className='inline-block text-4xl sm:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-300 via-sky-200 to-indigo-300 bg-clip-text text-transparent'>
						About
					</h2>
					<div className='mx-auto mt-3 h-[3px] w-24 rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-400' />
					<div className='mt-5 flex flex-wrap justify-center gap-3'>
						<Stat
							value='12+'
							label='Projects'
						/>
						<Stat
							value='1000+'
							label='CP Problems'
						/>
						<Stat
							value='7'
							label='Microservices'
						/>
					</div>
				</header>

				{/* Content grid (no cards) */}
				<div className='mt-10 grid grid-cols-1 md:grid-cols-2 gap-12'>
					{/* Left: Profile + Quick facts */}
					<div>
						<h3 className='text-base font-semibold text-white'>Profile</h3>
						<p className='mt-3 text-slate-300 leading-relaxed'>
							Software engineer specializing in scalable backends and clear APIs
							using TypeScript/Node.js and Go, with strong foundations in
							algorithms and systems. Focused on reliability, observability, and
							measurable outcomes.
						</p>
						<p className='mt-3 text-slate-300 leading-relaxed'>
							Competitive programming (1000+ problems) sharpens decomposition
							and edge‑case thinking, informing pragmatic designs under
							constraints.
						</p>

						<ul className='mt-6 space-y-3 text-sm'>
							<li className='flex items-center gap-3'>
								<span className='h-2 w-2 rounded-full bg-gradient-to-r from-cyan-400 to-indigo-400' />
								<MapPin
									size={16}
									className='text-slate-400'
								/>{' '}
								Sonepat, Haryana, India • IST (UTC+5:30)
							</li>
							<li className='flex items-center gap-3'>
								<span className='h-2 w-2 rounded-full bg-gradient-to-r from-sky-400 to-cyan-400' />
								<GraduationCap
									size={16}
									className='text-slate-400'
								/>{' '}
								IIIT Sonepat • B.Tech CSE • CGPA 8.33
							</li>
							<li className='flex items-center gap-3'>
								<span className='h-2 w-2 rounded-full bg-gradient-to-r from-indigo-400 to-sky-400' />
								<Mail
									size={16}
									className='text-slate-400'
								/>{' '}
								deephalder112002@gmail.com
							</li>
							<li className='flex items-center gap-3'>
								<span className='h-2 w-2 rounded-full bg-gradient-to-r from-cyan-400 to-indigo-400' />
								<LinkIcon
									size={16}
									className='text-slate-400'
								/>{' '}
								linkedin.com/in/deep-halder • github.com/your-username
							</li>
						</ul>

						{/* Gradient CTAs */}
						<div className='mt-7 flex flex-col sm:flex-row gap-3'>
							<a
								href='/resume.pdf'
								className='inline-flex items-center justify-center px-5 py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-cyan-600 to-indigo-600 hover:from-cyan-500 hover:to-indigo-500 transition-all'>
								Download Résumé
							</a>
							<a
								href='#contact'
								className='inline-flex items-center justify-center px-5 py-3 rounded-lg font-semibold text-slate-100 bg-white/5 hover:bg-white/10 ring-1 ring-white/10 transition-all'>
								Contact
							</a>
						</div>
					</div>

					{/* Right: Achievements */}
					<div>
						<h3 className='text-base font-semibold text-white'>Achievements</h3>
						<ul className='mt-3 space-y-3 text-sm'>
							<li className='flex items-start gap-3'>
								<Award
									size={18}
									className='mt-0.5 text-cyan-400'
								/>
								Solved 600+ problems across LeetCode, Codeforces (1114), and
								GFG.
							</li>
							<li className='flex items-start gap-3'>
								<Award
									size={18}
									className='mt-0.5 text-sky-400'
								/>
								Top 5/100+ at Hackzilla for an ML-based crowd flow predictor to
								optimize emergency response.
							</li>
							<li className='flex items-start gap-3'>
								<Award
									size={18}
									className='mt-0.5 text-indigo-400'
								/>
								Built a healthcare app at Vihaan 8.0 with real-time
								doctor–patient communication.
							</li>
						</ul>

						{/* Snapshot chips */}
						<div className='mt-6 grid grid-cols-3 gap-3 text-sm'>
							<div className='flex items-center gap-2 text-slate-200'>
								<Code2
									size={16}
									className='text-cyan-400'
								/>{' '}
								TS/Node
							</div>
							<div className='flex items-center gap-2 text-slate-200'>
								<Cpu
									size={16}
									className='text-sky-400'
								/>{' '}
								Go
							</div>
							<div className='flex items-center gap-2 text-slate-200'>
								<Trophy
									size={16}
									className='text-indigo-400'
								/>{' '}
								CP
							</div>
						</div>
					</div>
				</div>

				{/* Focus band (dark, no cards) */}
				<div className='mt-12 rounded-2xl p-6 bg-white/5 ring-1 ring-white/10'>
					<h3 className='text-sm font-semibold text-white'>Focus</h3>
					<ul className='mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-slate-200'>
						<li className='flex items-start gap-2'>
							<Target
								size={16}
								className='mt-0.5 text-cyan-400'
							/>{' '}
							Clear APIs, tracing, SLOs, reliability budgets
						</li>
						<li className='flex items-start gap-2'>
							<Target
								size={16}
								className='mt-0.5 text-sky-400'
							/>{' '}
							Query performance, caching, data modeling
						</li>
						<li className='flex items-start gap-2'>
							<Target
								size={16}
								className='mt-0.5 text-indigo-400'
							/>{' '}
							System design practice and review cadence
						</li>
						<li className='flex items-start gap-2'>
							<Target
								size={16}
								className='mt-0.5 text-teal-400'
							/>{' '}
							Network science: influence maximization, critical nodes
						</li>
					</ul>
				</div>

				{/* Tech pills */}
				<div className='mt-8'>
					<h3 className='text-sm font-semibold text-white'>Tech</h3>
					<div className='mt-3 flex flex-wrap gap-2'>
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
						].map((t) => (
							<Pill key={t}>{t}</Pill>
						))}
					</div>
				</div>
			</div>
		</motion.section>
	);
}
