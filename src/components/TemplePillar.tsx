type TemplePillarProps = {
  position: [number, number, number];
};

export default function TemplePillar({ position }: TemplePillarProps) {
  return (
    <mesh position={position}>
      <boxGeometry args={[0.3, 3, 0.3]} />
      <meshStandardMaterial color="#593b2b" />
    </mesh>
  );
}