import { HALL } from "../config/templeLayout";

type TemplePillarProps = {
  position: [number, number, number];
};

export default function TemplePillar({ position }: TemplePillarProps) {
  return (
    <mesh position={position}>
      <boxGeometry args={[0.3, HALL.pillarHeight, 0.3]} />
      <meshStandardMaterial color="#70392e" />
    </mesh>
  );
}