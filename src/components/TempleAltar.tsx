import IncenseBurner from "./IncenseBurner";
type TempleAltarProps = {
  position: [number, number, number];
};

export default function TempleAltar({ position }: TempleAltarProps) {
  return (
    <group position =  {position}>
      {/* Pedestal */}
      <mesh position={[0, 0.4, 0]}>
        <boxGeometry args={[1.8, 0.8, 0.8]} />
        <meshStandardMaterial color="#593b2b" />
        </mesh>
        {/* Altar top */}
      <mesh position={[0, 0.9, 0]}>
        <boxGeometry args={[2.2, 0.2, 1]} />
        <meshStandardMaterial color="#8b4935" />
      </mesh>
      {/* Incense burner */}
      <IncenseBurner position={[0, 1, 0]} />

    </group>
  );
}