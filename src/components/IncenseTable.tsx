import IncenseBurner from "./IncenseBurner";

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
        {/* Two support */}
        <mesh position={[-0.45, 0.39, 0]}>
            <boxGeometry args={[0.12, 0.78, 0.5]} />
            <meshStandardMaterial color="#35251e" />
        </mesh>

        <mesh position={[0.45, 0.39, 0]}>
            <boxGeometry args={[0.12, 0.78, 0.5]} />
            <meshStandardMaterial color="#35251e" />
        </mesh>
        
        {/* Incense burner */}  
        <IncenseBurner position={[0, 0.9, 0]} />
    </group>
  );
}