import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Earth = () => {
  const earth = useGLTF("./earth3/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={0.55} />
      <pointLight intensity={1} />
      <primitive object={earth.scene} scale={2} />
    </mesh>
  );
};

const EarthCanvas = () => {
  return (
    <Canvas shadows gl={{ preserveDrawingBuffer: true }} frameloop="demand">
      <ambientLight intensity={0.3} />
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default EarthCanvas;
