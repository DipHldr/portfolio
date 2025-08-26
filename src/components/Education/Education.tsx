// src/sections/Education.jsx
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Calendar, MapPin, BookOpen } from 'lucide-react';

export default function Education() {
	const [ref, inView] = useInView({
		threshold: 0.1,
		triggerOnce: true,
	});

	return (
		<section className='relative py-20'>
			{/* Deep blue gradient background + soft blobs (matches About) */}
			<div className='pointer-events-none absolute inset-0 -z-10'>
				<div className='absolute inset-0 bg-gradient-to-b from-[#0b1020] via-[#0a1634] to-[#081022]' />
				<div className='absolute -top-28 -left-28 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl' />
				<div className='absolute -bottom-32 -right-24 h-96 w-96 rounded-full bg-indigo-500/10 blur-3xl' />
			</div>

			<div className='max-w-4xl mx-auto px-4'>
				{/* Header */}
				<motion.div
					ref={ref}
					initial={{ opacity: 0, y: 50 }}
					animate={inView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.8 }}
					className='text-center mb-16'>
					<h2 className='text-4xl md:text-5xl font-extrabold mb-6 inline-block bg-gradient-to-r from-cyan-300 via-fuchsia-300 to-indigo-300 bg-clip-text text-transparent'>
						Education
					</h2>
					<div className='w-20 h-1 bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-400 mx-auto mb-8' />
				</motion.div>

				{/* Info panel (no timeline) */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={inView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.8, delay: 0.15 }}
					className='rounded-2xl border border-white/10 bg-white/5 p-8 md:p-10 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.6)]'
					aria-label='Education details'>
					<div className='flex items-start gap-4'>
						<div className='bg-gradient-to-r from-cyan-500 to-indigo-600 p-3 rounded-xl shrink-0'>
							<GraduationCap className='w-6 h-6 text-white' />
						</div>

						<div className='flex-1'>
							<h3 className='text-2xl md:text-3xl font-bold text-white'>
								Bachelor of Technology in Computer Science
							</h3>

							<p className='mt-1 text-lg font-semibold inline-block bg-gradient-to-r from-cyan-300 via-sky-300 to-indigo-300 bg-clip-text text-transparent'>
								Indian Institute of Information Technology (IIIT) Sonepat
							</p>

							{/* Meta */}
							<div className='mt-4 flex flex-wrap gap-6 text-slate-300'>
								<div className='flex items-center gap-2'>
									<Calendar className='w-4 h-4' />
									<span>Nov 2022 – Jun 2026</span>
								</div>
								<div className='flex items-center gap-2'>
									<MapPin className='w-4 h-4' />
									<span>Sonepat, Haryana</span>
								</div>
							</div>

							{/* CGPA + Summary */}
							<div className='mt-6 rounded-lg border border-cyan-400/25 bg-gradient-to-r from-cyan-500/10 to-indigo-500/10 p-4'>
								<p className='text-lg font-semibold inline-block bg-gradient-to-r from-emerald-300 via-cyan-300 to-indigo-300 bg-clip-text text-transparent'>
									CGPA: 8.33/10
								</p>
								<p className='text-slate-200 mt-2'>
									Focus on Data Structures & Algorithms, Software Engineering,
									Database Systems, Operating Systems, and Machine Learning.
								</p>
							</div>

							{/* Relevant Coursework */}
							<div className='mt-6'>
								<div className='flex items-center gap-2 text-white font-semibold'>
									<BookOpen className='w-5 h-5 text-indigo-300' />
									<span>Relevant Coursework</span>
								</div>
								<div className='mt-3 flex flex-wrap gap-2'>
									{[
										'DSA',
										'DBMS',
										'Operating Systems',
										'Computer Networks',
										'Automata',
										'Compiler Design',
										'OOP (Java/C++)',
										'Software Engineering',
										'Big Data',
										'Machine Learning',
										'Cloud Computing',
									].map((c) => (
										<span
											key={c}
											className='rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-200'>
											{c}
										</span>
									))}
								</div>
							</div>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
