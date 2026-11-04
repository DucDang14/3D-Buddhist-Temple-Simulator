import { useState } from "react";

type IncenseBurnerProps = {
  position: [number, number, number];
};

export default function IncenseBurner({ position }: IncenseBurnerProps) {
  const [isLit, setIsLit] = useState(false);

  return (
    <group position={position} onClick={ (event) => {
      event.stopPropagation();
      setIsLit(true);
      }}
    >
      {/* Bronze vessel */}
      <mesh position={[0, 0.15, 0]}>
        <cylinderGeometry args={[0.25, 0.18, 0.3, 24]} />
        <meshStandardMaterial
          color="#967444"
          metalness={0.6}
          roughness={0.4}
        />
      </mesh>

      {/* Ash surface */}
      <mesh
        position={[0, 0.302, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
      >
        <circleGeometry args={[0.22, 24]} />
        <meshStandardMaterial color="#b5aaa0" />
      </mesh>
      {/* Incense sticks */}
      <mesh position={[0, 0.55, 0]}>
        <cylinderGeometry args={[0.012, 0.012, 0.5, 8]} />
        <meshStandardMaterial color="#795438" />
      </mesh>

      {/*Incense tips */}
      <mesh position={[0, 0.805, 0]}>
        <sphereGeometry args={[0.018, 8, 8]} />
        <meshStandardMaterial
          color={isLit ? "#ff6b24" : "#49352a"}
          emissive={isLit ? "#ff4500" : "#000000"}
          emissiveIntensity={isLit ? 2 : 0}
        />
      </mesh>
      
    </group>
  );
}