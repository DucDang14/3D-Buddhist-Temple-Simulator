
// Position the whole altar together; mesh positions below are local offsets.
type TempleAltarProps = {
  position: [number, number, number];
};

export default function TempleAltar({ position }: TempleAltarProps) {
  return (
    <group position =  {position}>
      {/* Pedestal: center at half its height so the base sits on the platform. */}
      <mesh position={[0, 0.4, 0]}>
        <boxGeometry args={[1.8, 0.8, 0.8]} />
        <meshStandardMaterial color="#593b2b" />
        </mesh>
        {/* Wider tabletop rests on the pedestal; statue and decorations come later. */}
      <mesh position={[0, 0.9, 0]}>
        <boxGeometry args={[2.2, 0.2, 1]} />
        <meshStandardMaterial color="#8b4935" />
      </mesh>

    </group>
  );
}
