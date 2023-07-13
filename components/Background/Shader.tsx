'use client';

import { useRef } from 'react';
import { isClient } from '@/src/utils';
import { Canvas } from '@react-three/fiber';
import FullScreenMesh from './FullScreenMesh';

function Background() {
  const ref = useRef(null);
  let pixelRation = 1;
  if (isClient() && window) {
    pixelRation = window.devicePixelRatio;
  }

  return (
    <div className="w-full h-full object-cover fixed top-0 left-0 z-[-1]">
      <div id="canvas-container" className="w-screen h-screen" ref={ref}>
        <Canvas
          orthographic
          dpr={pixelRation}
          camera={{ zoom: 1, position: [0, 0, 1] }}
        >
          <FullScreenMesh />
        </Canvas>
      </div>
    </div>
  );
}
export default Background;
