import { ReactNode } from 'react';
type Link = { href: string; label: string; icon: ReactNode };

export default function HeroSocial({ links }: { links: Link[] }) {
	return (
		<div className='mt-5 flex justify-center gap-5 text-gray-400'>
			{links.map((l, i) => (
				<a
					key={i}
					href={l.href}
					target="_blank"
					aria-label={l.label}
					className='hover:text-cyan-300 transition-colors'>
					{l.icon}
				</a>
			))}
		</div>
	);
}
