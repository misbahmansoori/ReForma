import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, useGLTF, Html } from "@react-three/drei";

const Model = ({ modelPath }) => {
  const { scene } = useGLTF(modelPath);
  return <primitive object={scene} scale={1.5} />;
};

const Product3DViewer = ({ modelPath }) => {
  return (
    <div style={{ height: "400px", borderRadius: "10px", background: "#f5f5f5" }}>
      <Canvas>
        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 5, 5]} />
        <Suspense fallback={<Html>Loading model...</Html>}>
          <Model modelPath={modelPath} />
          <Environment preset="sunset" />
        </Suspense>
        <OrbitControls enableZoom />
      </Canvas>
    </div>
  );
};

export default Product3DViewer;
