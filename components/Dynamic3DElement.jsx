import React, { useRef, useMemo, useEffect, useCallback } from 'react';
import { Canvas, extend, useFrame } from '@react-three/fiber';
import { shaderMaterial, Instance, Instances } from '@react-three/drei';
import * as THREE from 'three';

import vertexShader from './NoiseVertexShader.glsl';
import fragmentShader from './NoiseFragmentShader.glsl';

// Define the ShaderMaterial
const NoiseMaterial = shaderMaterial(
  {
    u_time: 0,
    u_mouse: new THREE.Vector2(0.5, 0.5),
    u_scroll: 0,
  },
  vertexShader,
  fragmentShader
);

extend({ NoiseMaterial });

function Particles({ count = 10000 }) {
  const meshRef = useRef();
  const materialRef = useRef();

  const dummy = useMemo(() => new THREE.Object3D(), []);

  // Set up initial positions for instances
  const positions = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * 10;
      const y = (Math.random() - 0.5) * 10;
      const z = (Math.random() - 0.5) * 10;
      temp.push(new THREE.Vector3(x, y, z));
    }
    return temp;
  }, [count]);

  useFrame((state) => {
    const { clock, mouse } = state;
    if (materialRef.current) {
      materialRef.current.uniforms.u_time.value = clock.getElapsedTime();
      materialRef.current.uniforms.u_mouse.value.set(mouse.x * 0.5 + 0.5, mouse.y * 0.5 + 0.5);
    }

    // Update instance positions based on noise (simplified for instancing)
    // For a more complex noise field affecting each particle, you'd need to pass
    // per-instance attributes or calculate noise in the vertex shader for each instance.
    // Here, we'll just rotate them slightly for dynamic movement.
    positions.forEach((pos, i) => {
      dummy.position.copy(pos);
      dummy.rotation.y = clock.getElapsedTime() * 0.1 + i * 0.01;
      dummy.rotation.x = clock.getElapsedTime() * 0.05 + i * 0.005;
      dummy.updateMatrix();
      meshRef.current.setMatrixAt(i, dummy.matrix);
    });
    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <Instances ref={meshRef} limit={count}>
      <sphereGeometry args={[0.05, 8, 8]} />
      <noiseMaterial ref={materialRef} side={THREE.DoubleSide} transparent />
    </Instances>
  );
}

export default function Dynamic3DElement() {
  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY;
    // You might want to normalize this value based on your page height
    // and pass it as a uniform to the shader if needed.
    // For now, we'll just log it or use it as a simple trigger.
    // console.log('Scroll Y:', scrollY);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <div style={{ position: 'absolute', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: -1 }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Particles />
      </Canvas>
    </div>
  );
}
