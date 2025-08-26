// src/components/About/SkillIcon.tsx
import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { Text, RoundedBox, Line } from '@react-three/drei';

// Shared float + spin wrapper
function FloatSpin({ children }: { children: React.ReactNode }) {
	const ref = useRef<THREE.Group>(null!);
	useFrame(({ clock }) => {
		const t = clock.elapsedTime;
		if (!ref.current) return;
		ref.current.rotation.y = t * 0.8;
		ref.current.position.y = Math.sin(t * 1.6) * 0.06;
	});
	return <group ref={ref}>{children}</group>;
}

/* =============== Procedural “logo marks” =============== */

// React: three elliptical rings (atom) made from EllipseCurve points rendered with drei/Line
// Tip: building the rings from curve points is a simple way to draw clean ellipses in R3F. [1]
function ReactMark() {
	const ellipsePoints = (rx: number, ry: number, segments = 100) => {
		const curve = new THREE.EllipseCurve(
			0,
			0,
			rx,
			ry,
			0,
			Math.PI * 2,
			false,
			0
		);
		return curve.getPoints(segments).map((p) => new THREE.Vector3(p.x, p.y, 0));
	};
	const rings = [
		{ rot: [0, 0, 0], color: '#61DAFB' },
		{ rot: [0, 0, Math.PI / 3], color: '#61DAFB' },
		{ rot: [0, 0, -Math.PI / 3], color: '#61DAFB' },
	];
	return (
		<group scale={0.9}>
			{rings.map((r, i) => (
				<group
					rotation={r.rot as any}
					key={i}>
					<Line
						points={ellipsePoints(0.9, 0.45)}
						color={r.color}
						lineWidth={2}
					/>
				</group>
			))}
			<mesh>
				<sphereGeometry args={[0.08, 24, 24]} />
				<meshStandardMaterial color='#61DAFB' />
			</mesh>
		</group>
	);
}

// Next.js: a clean “N” with a diagonal slash
function NextMark() {
	return (
		<group scale={0.9}>
			<Text
				fontSize={0.5}
				color='#ffffff'
				anchorX='center'
				anchorY='middle'>
				N
			</Text>
			<mesh
				position={[0.08, 0, 0.02]}
				rotation={[0, 0, -Math.PI / 6]}>
				<boxGeometry args={[0.6, 0.04, 0.04]} />
				<meshStandardMaterial color='#ffffff' />
			</mesh>
		</group>
	);
}

// TypeScript: blue rounded plate + white “TS”
function TSMark() {
	return (
		<group>
			<RoundedBox
				args={[1.1, 0.8, 0.08]}
				radius={0.12}
				smoothness={4}>
				<meshStandardMaterial color='#3178C6' />
			</RoundedBox>
			<Text
				position={[0, 0, 0.06]}
				fontSize={0.35}
				color='#ffffff'
				anchorX='center'
				anchorY='middle'>
				TS
			</Text>
		</group>
	);
}

// Node.js: hexagon plate + small “n” cue
function NodeMark() {
	const hexShape = useMemo(() => {
		const s = new THREE.Shape();
		const R = 0.55;
		for (let i = 0; i < 6; i++) {
			const a = (i / 6) * Math.PI * 2 + Math.PI / 6;
			const x = R * Math.cos(a);
			const y = R * Math.sin(a);
			i === 0 ? s.moveTo(x, y) : s.lineTo(x, y);
		}
		s.closePath();
		return s;
	}, []);
	const geo = useMemo(
		() =>
			new THREE.ExtrudeGeometry(hexShape, {
				depth: 0.08,
				bevelEnabled: true,
				bevelSegments: 2,
				bevelSize: 0.02,
				bevelThickness: 0.02,
			}),
		[hexShape]
	);
	return (
		<group>
			<mesh geometry={geo}>
				<meshStandardMaterial color='#68A063' />
			</mesh>
			<Text
				position={[0, -0.02, 0.06]}
				fontSize={0.35}
				color='#0b0b0b'
				anchorX='center'
				anchorY='middle'>
				n
			</Text>
		</group>
	);
}

// Python: two interlocking torus knots (blue/yellow), simple abstract reference
function PythonMark() {
	return (
		<group scale={0.8}>
			<mesh position={[-0.18, 0, 0]}>
				<torusKnotGeometry args={[0.22, 0.06, 80, 12]} />
				<meshStandardMaterial color='#3776AB' />
			</mesh>
			<mesh
				position={[0.18, 0, 0]}
				rotation={[0, Math.PI / 2, 0]}>
				<torusKnotGeometry args={[0.22, 0.06, 80, 12]} />
				<meshStandardMaterial color='#FFD43B' />
			</mesh>
		</group>
	);
}

// C++: blue plate + “C++”
function CppMark() {
	return (
		<group>
			<RoundedBox
				args={[1.1, 0.8, 0.08]}
				radius={0.12}
				smoothness={4}>
				<meshStandardMaterial color='#00599C' />
			</RoundedBox>
			<Text
				position={[0, 0, 0.06]}
				fontSize={0.35}
				color='#ffffff'
				anchorX='center'
				anchorY='middle'>
				C++
			</Text>
		</group>
	);
}

// MongoDB: lathe a simple leaf profile (axially symmetric), then color green
// LatheGeometry is perfect for leaf/vase-like silhouettes from Vector2 profiles. [9]
function MongoLeaf() {
	const geom = useMemo(() => {
		const pts: THREE.Vector2[] = [];
		// Simple leaf profile (right side), x>0
		pts.push(new THREE.Vector2(0.0, -0.6));
		pts.push(new THREE.Vector2(0.15, -0.45));
		pts.push(new THREE.Vector2(0.25, -0.2));
		pts.push(new THREE.Vector2(0.28, 0.0));
		pts.push(new THREE.Vector2(0.22, 0.25));
		pts.push(new THREE.Vector2(0.12, 0.45));
		pts.push(new THREE.Vector2(0.02, 0.6));
		return new THREE.LatheGeometry(pts, 48);
	}, []);
	return (
		<mesh
			geometry={geom}
			rotation={[0, 0, Math.PI]}
			scale={[1, 1.2, 0.6]}>
			<meshStandardMaterial color='#47A248' />
		</mesh>
	);
}

// Docker: three container cubes stacked above a base “barge”
function DockerMark() {
	return (
		<group>
			{/* base */}
			<mesh position={[0, -0.35, 0]}>
				<boxGeometry args={[1.2, 0.2, 0.2]} />
				<meshStandardMaterial color='#1B4A77' />
			</mesh>
			{/* stacks */}
			<mesh position={[-0.35, 0, 0]}>
				<boxGeometry args={[0.25, 0.25, 0.25]} />
				<meshStandardMaterial color='#2496ED' />
			</mesh>
			<mesh position={[0, 0, 0]}>
				<boxGeometry args={[0.25, 0.25, 0.25]} />
				<meshStandardMaterial color='#2496ED' />
			</mesh>
			<mesh position={[0.35, 0, 0]}>
				<boxGeometry args={[0.25, 0.25, 0.25]} />
				<meshStandardMaterial color='#2496ED' />
			</mesh>
			<mesh position={[-0.175, 0.3, 0]}>
				<boxGeometry args={[0.25, 0.25, 0.25]} />
				<meshStandardMaterial color='#2496ED' />
			</mesh>
			<mesh position={[0.175, 0.3, 0]}>
				<boxGeometry args={[0.25, 0.25, 0.25]} />
				<meshStandardMaterial color='#2496ED' />
			</mesh>
		</group>
	);
}

/* =============== Resolver =============== */

function MarkFor({ name }: { name: string }) {
	switch (name) {
		case 'React':
			return <ReactMark />;
		case 'Next.js':
			return <NextMark />;
		case 'TypeScript':
			return <TSMark />;
		case 'Node.js':
			return <NodeMark />;
		case 'Python':
			return <PythonMark />;
		case 'C++':
			return <CppMark />;
		case 'MongoDB':
			return <MongoLeaf />;
		case 'Docker':
			return <DockerMark />;
		default:
			return <TSMark />;
	}
}

/* =============== Public component =============== */

export default function SkillIcon({ name }: { name: string }) {
	return (
		<div className='w-24 h-24 cursor-pointer group'>
			<Canvas
				dpr={[1, 1.5]}
				gl={{ antialias: true, alpha: true, powerPreference: 'low-power' }}
				camera={{ position: [0, 0, 2.2], fov: 40 }}>
				<ambientLight intensity={0.7} />
				<directionalLight
					position={[2, 3, 4]}
					intensity={0.9}
				/>
				<FloatSpin>
					<MarkFor name={name} />
				</FloatSpin>
			</Canvas>
			<p className='text-xs text-center text-gray-400 mt-2 group-hover:text-white transition-colors'>
				{name}
			</p>
		</div>
	);
}
