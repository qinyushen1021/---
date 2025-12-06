/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Box, Line, Environment, Grid } from '@react-three/drei';
import * as THREE from 'three';

const ConstructionBlock = ({ position, color, scale = 1 }: { position: [number, number, number]; color: string; scale?: [number, number, number] | number }) => {
  const ref = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (ref.current) {
      const t = state.clock.getElapsedTime();
      ref.current.position.y = position[1] + Math.sin(t + position[0]) * 0.1;
    }
  });

  return (
    <Box ref={ref} args={[1, 1, 1]} position={position} scale={scale}>
      {/* @ts-ignore */}
      <meshStandardMaterial
        color={color}
        roughness={0.2}
        metalness={0.8}
        transparent
        opacity={0.9}
      />
      <Line points={[[-0.5, -0.5, -0.5], [0.5, 0.5, 0.5]]} color="white" transparent opacity={0.2} />
    </Box>
  );
};

export const HeroScene: React.FC = () => {
  return (
    <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
      <Canvas camera={{ position: [5, 5, 5], fov: 40 }}>
        {/* @ts-ignore */}
        <ambientLight intensity={0.5} />
        {/* @ts-ignore */}
        <pointLight position={[10, 10, 10]} intensity={1} />
        <Float speed={1} rotationIntensity={0.2} floatIntensity={0.5}>
          {/* Abstract Structural Nodes representing Dougong brackets */}
          <ConstructionBlock position={[0, 0, 0]} color="#C5A059" scale={[1, 3, 1]} />
          <ConstructionBlock position={[-1.5, -0.5, 0.5]} color="#2B4C7E" scale={[2, 0.5, 0.5]} />
          <ConstructionBlock position={[1.5, 0.5, -0.5]} color="#2B4C7E" scale={[2, 0.5, 0.5]} />
          
          <ConstructionBlock position={[-2, 2, -2]} color="#C5A059" scale={0.5} />
          <ConstructionBlock position={[2, -2, 2]} color="#1a1a1a" scale={0.5} />
        </Float>
        
        <Grid infiniteGrid sectionColor="#C5A059" cellColor="#e5e5e5" fadeDistance={20} position={[0, -2, 0]} />
        <Environment preset="city" />
      </Canvas>
    </div>
  );
};

export const StructureScene: React.FC = () => {
  return (
    <div className="w-full h-full absolute inset-0">
      <Canvas camera={{ position: [4, 4, 4], fov: 45 }}>
        {/* @ts-ignore */}
        <ambientLight intensity={1} />
        {/* @ts-ignore */}
        <spotLight position={[5, 10, 5]} angle={0.5} penumbra={1} intensity={2} color="#C5A059" />
        <Environment preset="apartment" />
        
        <Float rotationIntensity={0.2} floatIntensity={0.2} speed={1}>
          {/* @ts-ignore */}
          <group rotation={[0, Math.PI / 4, 0]}>
            {/* Abstract Building Structure */}
            <Box args={[1, 3, 1]} position={[0, 0, 0]}>
                {/* @ts-ignore */}
                <meshStandardMaterial color="#F9F8F4" transparent opacity={0.8} />
                <Line points={[[-0.5, -1.5, -0.5], [-0.5, 1.5, -0.5]]} color="#C5A059" />
                <Line points={[[0.5, -1.5, 0.5], [0.5, 1.5, 0.5]]} color="#C5A059" />
            </Box>
            
            {/* Data connection lines */}
            <Line points={[[-2, -1, 0], [0, 0, 0]]} color="#2B4C7E" lineWidth={2} />
            <Line points={[[2, 1, 0], [0, 0, 0]]} color="#2B4C7E" lineWidth={2} />
            
            {/* Satellite nodes */}
            <Box args={[0.5, 0.5, 0.5]} position={[-2, -1, 0]}>
                {/* @ts-ignore */}
                <meshStandardMaterial color="#2B4C7E" />
            </Box>
             <Box args={[0.5, 0.5, 0.5]} position={[2, 1, 0]}>
                {/* @ts-ignore */}
                <meshStandardMaterial color="#C5A059" />
            </Box>
          {/* @ts-ignore */}
          </group>
        </Float>
      </Canvas>
    </div>
  );
}