type TempleBellProps = {
  position: [number, number, number];
};

export default function TempleBell({ position }: TempleBellProps) {
  return (
    <group position={position}>
        {/*Left wooden support*/}
        <mesh position={[-0.7, 1.2, 0]}>
            <boxGeometry args={[0.16, 2.4, 0.25]} />
            <meshStandardMaterial color="#35251e" />
        </mesh>

        {/*Right wooden support*/}
        <mesh position={[0.7, 1.2, 0]}>
            <boxGeometry args={[0.16, 2.4, 0.25]} />
            <meshStandardMaterial color="#35251e" />
        </mesh>

        {/*Crossbeam connecting the supports*/}
        <mesh position={[0, 2.4, 0]}>
            <boxGeometry args={[1.8, 0.18, 0.3]} />
            <meshStandardMaterial color="#35251e" />
        </mesh>

        {/* Suspension connects the bell to the beam */}
        <mesh position={[0, 2.13, 0]}>
            <cylinderGeometry args={[0.04, 0.04, 0.36, 12]} />
            <meshStandardMaterial color="#747a72" metalness={0.6} />
        </mesh>

        {/* Gray-metal bell body */}
        <mesh position={[0, 1.5, 0]}>
            <cylinderGeometry args={[0.3, 0.45, 0.9, 24]} />
            <meshStandardMaterial 
            color="#747a72" 
            metalness={0.6}
            roughness={0.5}
            />
        </mesh>

        {/*Wider lower rim of the bell*/}
        <mesh position={[0, 1.05, 0]}>
            <cylinderGeometry args={[0.48, 0.48, 0.1, 24]} />
            <meshStandardMaterial 
            color="#747a72" 
            metalness={0.6}
            roughness={0.5}
            />
        </mesh>


    </group>
  );
}