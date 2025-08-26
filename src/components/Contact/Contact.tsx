// src/sections/Contact.tsx
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
	Mail,
	Phone,
	MapPin,
	Linkedin,
	Github,
	Code,
	Trophy,
} from 'lucide-react';
import { useCallback } from 'react';

const socialLinks = [
	{
		name: 'LinkedIn',
		url: 'https://linkedin.com/in/deep-halder-2ba050289',
		icon: Linkedin,
	},
	{ name: 'GitHub', url: 'https://github.com/DipHldr', icon: Github },
	{
		name: 'LeetCode',
		url: 'https://leetcode.com/u/chalbazzcharlie',
		icon: Code,
	},
	{
		name: 'Codeforces',
		url: 'https://codeforces.com/profile/Charlie123',
		icon: Trophy,
	},
];

export default function Contact() {
	const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

	const handleSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		alert("Thank you for your message! I'll get back to you soon.");
	}, []);

	return (
		<section
			id='contact'
			className='relative py-20'>
			{/* Deep blue background + soft blobs */}
			<div className='pointer-events-none absolute inset-0 -z-10'>
				<div className='absolute inset-0 bg-gradient-to-b from-[#0b1020] via-[#0a1634] to-[#081022]' />
				<div className='absolute -top-28 -left-28 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl' />
				<div className='absolute -bottom-32 -right-24 h-96 w-96 rounded-full bg-indigo-500/10 blur-3xl' />
			</div>

			<div className='max-w-6xl mx-auto px-4'>
				{/* Header */}
				<motion.div
					ref={ref}
					initial={{ opacity: 0, y: 36 }}
					animate={inView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.7 }}
					className='text-center mb-12'>
					<h2 className='text-4xl md:text-5xl font-extrabold mb-4 inline-block bg-gradient-to-r from-sky-300 via-cyan-300 to-indigo-300 bg-clip-text text-transparent'>
						Get In Touch
					</h2>
					<p className='text-slate-300/90 max-w-2xl mx-auto'>
						Reach out for roles, collaborations, or just a quick chat about
						systems and products.
					</p>
					<div className='w-24 h-[3px] bg-gradient-to-r from-sky-400 via-cyan-400 to-indigo-400 mx-auto mt-6' />
				</motion.div>

				{/* Split layout (no 3D, neutral colors) */}
				<div className='grid lg:grid-cols-2 gap-10 items-start'>
					{/* Info rail */}
					<motion.aside
						initial={{ opacity: 0, x: -32 }}
						animate={inView ? { opacity: 1, x: 0 } : {}}
						transition={{ duration: 0.6, delay: 0.1 }}
						className='space-y-8'>
						<GlassCard>
							<h3 className='text-lg font-semibold text-white mb-5'>Contact</h3>
							<div className='space-y-5'>
								<InfoRow
									icon={<Mail className='w-5 h-5 text-white' />}
									label='Email'
									value={
										<a
											href='mailto:deephalder112002@gmail.com'
											className='text-sky-300 hover:text-sky-200 break-all'>
											deephalder112002@gmail.com
										</a>
									}
								/>
								<InfoRow
									icon={<Phone className='w-5 h-5 text-white' />}
									label='Phone'
									value={
										<a
											href='tel:+918101838006'
											className='text-emerald-300 hover:text-emerald-200'>
											+91-8101838006
										</a>
									}
								/>
								<InfoRow
									icon={<MapPin className='w-5 h-5 text-white' />}
									label='Location'
									value={
										<span className='text-slate-300'>
											Sonepat, Haryana, India
										</span>
									}
								/>
							</div>
						</GlassCard>

						<div>
							<h3 className='text-lg font-semibold text-white mb-4'>
								Find me on
							</h3>
							<div className='grid grid-cols-2 sm:grid-cols-4 gap-3'>
								{socialLinks.map((s) => (
									<a
										key={s.name}
										href={s.url}
										target='_blank'
										rel='noopener noreferrer'
										aria-label={s.name}
										className='group flex items-center gap-2 rounded-lg px-3 py-2 text-white bg-white/5 ring-1 ring-white/10 hover:bg-white/10 transition-colors'>
										<s.icon className='w-4 h-4 text-sky-300' />
										<span className='text-sm font-medium'>{s.name}</span>
									</a>
								))}
							</div>
						</div>
					</motion.aside>

					{/* Form */}
					<motion.div
						initial={{ opacity: 0, x: 32 }}
						animate={inView ? { opacity: 1, x: 0 } : {}}
						transition={{ duration: 0.6, delay: 0.15 }}>
						<GlassCard padding='p-6 sm:p-8'>
							<form
								onSubmit={handleSubmit}
								className='space-y-6'>
								<div className='grid md:grid-cols-2 gap-6'>
									<Field
										id='name'
										label='Name'>
										<input
											id='name'
											name='name'
											type='text'
											required
											placeholder='Your Name'
											className='w-full bg-slate-900/60 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:border-sky-400 focus:ring-1 focus:ring-sky-400 outline-none transition-colors'
										/>
									</Field>
									<Field
										id='email'
										label='Email'>
										<input
											id='email'
											name='email'
											type='email'
											required
											placeholder='your.email@example.com'
											className='w-full bg-slate-900/60 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:border-sky-400 focus:ring-1 focus:ring-sky-400 outline-none transition-colors'
										/>
									</Field>
								</div>

								<Field
									id='subject'
									label='Subject'>
									<input
										id='subject'
										name='subject'
										type='text'
										required
										placeholder="What's this about?"
										className='w-full bg-slate-900/60 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:border-sky-400 focus:ring-1 focus:ring-sky-400 outline-none transition-colors'
									/>
								</Field>

								<Field
									id='message'
									label='Message'>
									<textarea
										id='message'
										name='message'
										rows={6}
										required
										placeholder='Tell me about your project, ideas, or just say hello!'
										className='w-full bg-slate-900/60 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:border-sky-400 focus:ring-1 focus:ring-sky-400 outline-none transition-colors resize-none'
									/>
								</Field>

								<button
									type='submit'
									className='w-full rounded-lg py-4 px-6 font-semibold text-white bg-gradient-to-r from-sky-600 to-indigo-600 hover:from-sky-500 hover:to-indigo-500 transition-all duration-300 shadow-[0_18px_36px_-18px_rgba(14,165,233,0.55)]'>
									Send Message
								</button>

								<p className='text-xs text-slate-400 text-center'>
									Prefer email?{' '}
									<a
										href='mailto:deephalder112002@gmail.com'
										className='text-sky-300 hover:text-sky-200 underline underline-offset-2'>
										deephalder112002@gmail.com
									</a>
								</p>
							</form>
						</GlassCard>
					</motion.div>
				</div>
			</div>
		</section>
	);
}

/* Helpers */

function GlassCard({
	children,
	padding = 'p-6',
}: {
	children: React.ReactNode;
	padding?: string;
}) {
	return (
		<div className='relative rounded-2xl p-[1.2px] bg-gradient-to-br from-white/20 via-white/10 to-white/20'>
			<div
				className={`rounded-[calc(theme(borderRadius.2xl)-1.2px)] bg-white/5 backdrop-blur-md ring-1 ring-white/10 ${padding}`}>
				{children}
			</div>
		</div>
	);
}

function Field({
	id,
	label,
	children,
}: {
	id: string;
	label: string;
	children: React.ReactNode;
}) {
	return (
		<div>
			<label
				htmlFor={id}
				className='block text-sm font-medium text-slate-200 mb-2'>
				{label}
			</label>
			{children}
		</div>
	);
}

function InfoRow({
	icon,
	label,
	value,
}: {
	icon: React.ReactNode;
	label: string;
	value: React.ReactNode;
}) {
	return (
		<div className='flex items-center gap-4'>
			<div className='p-3 rounded-lg bg-white/10 ring-1 ring-white/10'>
				{icon}
			</div>
			<div>
				<p className='font-semibold text-white'>{label}</p>
				<div className='text-slate-300'>{value}</div>
			</div>
		</div>
	);
}
