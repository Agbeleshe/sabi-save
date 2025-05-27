import { useRef, useState, useEffect } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

interface HandWithPhoneProps {
  position?: [number, number, number];
  imageUrl?: string;
  phoneScale?: number;
}

function HandWithPhone({
  position = [0, 0, 0],
  imageUrl = "/api/placeholder/320/640",
  phoneScale = 1.5,
}: HandWithPhoneProps) {
  const handRef = useRef<THREE.Group>(null);
  const phoneRef = useRef<THREE.Group>(null);
  const { mouse, viewport } = useThree();
  const [screenMaterial, setScreenMaterial] = useState<THREE.MeshBasicMaterial>(
    new THREE.MeshBasicMaterial({ color: "#f5f5f5" })
  );

  const phoneMaterial = new THREE.MeshStandardMaterial({
    color: new THREE.Color("#000000"),
    metalness: 0.7,
    roughness: 0.2,
  });

  const phoneWidth = 1.2 * phoneScale;
  const phoneHeight = 2.5 * phoneScale;
  const phoneDepth = 0.1 * phoneScale;
  const screenWidth = 1.1 * phoneScale;
  const screenHeight = 2.4 * phoneScale;

  useEffect(() => {
    const textureLoader = new THREE.TextureLoader();
    const canvas = document.createElement("canvas");
    canvas.width = 960;
    canvas.height = 1920;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = "high";

    const scale = 3;

    const renderCrispText = (
      text: string,
      x: number,
      y: number,
      fontSize: number,
      fontWeight: string = "",
      color: string = "#000"
    ) => {
      ctx.fillStyle = color;
      ctx.font = `${fontWeight} ${
        fontSize * scale
      }px -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif`;
      ctx.textBaseline = "middle";
      ctx.fillText(text, x * scale, y * scale);
    };

    const roundRect = (
      x: number,
      y: number,
      w: number,
      h: number,
      r: number
    ) => {
      if (w < 2 * r) r = w / 2;
      if (h < 2 * r) r = h / 2;
      ctx.beginPath();
      ctx.moveTo(x + r, y);
      ctx.arcTo(x + w, y, x + w, y + h, r);
      ctx.arcTo(x + w, y + h, x, y + h, r);
      ctx.arcTo(x, y + h, x, y, r);
      ctx.arcTo(x, y, x + w, y, r);
      ctx.closePath();
    };

    // Background
    ctx.fillStyle = "#f8f9fa";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Status bar
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, 40 * scale);
    renderCrispText("10:30", 15, 25, 14, "600", "#000");
    renderCrispText("•••", 250, 25, 14, "", "#000");
    renderCrispText("📶", 270, 25, 14);
    renderCrispText("🔋", 290, 25, 14);

    // Header section
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 40 * scale, canvas.width, 80 * scale);

    // Profile icon - blue circle
    ctx.fillStyle = "#020640";
    ctx.beginPath();
    ctx.arc(30 * scale, 80 * scale, 15 * scale, 0, Math.PI * 2);
    ctx.fill();

    // Profile icon symbol
    renderCrispText("💳", 23, 80, 12, "", "#fff");

    renderCrispText("Welcome, Lucy", 60, 80, 16, "600", "#000");
    renderCrispText("🔔", 280, 80, 16, "", "#6b7280");

    // Main balance card - blue background
    ctx.fillStyle = "#020640";
    roundRect(
      20 * scale,
      140 * scale,
      canvas.width - 40 * scale,
      80 * scale,
      12 * scale
    );
    ctx.fill();

    renderCrispText("Total Savings", 35, 165, 12, "", "#a5b4fc");
    renderCrispText("₦100,000.00", 35, 190, 24, "700", "#ffffff");
    renderCrispText("👁", 280, 190, 16, "", "#a5b4fc");

    // Quick Links section
    renderCrispText("Quick Links:", 20, 250, 14, "600", "#000");

    // Save more button
    ctx.fillStyle = "#f8f9fa";
    roundRect(
      20 * scale,
      270 * scale,
      canvas.width - 40 * scale,
      50 * scale,
      8 * scale
    );
    ctx.fill();

    // Blue circle for save icon
    ctx.fillStyle = "#020640";
    ctx.beginPath();
    ctx.arc(45 * scale, 295 * scale, 15 * scale, 0, Math.PI * 2);
    ctx.fill();
    renderCrispText("💰", 38, 295, 12, "", "#fff");

    renderCrispText("Save more", 75, 295, 14, "", "#000");
    renderCrispText("›", 285, 295, 16, "", "#9ca3af");

    // Withdraw button
    ctx.fillStyle = "#f8f9fa";
    roundRect(
      20 * scale,
      330 * scale,
      canvas.width - 40 * scale,
      50 * scale,
      8 * scale
    );
    ctx.fill();

    // Blue circle for withdraw icon
    ctx.fillStyle = "#020640";
    ctx.beginPath();
    ctx.arc(45 * scale, 355 * scale, 15 * scale, 0, Math.PI * 2);
    ctx.fill();
    renderCrispText("💳", 38, 355, 12, "", "#fff");

    renderCrispText("Withdraw", 75, 355, 14, "", "#000");
    renderCrispText("›", 285, 355, 16, "", "#9ca3af");

    // Account details section
    renderCrispText("Account number", 20, 410, 12, "", "#6b7280");
    renderCrispText("8024301860", 20, 430, 14, "600", "#000");

    renderCrispText("Account name", 20, 465, 12, "", "#6b7280");
    renderCrispText("Lucy Raymond", 20, 485, 14, "600", "#000");

    // Copy details button
    ctx.fillStyle = "#f1f5f9";
    roundRect(
      20 * scale,
      510 * scale,
      canvas.width - 40 * scale,
      40 * scale,
      8 * scale
    );
    ctx.fill();
    ctx.strokeStyle = "#e2e8f0";
    ctx.lineWidth = 1;
    ctx.stroke();

    renderCrispText("📋", 140, 530, 14, "", "#020640");
    renderCrispText("Copy details", 160, 530, 14, "", "#020640");

    // Bottom navigation
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 580 * scale, canvas.width, 60 * scale);

    // Navigation border
    ctx.strokeStyle = "#e5e7eb";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(0, 580 * scale);
    ctx.lineTo(canvas.width, 580 * scale);
    ctx.stroke();

    // Home (active)
    renderCrispText("🏠", 55, 600, 18, "", "#020640");
    renderCrispText("Home", 47, 620, 10, "500", "#020640");

    // History
    renderCrispText("📜", 160, 600, 18, "", "#9ca3af");
    renderCrispText("History", 147, 620, 10, "500", "#9ca3af");

    // Account
    renderCrispText("👤", 265, 600, 18, "", "#9ca3af");
    renderCrispText("Account", 252, 620, 10, "500", "#9ca3af");

    const canvasTexture = new THREE.CanvasTexture(canvas);
    canvasTexture.anisotropy = 16;
    canvasTexture.minFilter = THREE.LinearMipmapLinearFilter;
    canvasTexture.magFilter = THREE.LinearFilter;
    canvasTexture.generateMipmaps = true;
    canvasTexture.needsUpdate = true;

    const newMaterial = new THREE.MeshBasicMaterial({
      map: canvasTexture,
      toneMapped: false,
    });
    setScreenMaterial(newMaterial);

    if (imageUrl !== "/api/placeholder/320/640") {
      textureLoader.load(
        imageUrl,
        (texture) => {
          texture.anisotropy = 16;
          texture.minFilter = THREE.LinearMipmapLinearFilter;
          texture.magFilter = THREE.LinearFilter;
          texture.generateMipmaps = true;
          const loadedMaterial = new THREE.MeshBasicMaterial({
            map: texture,
            toneMapped: false,
          });
          setScreenMaterial(loadedMaterial);
        },
        undefined,
        (error) => {
          console.error("Error loading texture:", error);
        }
      );
    }
  }, [imageUrl]);

  useFrame((state) => {
    if (!handRef.current) return;
    const x = (mouse.x * viewport.width) / 4;
    const y = (mouse.y * viewport.height) / 4;

    handRef.current.rotation.y = THREE.MathUtils.lerp(
      handRef.current.rotation.y,
      x * 0.3,
      0.1
    );
    handRef.current.rotation.x = THREE.MathUtils.lerp(
      handRef.current.rotation.x,
      y * 0.2,
      0.1
    );

    const time = state.clock.getElapsedTime();
    handRef.current.position.y = position[1] + Math.sin(time) * 0.1;
  });

  return (
    <group ref={handRef} position={position} rotation={[0.3, 0, 0]}>
      <group ref={phoneRef} position={[0, 0, 0.3 * phoneScale]}>
        <mesh material={phoneMaterial} castShadow receiveShadow>
          <boxGeometry args={[phoneWidth, phoneHeight, phoneDepth]} />
        </mesh>
        <mesh
          position={[0, 0, phoneDepth / 2 + 0.01]}
          material={screenMaterial}
        >
          <planeGeometry args={[screenWidth, screenHeight]} />
        </mesh>
      </group>
    </group>
  );
}

interface PhoneModelSceneProps {
  customImageUrl?: string;
  phoneScale?: number;
}

export default function PhoneModelScene({
  customImageUrl,
  phoneScale = 1.5,
}: PhoneModelSceneProps) {
  const phoneImageUrl = customImageUrl || "/assets/phone.png";

  return (
    <HandWithPhone
      position={[0, -0.5, 0]}
      imageUrl={phoneImageUrl}
      phoneScale={phoneScale}
    />
  );
}
