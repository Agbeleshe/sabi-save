import React, { Suspense, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import PhoneModelScene from "./PhoneModelScene";

// Loading animation
const LoadingSpinner = () => (
  <div className="h-full flex flex-col items-center justify-center">
    <div className="w-12 h-12 border-4 border-[#FFBD59] border-t-transparent rounded-full animate-spin mb-4"></div>
    <p className="text-gray-600">Loading 3D Model...</p>
  </div>
);

// Error boundary component
class ErrorBoundary extends React.Component<
  { children: React.ReactNode; fallback: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode; fallback: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("Error in 3D component:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

const ThreeDmodal = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  return (
    <div className="h-[400px] lg:h-[450px] relative">
      {/* 3D model container */}
      <div className="absolute inset-0  pointer-events-none rounded-xl"></div>
      <ErrorBoundary
        fallback={
          <div className="h-full flex items-center justify-center">
            <div className="text-center p-8 bg-gray-50 rounded-lg shadow-md">
              <p className="text-xl font-medium text-gray-800 mb-2">
                Oops! Something went wrong
              </p>
              <p className="text-gray-600">
                We're unable to display the 3D model right now
              </p>
            </div>
          </div>
        }
      >
        <Suspense fallback={<LoadingSpinner />}>
          <Canvas
            ref={canvasRef}
            className="w-full h-full rounded-xl"
            shadows
            gl={{
              antialias: true,
              alpha: true,
              preserveDrawingBuffer: true,
            }}
            dpr={[1, 2]}
          >
            <PerspectiveCamera makeDefault position={[0, 0, 6]} fov={45} />
            <ambientLight intensity={0.8} />
            <spotLight
              position={[10, 10, 10]}
              angle={0.15}
              penumbra={1}
              intensity={1}
              castShadow
            />
            <directionalLight position={[-50, 20, -56]} intensity={0.6} />
            <PhoneModelScene />
            <hemisphereLight intensity={0.3} groundColor="#FFBD59" />
            <OrbitControls
              enableZoom={false}
              autoRotate={false}
              minPolarAngle={Math.PI / 2 - 0.5}
              maxPolarAngle={Math.PI / 2 + 0.5}
              enablePan={true}
            />
          </Canvas>
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};

export default ThreeDmodal;
