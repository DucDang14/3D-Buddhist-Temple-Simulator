type ListeningStandProps = {
  position: [number, number, number];
};

export default function ListeningStand({ position }: ListeningStandProps) {
    return (
        <group position={position}>
            {/* Wide base keeps the stand visually grounded */}
            <mesh position={[0, 0.06, 0]}>
                <boxGeometry args={[0.8, 0.12, 0.6]} />
                <meshStandardMaterial color="#35251e" />
            </mesh>

            {/* Central support reaches the underside of the top*/}
            <mesh position={[0, 0.71, 0]}>
                <boxGeometry args={[0.16, 1.18, 0.16]} />
                <meshStandardMaterial color="#70392e" />
            </mesh>

            {/*Slopped top faces the entrance, toward positive Z */}
            <group position={[0, 1.3, 0]} rotation={[0.3, 0, 0]}
            >
                <mesh>
                    <boxGeometry args={[0.8, 0.12, 0.6]} />
                    <meshStandardMaterial color="#79573d" />
                </mesh>

                {/* Small gold-colored marker on th eupper surface */}
                <mesh position={[0, 0.071, 0]}>
                    <boxGeometry args={[0.3, 0.02, 0.2]} />
                    <meshStandardMaterial color="#b59656" />
                </mesh>

            </group>
        </group>
    );
}