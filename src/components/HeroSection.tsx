import React, { Suspense, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import PhoneModelScene from "./PhoneModelScene";

// Styled button component
const Button: React.FC<
  {
    primary?: boolean;
    className?: string;
  } & React.ButtonHTMLAttributes<HTMLButtonElement>
> = ({ children, primary = true, className = "", ...props }) => {
  return (
    <button
      className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 
      ${
        primary
          ? "bg-[#FFBD59] text-black hover:bg-black hover:text-[#FFBD59]"
          : "bg-black text-white hover:bg-[#FFBD59] hover:text-black"
      } 
      ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

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

// Hero section component
export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  return (
    <section className="min-h-screen flex flex-col justify-center pt-24 pb-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-black mb-6">
              Seamless Savings for{" "}
              <span className="text-[#FFBD59]">Traders</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-800 max-w-lg">
              An online solution that provides seamless savings to traders,
              eliminating the risk of cash handling and guaranteeing access to
              micro-credit facilities.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button>Download App</Button>
              <Button primary={false}>Learn More</Button>
            </div>
          </div>

          {/* 3D model container */}
          <div className="h-[400px] lg:h-[600px] relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white to-[#FFBD59] opacity-10 pointer-events-none rounded-xl"></div>
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
                  <PerspectiveCamera
                    makeDefault
                    position={[0, 0, 6]}
                    fov={45}
                  />
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

            {/* Overlay text */}
            {/* <div className="absolute bottom-4 left-4 bg-black bg-opacity-70 text-white text-sm p-2 rounded">
              Move your cursor to interact with the model
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
