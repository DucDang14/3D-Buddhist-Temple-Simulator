import { HALL } from "../config/templeLayout";

// The scene supplies the pillar's center position.
type TemplePillarProps = {
  position: [number, number, number];
};

// Every pillar shares the hall's configured height and muted-red wood material.
export default function TemplePillar({ position }: TemplePillarProps) {
  return (
    <mesh position={position}>
      <boxGeometry args={[0.3, HALL.pillarHeight, 0.3]} />
      <meshStandardMaterial color="#70392e" />
    </mesh>
  );
}
