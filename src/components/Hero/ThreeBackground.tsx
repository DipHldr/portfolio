// src/components/Hero/ThreeBackground.tsx
import { useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import * as THREE from 'three';

function generateRandomPoints(count: number, radius: number): Float32Array {
	const points = new Float32Array(count * 3);
	for (let i = 0; i < count; i++) {
		const r = radius * Math.cbrt(Math.random());
		const theta = Math.random() * 2 * Math.PI;
		const phi = Math.acos(2 * Math.random() - 1);
		points[i * 3] = r * Math.sin(phi) * Math.cos(theta);
		points[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
		points[i * 3 + 2] = r * Math.cos(phi);
	}
	return points;
}

function Starfield() {
	const ref = useRef<THREE.Points>(null!);
	const positions = useMemo(() => generateRandomPoints(2500, 1.6), []);

	useFrame((_, delta) => {
		ref.current.rotation.x -= delta / 32;
		ref.current.rotation.y -= delta / 44;
	});

	return (
		<group rotation={[0, 0, Math.PI / 4]}>
			<Points
				ref={ref}
				positions={positions}
				stride={3}
				frustumCulled={false}>
				<PointMaterial
					transparent
					color={[1.4, 1.5, 1.7] as unknown as THREE.ColorRepresentation}
					size={0.0045}
					sizeAttenuation
					depthWrite={false}
					toneMapped={false}
				/>
			</Points>
		</group>
	);
}

export default function ThreeBackground() {
	return (
		<div className='absolute inset-0 z-0 pointer-events-none'>
			<Canvas
				dpr={[1, 2]}
				camera={{ position: [0, 0, 1], fov: 50 }}
				gl={{
					antialias: true,
					alpha: true,
					powerPreference: 'high-performance',
				}}
				onCreated={({ gl }) => {
					gl.setClearColor(0x000000, 0); // fully transparent
				}}>
				<Starfield />
				<EffectComposer
					disableNormalPass
					multisampling={0}
					frameBufferType={THREE.HalfFloatType}>
					<Bloom
						intensity={0.45}
						luminanceThreshold={0.8}
						luminanceSmoothing={0.02}
						mipmapBlur
					/>
				</EffectComposer>
			</Canvas>
		</div>
	);
}
