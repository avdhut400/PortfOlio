import { Canvas } from "@react-three/fiber";
import { Float, OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";

export default function ThreeBackground() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5] }}
      className="absolute inset-0"
    >
      <ambientLight intensity={0.7} />
      <directionalLight position={[2, 2, 2]} />

      <Float speed={2} rotationIntensity={8} floatIntensity={8}>
        <Sphere args={[1.2, 100, 200]} scale={2}>
          <MeshDistortMaterial
            color="#8b5cf6"
            distort={0.4}
            speed={2}
            roughness={0}
          />
        </Sphere>
      </Float>

      <OrbitControls enableZoom={false} />
    </Canvas>
  );
}
