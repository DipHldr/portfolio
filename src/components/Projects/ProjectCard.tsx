import { motion } from 'framer-motion';
import { useState, MouseEvent } from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
	title: string;
	description: string;
	longDescription: string;
	techStack: string[];
	githubUrl: string;
	liveUrl?: string;
	// Tailwind stops, e.g. "from-cyan-500 via-blue-500 to-indigo-600"
	gradient: string;
}

interface ProjectCardProps {
	project: Project;
	index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
	const [isFlipped, setIsFlipped] = useState(false);
	const [tilt, setTilt] = useState({ rx: 0, ry: 0 });

	const gradientStops =
		project.gradient?.trim() || 'from-cyan-500 via-blue-500 to-indigo-600';

	function handleMove(e: MouseEvent<HTMLDivElement>) {
		const el = e.currentTarget;
		const rect = el.getBoundingClientRect();
		const x = e.clientX - rect.left;
		const y = e.clientY - rect.top;
		const midX = rect.width / 2;
		const midY = rect.height / 2;
		const ry = ((x - midX) / midX) * 6; // left-right
		const rx = -((y - midY) / midY) * 6; // up-down
		setTilt({ rx, ry });
	}

	function resetTilt() {
		setTilt({ rx: 0, ry: 0 });
	}

	return (
		<motion.div
			initial={{ opacity: 0, y: 48 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.6, delay: index * 0.08 }}
			className='relative group h-[420px] sm:h-[440px] select-none'
			onMouseEnter={() => setIsFlipped(true)}
			onMouseLeave={() => {
				setIsFlipped(false);
				resetTilt();
			}}
			onMouseMove={handleMove}
			onClick={() => setIsFlipped((v) => !v)} // tap/keyboard friendly
			role='button'
			tabIndex={0}
			onKeyDown={(e) =>
				(e.key === 'Enter' || e.key === ' ') && setIsFlipped((v) => !v)
			}
			aria-pressed={isFlipped}>
			{/* Outer tilt wrapper */}
			<div
				className='h-full w-full perspective-[1400px]'
				style={{
					transform: isFlipped
						? undefined
						: `rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)`,
					transition: 'transform 200ms ease',
				}}>
				{/* Inner flipper */}
				<div
					className={`relative h-full w-full transition-transform duration-700 will-change-transform [transform-style:preserve-3d] ${
						isFlipped ? '[transform:rotateY(180deg)]' : ''
					}`}>
					{/* FRONT */}
					<div className='absolute inset-0 h-full w-full [backface-visibility:hidden] rounded-2xl outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60'>
						{/* Gradient border shell */}
						<div
							className={`relative h-full rounded-2xl p-[1px] bg-gradient-to-br ${gradientStops}`}>
							{/* Glass surface */}
							<div className='relative h-full rounded-[calc(theme(borderRadius.2xl)-1px)] p-6 flex flex-col justify-between overflow-hidden bg-slate-900/55 backdrop-blur-md ring-1 ring-white/10'>
								{/* Subtle shine sweep */}
								<div className='pointer-events-none absolute -top-1/2 left-0 h-[200%] w-1/2 bg-gradient-to-b from-white/15 to-transparent rotate-45 -translate-x-[150%] group-hover:translate-x-[250%] transition-transform duration-[1200ms] ease-out' />
								{/* Ambient blob */}
								<div className='pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-white/10 blur-3xl' />

								<div className='relative z-10'>
									<h3 className='text-2xl font-bold text-white tracking-tight'>
										{project.title}
									</h3>
									<p className='mt-3 text-white/90 leading-relaxed'>
										{project.description}
									</p>
								</div>

								<div className='relative z-10'>
									<div className='flex flex-wrap gap-2'>
										{project.techStack.slice(0, 3).map((tech) => (
											<span
												key={tech}
												className='rounded-full bg-white/15 text-white px-3 py-1 text-sm font-medium backdrop-blur-[1.5px] ring-1 ring-white/20'>
												{tech}
											</span>
										))}
										{project.techStack.length > 3 && (
											<span className='rounded-full bg-white/15 text-white px-3 py-1 text-sm font-medium backdrop-blur-[1.5px] ring-1 ring-white/20'>
												+{project.techStack.length - 3} more
											</span>
										)}
									</div>
								</div>

								<div className='absolute bottom-3 right-4 text-white/70 text-xs tracking-wide'>
									Hover or tap to flip
								</div>
							</div>
						</div>
					</div>

					{/* BACK */}
					<div className='absolute inset-0 h-full w-full rounded-2xl [backface-visibility:hidden] [transform:rotateY(180deg)]'>
						{/* Border shell with subtle gradient ring */}
						<div className='relative h-full rounded-2xl p-[1px] bg-gradient-to-br from-white/20 via-white/10 to-white/20'>
							<div className='h-full rounded-[calc(theme(borderRadius.2xl)-1px)] p-6 flex flex-col justify-between bg-slate-900/75 backdrop-blur-md ring-1 ring-white/10 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)]'>
								<div>
									<h3 className='text-xl font-bold text-white tracking-tight'>
										{project.title}
									</h3>

									<p className='mt-3 text-slate-200 leading-relaxed'>
										{project.longDescription}
									</p>

									<div className='mt-5'>
										<h4 className='text-xs font-semibold text-slate-300 uppercase tracking-wider'>
											Tech Stack
										</h4>
										<div className='mt-2 flex flex-wrap gap-2'>
											{project.techStack.map((tech) => (
												<span
													key={tech}
													className='rounded-md border border-cyan-400/25 bg-gradient-to-r from-cyan-500/10 to-fuchsia-500/10 text-cyan-200 px-2 py-1 text-sm'>
													{tech}
												</span>
											))}
										</div>
									</div>
								</div>

								<div className='flex gap-3'>
									<a
										href={project.githubUrl}
										target='_blank'
										rel='noopener noreferrer'
										className='inline-flex items-center gap-2 rounded-lg bg-white/5 px-4 py-2 text-slate-100 hover:bg-white/10 transition-colors ring-1 ring-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60'>
										<Github className='h-4 w-4' />
										Code
									</a>

									{project.liveUrl && (
										<a
											href={project.liveUrl}
											target='_blank'
											rel='noopener noreferrer'
											className='inline-flex items-center gap-2 rounded-lg px-4 py-2 text-white bg-gradient-to-r from-cyan-600 to-fuchsia-600 hover:from-cyan-500 hover:to-fuchsia-500 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60'>
											<ExternalLink className='h-4 w-4' />
											Live Demo
										</a>
									)}
								</div>
							</div>
						</div>
					</div>
					{/* END BACK */}
				</div>
			</div>
		</motion.div>
	);
}
