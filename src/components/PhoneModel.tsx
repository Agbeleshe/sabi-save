import { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import { Mesh, Vector3 } from "three";

// Since we don't have the actual model, we'll create a simple phone
function PhoneModel({
  position = [0, 0, 0],
}: {
  position?: [number, number, number];
}) {
  const phoneRef = useRef<Mesh>(null);
  const { mouse } = useThree();

  // Use mouse position to rotate the phone slightly
  useFrame(() => {
    if (!phoneRef.current) return;

    // Calculate target rotation based on mouse position
    const targetRotationY = (mouse.x * Math.PI) / 10;
    const targetRotationX = (mouse.y * Math.PI) / 10;

    // Smoothly rotate to target position
    phoneRef.current.rotation.y +=
      (targetRotationY - phoneRef.current.rotation.y) * 0.1;
    phoneRef.current.rotation.x +=
      (targetRotationX - phoneRef.current.rotation.x) * 0.1;

    // Add slight floating animation
    const time = Date.now() * 0.001;
    phoneRef.current.position.y = Math.sin(time) * 0.1;
  });

  return (
    <group position={new Vector3(...position)}>
      {/* Hand */}
      <mesh position={[0, -1.2, 0]} rotation={[0.5, 0, 0]}>
        <sphereGeometry args={[0.3, 16, 16]} />
        <meshStandardMaterial color="#f0d0b5" />
      </mesh>

      {/* Wrist/Arm */}
      <mesh position={[0, -1.6, 0.3]} rotation={[0.5, 0, 0]}>
        <cylinderGeometry args={[0.2, 0.25, 0.8, 16]} />
        <meshStandardMaterial color="#f0d0b5" />
      </mesh>

      {/* Phone */}
      <mesh ref={phoneRef} position={[0, 0, 0]}>
        {/* Phone Body */}
        <boxGeometry args={[1.2, 2.4, 0.1]} />
        <meshStandardMaterial color="black" />

        {/* Phone Screen */}
        <mesh position={[0, 0, 0.06]}>
          <boxGeometry args={[1.1, 2.3, 0.01]} />
          <meshStandardMaterial color="#333" />

          {/* App Interface */}
          <Html
            transform
            distanceFactor={0.15}
            position={[0, 0, 0.1]}
            rotation={[0, 0, 0]}
            scale={[0.1, 0.1, 0.1]}
          >
            <div className="w-[300px] h-[600px] bg-light overflow-hidden rounded-lg">
              <div className="bg-primary p-4 text-center">
                <h3 className="text-dark font-bold">SabiSave</h3>
              </div>
              <div className="p-4">
                <div className="mb-4 bg-gray-100 p-3 rounded-lg">
                  <div className="text-sm font-bold">Current Balance</div>
                  <div className="text-xl font-bold">₦120,500.00</div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-gray-100 p-3 rounded-lg text-center">
                    <div className="text-xs">Deposit</div>
                  </div>
                  <div className="bg-gray-100 p-3 rounded-lg text-center">
                    <div className="text-xs">Withdraw</div>
                  </div>
                  <div className="bg-gray-100 p-3 rounded-lg text-center">
                    <div className="text-xs">History</div>
                  </div>
                  <div className="bg-gray-100 p-3 rounded-lg text-center">
                    <div className="text-xs">Settings</div>
                  </div>
                </div>
              </div>
            </div>
          </Html>
        </mesh>
      </mesh>
    </group>
  );
}

export default PhoneModel;
