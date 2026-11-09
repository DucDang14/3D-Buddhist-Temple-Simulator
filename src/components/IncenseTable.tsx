import IncenseBurner from "./IncenseBurner";

// World position for the table; all child positions are relative to this group.
type IncenseTableProps = {
  position: [number, number, number];
};

export default function IncenseTable({ position }: IncenseTableProps) {
  return (
    <group position={position}>
        {/* Table top upper surface at local Y = 0.9 */}
        <mesh position={[0, 0.84, 0]}>
            <boxGeometry args={[1.2, 0.12, 0.7]} />
            <meshStandardMaterial color="#79573d" />        
        </mesh>
        {/* Left support reaches from the floor to the tabletop's underside. */}
        <mesh position={[-0.45, 0.39, 0]}>
            <boxGeometry args={[0.12, 0.78, 0.5]} />
            <meshStandardMaterial color="#35251e" />
        </mesh>

        {/* Matching right support */}
        <mesh position={[0.45, 0.39, 0]}>
            <boxGeometry args={[0.12, 0.78, 0.5]} />
            <meshStandardMaterial color="#35251e" />
        </mesh>
        
        {/* Reuse the clickable burner, with its base on the tabletop. */}  
        <IncenseBurner position={[0, 0.9, 0]} />
    </group>
  );
}
