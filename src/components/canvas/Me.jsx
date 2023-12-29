import { Suspense } from "react";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Me = () => {
  const computer = useGLTF("./avatar.glb");
  return (
    <mesh>
      <hemisphereLight intensity={0.35} groundColor="black" />
      <pointLight intensity={1} />
      <primitive object={computer.scene} scale={3.6} position={[0, -4, 0]} />
    </mesh>
  );
};

const MeCanvas = () => {
  return (
    <Canvas
      shadows
      gl={{ preserveDrawingBuffer: true }}
      frameloop="demand"
      style={{ position: "relative", bottom: 0 }}
    >
      <ambientLight intensity={1.1} />
      <Suspense fallback={<CanvasLoader />}>
        <Me />
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 3}
          minPolarAngle={Math.PI / 3}
        />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default MeCanvas;
