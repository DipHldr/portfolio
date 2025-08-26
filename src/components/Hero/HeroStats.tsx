import { ReactNode } from 'react';
type Stat = { icon: ReactNode; label: string; value: string };

export default function HeroStats({ items }: { items: Stat[] }) {
	return (
		<div className='mt-4 flex flex-wrap gap-3 justify-center'>
			{items.map((s, i) => (
				<div
					key={i}
					className='inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-gray-200'>
					<span className='opacity-80'>{s.icon}</span>
					<span className='font-semibold'>{s.value}</span>
					<span className='text-gray-400'>{s.label}</span>
				</div>
			))}
		</div>
	);
}
