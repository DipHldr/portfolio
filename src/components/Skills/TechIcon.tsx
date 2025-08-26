import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Box, Sphere } from '@react-three/drei';
import * as THREE from 'three';

interface TechIconProps {
  name: string;
  color: string;
  type?: 'box' | 'sphere';
}

function Rotating3DShape({ color, type = 'box' }: { color: string; type?: 'box' | 'sphere' }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.3;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.4;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 2) * 0.1;
    }
  });

  if (type === 'sphere') {
    return (
      <Sphere ref={meshRef} args={[0.7, 32, 32]}>
        <meshStandardMaterial color={color} wireframe />
      </Sphere>
    );
  }

  return (
    <Box ref={meshRef} args={[1, 1, 1]}>
      <meshStandardMaterial color={color} wireframe />
    </Box>
  );
}

export default function TechIcon({ name, color, type }: TechIconProps) {
  return (
    <div className="group cursor-pointer">
      <div className="w-20 h-20 mx-auto mb-3">
        <Canvas camera={{ position: [0, 0, 3], fov: 45 }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <Rotating3DShape color={color} type={type} />
        </Canvas>
      </div>
      <p className="text-sm font-medium text-gray-400 group-hover:text-white transition-colors text-center">
        {name}
      </p>
    </div>
  );
}