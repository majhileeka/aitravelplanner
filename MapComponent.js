import React, { useRef, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

const MapComponent = () => {
  return (
    <Canvas>
      <ambientLight />
      <directionalLight position={[10, 10, 10]} />
      <OrbitControls />
      {/* 3D model of the Earth or Map */}
      <mesh>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial color="blue" />
      </mesh>
    </Canvas>
  );
};

export default MapComponent;
