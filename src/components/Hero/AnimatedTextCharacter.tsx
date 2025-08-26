// src/components/Hero/AnimatedTextCharacter.tsx
import { motion } from 'framer-motion';

type AnimatedTextProps = {
	text: string;
	className?: string;
};

const sentenceVariants = {
	hidden: { opacity: 1 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.04,
		},
	},
};

const letterVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			type: 'spring',
			damping: 12,
			stiffness: 100,
		},
	},
};

export default function AnimatedTextCharacter({
	text,
	className,
}: AnimatedTextProps) {
	return (
		<motion.h1
			className={className}
			variants={sentenceVariants}
			initial='hidden'
			animate='visible'>
			{text.split('').map((char, index) => (
				<motion.span
					key={index}
					variants={letterVariants}>
					{char === ' ' ? '\u00A0' : char}
				</motion.span>
			))}
		</motion.h1>
	);
}
