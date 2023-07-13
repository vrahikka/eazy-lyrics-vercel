/* eslint-disable react/no-unknown-property */ // TODO FIX LINTING ISSUES
import { useEffect, useMemo, useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh, ShaderMaterial } from 'three';
import fragmentShader from './fragmentShader';
import vertexShader from './vertexShader';

const FullScreenMesh = () => {
  const mesh = useRef<Mesh>(null);
  const [[width, height], setSize] = useState([0, 0]);

  const uniforms = useMemo(
    () => ({
      u_time: {
        value: 0.0,
      },
    }),
    []
  );

  useEffect(() => {
    const resize = () => {
      setSize([window.innerWidth ?? 0, window.innerHeight ?? 0]);
    };
    resize();

    window.addEventListener('resize', resize);

    return () => {
      window.removeEventListener('resize', resize);
    };
  }, []);

  useFrame((state) => {
    const { clock } = state;
    if (mesh?.current?.material) {
      (mesh.current.material as ShaderMaterial).uniforms.u_time.value =
        clock.getElapsedTime();
    }
  });

  return (
    <mesh ref={mesh}>
      <planeGeometry args={[width, height]} />
      <shaderMaterial
        fragmentShader={fragmentShader}
        vertexShader={vertexShader}
        uniforms={uniforms}
      />
    </mesh>
  );
};

export default FullScreenMesh;
