import { Suspense } from "react";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, Stage } from "@react-three/drei";

import CanvasLoader from "../Loader";

import Desk from "./Desk";

const ComputersChairCanvas = () => {
  return (
    <Canvas
      shadows
      gl={{ preserveDrawingBuffer: true }}
      frameloop="demand"
      style={{ position: "relative", bottom: 0 }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <Stage environment="city" intensity={0.5}>
          <Desk />
        </Stage>
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

export default ComputersChairCanvas;
