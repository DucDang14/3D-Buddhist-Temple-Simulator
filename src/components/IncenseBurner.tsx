import { useState } from "react";

// Local position within the incense table's group.
type IncenseBurnerProps = {
  position: [number, number, number];
};

export default function IncenseBurner({ position }: IncenseBurnerProps) {
  // Lighting lasts for this component's lifetime and resets on a page reload.
  const [isLit, setIsLit] = useState(false);

  // Child meshes share this click handler; stop the event reaching parent groups.
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

      {/* Ash sits just above the vessel top to avoid overlapping-surface flicker. */}
      <mesh
        position={[0, 0.302, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
      >
        <circleGeometry args={[0.22, 24]} />
        <meshStandardMaterial color="#b5aaa0" />
      </mesh>
      {/* Single placeholder incense stick */}
      <mesh position={[0, 0.55, 0]}>
        <cylinderGeometry args={[0.012, 0.012, 0.5, 8]} />
        <meshStandardMaterial color="#795438" />
      </mesh>

      {/* State changes the tip's color and emission; it does not light nearby objects. */}
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
