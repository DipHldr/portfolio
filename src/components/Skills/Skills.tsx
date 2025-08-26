// src/sections/Skills.tsx
import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

type SkillShape = 'box' | 'sphere';

type Skill = {
	name: string;
	color: string;
	type: SkillShape;
};

type Category = {
	title: string;
	skills: Skill[];
};

const skillCategories: Category[] = [
	{
		title: 'Languages',
		skills: [
			{ name: 'JavaScript', color: '#F7DF1E', type: 'box' },
			{ name: 'TypeScript', color: '#3178C6', type: 'sphere' },
			{ name: 'C++', color: '#00599C', type: 'box' },
			{ name: 'Java', color: '#ED8B00', type: 'sphere' },
			{ name: 'Python', color: '#3776AB', type: 'box' },
			{ name: 'SQL', color: '#336791', type: 'sphere' },
		],
	},
	{
		title: 'Frontend',
		skills: [
			{ name: 'React', color: '#61DAFB', type: 'sphere' },
			{ name: 'Next.js', color: '#ffffff', type: 'box' },
			{ name: 'Tailwind', color: '#38B2AC', type: 'sphere' },
			{ name: 'Zustand', color: '#FF6B6B', type: 'box' },
		],
	},
	{
		title: 'Backend',
		skills: [
			{ name: 'Node.js', color: '#68A063', type: 'sphere' },
			{ name: 'Express.js', color: '#000000', type: 'box' },
			{ name: 'WebSockets', color: '#4A90E2', type: 'sphere' },
			{ name: 'RabbitMQ', color: '#FF6600', type: 'box' },
		],
	},
	{
		title: 'Database & DevOps',
		skills: [
			{ name: 'MongoDB', color: '#47A248', type: 'sphere' },
			{ name: 'PostgreSQL', color: '#336791', type: 'box' },
			{ name: 'Prisma', color: '#2D3748', type: 'sphere' },
			{ name: 'Docker', color: '#2496ED', type: 'box' },
			{ name: 'Git', color: '#F05032', type: 'sphere' },
			{ name: 'Vercel', color: '#000000', type: 'box' },
		],
	},
];

function SkillBadge({ name, color }: { name: string; color: string }) {
	return (
		<div
			className='group relative w-36 h-24 sm:w-40 sm:h-28'
			role='img'
			aria-label={name}
			title={name}>
			{/* Gradient border shell */}
			<div className='relative h-full w-full rounded-2xl p-[1.2px] bg-gradient-to-br from-cyan-400/40 via-indigo-400/30 to-fuchsia-400/40'>
				{/* Glass tile */}
				<div className='relative h-full w-full rounded-[calc(theme(borderRadius.2xl)-1.2px)] bg-slate-900/60 backdrop-blur-md ring-1 ring-white/10 px-4 py-3 flex items-center gap-3 transition-all duration-300 group-hover:-translate-y-1 group-hover:ring-white/20 overflow-hidden'>
					{/* Shine sweep */}
					<div className='pointer-events-none absolute -top-1/2 left-0 h-[220%] w-1/2 bg-gradient-to-b from-white/15 to-transparent rotate-45 -translate-x-[160%] group-hover:translate-x-[260%] transition-transform duration-[1200ms] ease-out' />
					{/* Soft colored glow */}
					<div
						className='pointer-events-none absolute inset-0 opacity-20 blur-2xl'
						style={{
							background: `radial-gradient(60% 60% at 50% 50%, ${color}33 0%, transparent 70%)`,
						}}
					/>
					{/* Color chip */}
					<span
						className='relative shrink-0 h-7 w-7 rounded-full ring-2 ring-slate-900'
						style={{ backgroundColor: color }}
					/>
					{/* Label */}
					<div className='relative z-10'>
						<p className='text-slate-100 font-semibold leading-tight'>{name}</p>
						<p className='text-slate-300/70 text-xs'>Core Skill</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default function Skills() {
	const [activeCat, setActiveCat] = useState<string>('All');
	const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

	const tabs = useMemo(
		() => ['All', ...skillCategories.map((c) => c.title)],
		[]
	);
	const skillsToShow = useMemo(() => {
		if (activeCat === 'All') {
			return skillCategories.flatMap((c) =>
				c.skills.map((s) => ({ ...s, _cat: c.title }))
			);
		}
		const cat = skillCategories.find((c) => c.title === activeCat);
		return (cat?.skills || []).map((s) => ({ ...s, _cat: activeCat }));
	}, [activeCat]);

	return (
		<section className='relative py-20'>
			{/* Section background (deep blue) */}
			<div className='pointer-events-none absolute inset-0 -z-10'>
				<div className='absolute inset-0 bg-gradient-to-b from-[#0b1020] via-[#0a1634] to-[#081022]' />
				<div className='absolute -top-28 -left-28 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl' />
				<div className='absolute -bottom-32 -right-24 h-96 w-96 rounded-full bg-indigo-500/10 blur-3xl' />
			</div>

			<div className='max-w-6xl mx-auto px-4'>
				{/* Header */}
				<motion.div
					ref={ref}
					initial={{ opacity: 0, y: 50 }}
					animate={inView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.8 }}
					className='text-center mb-12'>
					<h2 className='text-4xl md:text-5xl font-extrabold mb-6 inline-block bg-gradient-to-r from-cyan-300 via-fuchsia-300 to-indigo-300 bg-clip-text text-transparent'>
						Technical Skills
					</h2>
					<div className='w-28 h-[3px] bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-400 mx-auto' />
				</motion.div>

				{/* Category tabs */}
				<div className='flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10'>
					{tabs.map((t) => {
						const active = t === activeCat;
						return (
							<button
								key={t}
								onClick={() => setActiveCat(t)}
								className={[
									'px-4 py-2 rounded-full text-sm font-semibold transition-all',
									active
										? 'text-white bg-gradient-to-r from-cyan-600 to-fuchsia-600 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.5)]'
										: 'text-slate-200 bg-white/5 hover:bg-white/10 ring-1 ring-white/10',
								].join(' ')}
								aria-pressed={active}>
								{t}
							</button>
						);
					})}
				</div>

				{/* Grid */}
				<motion.div
					initial={{ opacity: 0, y: 24 }}
					animate={inView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.6, delay: 0.1 }}
					className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5 sm:gap-6'>
					{skillsToShow.map((skill, i) => (
						<motion.div
							key={`${skill._cat}-${skill.name}-${i}`}
							initial={{ opacity: 0, scale: 0.9 }}
							animate={inView ? { opacity: 1, scale: 1 } : {}}
							transition={{ duration: 0.45, delay: Math.min(i * 0.03, 0.4) }}>
							<SkillBadge
								name={skill.name}
								color={skill.color}
							/>
						</motion.div>
					))}
				</motion.div>

				{/* Legend / note */}
				<div className='mt-8 text-center text-slate-300/70 text-xs'>
					Hover tiles for subtle motion • Tabs filter categories • No 3D for
					optimal performance
				</div>
			</div>
		</section>
	);
}
