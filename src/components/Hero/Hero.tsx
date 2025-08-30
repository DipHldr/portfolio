// src/components/Hero/Hero.tsx
import { motion } from 'framer-motion';
import {
	ArrowDown,
	Github,
	Linkedin,
	Mail,
	Code2,
	Cpu,
	Trophy,
} from 'lucide-react';
import ThreeBackground from './ThreeBackground';
import AvailabilityBadge from './AvailabilityBadge';
import HeroStats from './HeroStats';
import HeroSocial from './HeroSocial';
import HeroTechPills from './HeroTechPills';
import avatar from '../../assets/avatar.jpg';

export default function Hero() {
	const scrollToAbout = () => {
		document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
	};

	return (
		<section className='relative min-h-screen flex items-center justify-center overflow-hidden p-6'>
			<ThreeBackground />

			<div className='relative z-10 w-full'>
				<div className='mx-auto max-w-4xl'>
					{/* Card */}
					<motion.div
						initial={{ opacity: 0, y: 14 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
						className='relative w-full rounded-2xl border border-white/10 bg-black/30 backdrop-blur-lg shadow-[0_10px_40px_-10px_rgba(0,0,0,0.55)]'>
						{/* Avatar on top */}
						<div className='absolute -top-16 left-1/2 -translate-x-1/2'>
							<div className='relative'>
								<div className='absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-400/25 via-blue-400/20 to-purple-500/25 blur-md' />
								<img
									src={avatar}
									alt='Portrait'
									className='relative w-28 h-28 md:w-32 md:h-32 rounded-full object-cover ring-2 ring-white/20 shadow-xl'
								/>
							</div>
						</div>

						{/* Content */}
						<div className='pt-20 px-6 sm:px-10 pb-8 text-center'>
							<div className='flex justify-center'>
								<AvailabilityBadge />
							</div>

							<h1 className='mt-3 text-4xl md:text-5xl font-extrabold tracking-tight text-white'>
								Deep Halder
							</h1>

							<p className='mt-2 text-sm md:text-base text-gray-300'>
								Software Engineer • Full Stack Developer • Competitive
								Programmer
							</p>

							<HeroStats
								items={[
									{
										icon: <Code2 size={16} />,
										label: 'Projects',
										value: '15+',
									},
									{
										icon: <Cpu size={16} />,
										label: 'Microservices',
										value: '3',
									},
									{
										icon: <Trophy size={16} />,
										label: 'DSA Problems',
										value: '1000+',
									},
								]}
							/>

							<div className='mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center'>
								<motion.a
									href='#projects'
									whileHover={{ scale: 1.03, y: -2 }}
									whileTap={{ scale: 0.97 }}
									className='px-6 py-3 rounded-lg font-semibold text-white bg-white/10 hover:bg-white/15 border border-white/20 transition-all'>
									Explore My Work
								</motion.a>
								<motion.a
									href='#contact'
									whileHover={{ scale: 1.03, y: -2 }}
									whileTap={{ scale: 0.97 }}
									className='px-6 py-3 rounded-lg font-semibold text-gray-200 border border-white/20 hover:bg-white/10 transition-all'>
									Let’s Connect
								</motion.a>
							</div>

							<HeroSocial
								links={[
									{
										href: 'https://github.com/DipHldr',
										label: 'GitHub',
										icon: <Github size={22} />,
									},
									{
										href: 'https://www.linkedin.com/in/deep-halder-2ba050289/',
										label: 'LinkedIn',
										icon: <Linkedin size={22} />,
									},
									{
										href: 'mailto:deephalder122002@gmail.com',
										label: 'Email',
										icon: <Mail size={22} />,
									},
								]}
							/>

							<HeroTechPills
								items={[
									'Javascript',
									'TypeScript',
									'React',
									'Node.js',
									'PostgreSQL',
									'Microservices',
									'RabbitMq',
									'Docker',
								]}
							/>
						</div>
					</motion.div>
				</div>

				{/* Scroll hint */}
				<button
					onClick={scrollToAbout}
					aria-label='Scroll down'
					className='mx-auto mt-8 block text-gray-400 hover:text-white transition-colors'>
					<motion.div
						animate={{ y: [0, 6, 0] }}
						transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}>
						<ArrowDown size={28} />
					</motion.div>
				</button>
			</div>
		</section>
	);
}
