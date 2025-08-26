export default function HeroTechPills({ items }: { items: string[] }) {
	if (!items?.length) return null;
	return (
		<div className='mt-6 flex flex-wrap gap-2 justify-center'>
			{items.map((t, i) => (
				<span
					key={i}
					className='rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-gray-300'>
					{t}
				</span>
			))}
		</div>
	);
}
