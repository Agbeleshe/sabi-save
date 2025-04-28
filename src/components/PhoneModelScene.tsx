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
      ctx.shadowColor = "rgba(255,255,255,0.5)";
      ctx.shadowBlur = 2;
      ctx.fillText(text, x * scale, y * scale);
      ctx.shadowColor = "transparent";
      ctx.shadowBlur = 0;
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

    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#f8f8f8";
    ctx.fillRect(0, 0, canvas.width, 40 * scale);
    renderCrispText("10:30 am", 15, 25, 14);
    renderCrispText("••• 📶 🔋", 250, 25, 14);

    ctx.fillStyle = "#fff";
    ctx.fillRect(0, 40 * scale, canvas.width, 60 * scale);
    ctx.fillStyle = "#000";
    ctx.beginPath();
    ctx.arc(30 * scale, 70 * scale, 20 * scale, 0, Math.PI * 2);
    ctx.fill();
    renderCrispText("SS", 22, 70, 14, "bold", "#FFBD59");
    renderCrispText("Welcome, Razaq", 60, 75, 14, "bold");

    ctx.fillStyle = "#eee";
    ctx.fillRect(0, 100 * scale, canvas.width, 1 * scale);

    ctx.fillStyle = "#000";
    roundRect(
      15 * scale,
      120 * scale,
      canvas.width - 30 * scale,
      100 * scale,
      12 * scale
    );
    ctx.fill();
    renderCrispText("Total Savings", 35, 145, 12, "", "#999");
    renderCrispText("N100,000.00", 35, 180, 28, "bold", "#FFBD59");
    renderCrispText("👁️", 270, 190, 16, "", "#fff");

    renderCrispText("Quick Links:", 15, 240, 14, "bold");

    ctx.fillStyle = "#f9f9f9";
    roundRect(
      15 * scale,
      260 * scale,
      canvas.width - 30 * scale,
      50 * scale,
      10 * scale
    );
    ctx.fill();
    ctx.fillStyle = "#000";
    ctx.beginPath();
    ctx.arc(35 * scale, 285 * scale, 18 * scale, 0, Math.PI * 2);
    ctx.fill();
    renderCrispText("💰", 20, 285, 20, "", "#FFBD59");
    renderCrispText("Save more", 70, 290, 14);
    renderCrispText("›", 290, 290, 14);

    ctx.fillStyle = "#f9f9f9";
    roundRect(
      15 * scale,
      320 * scale,
      canvas.width - 30 * scale,
      50 * scale,
      10 * scale
    );
    ctx.fill();
    ctx.fillStyle = "#000";
    ctx.beginPath();
    ctx.arc(35 * scale, 345 * scale, 18 * scale, 0, Math.PI * 2);
    ctx.fill();
    renderCrispText("💳", 22, 342, 20, "", "#FFBD59");
    renderCrispText("Withdraw", 90, 350, 14);
    renderCrispText("›", 270, 350, 14);

    renderCrispText("Account number", 15, 400, 12, "", "#666");
    renderCrispText("8024301860", 15, 425, 14, "bold");
    renderCrispText("Account name", 15, 455, 12, "", "#666");
    renderCrispText("Ibraheem Razaq", 15, 480, 14, "bold");

    ctx.fillStyle = "#f5f5f5";
    roundRect(
      15 * scale,
      500 * scale,
      canvas.width - 30 * scale,
      40 * scale,
      10 * scale
    );
    ctx.fill();
    renderCrispText("📋 Copy details", 120, 525, 14);

    ctx.fillStyle = "#fff";
    ctx.fillRect(0, 580 * scale, canvas.width, 60 * scale);
    ctx.fillStyle = "#eee";
    ctx.fillRect(0, 580 * scale, canvas.width, 1 * scale);
    renderCrispText("🏠", 50, 605, 20, "", "#FFBD59");
    renderCrispText("Home", 45, 625, 12, "", "#FFBD59");
    renderCrispText("📜", 160, 605, 20, "", "#999");
    renderCrispText("History", 150, 625, 12, "", "#999");
    renderCrispText("👤", 270, 605, 20, "", "#999");
    renderCrispText("Account", 260, 625, 12, "", "#999");

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
        <mesh material={phoneMaterial}>
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
      position={[0, 0, 0]}
      imageUrl={phoneImageUrl}
      phoneScale={phoneScale}
    />
  );
}
