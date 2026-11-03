import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

export default function TempleScene() {
    return (
      <Canvas camera={{ position: [5, 4, 6], fov: 50 }}>
        <color attach="background" args={["#f5f0e6"]} />  
        
        <ambientLight intensity={0.56} />
        <directionalLight position={[5, 8, 5]} intensity={2} />

        <mesh position={[0, 0.2, 0]} >
            <boxGeometry args={[6, 0.4, 4]} />
            <meshStandardMaterial color="#8b7355" />
        </mesh>
        //Add 4 pillars
        <mesh position={[-2.5, 1.9, -1.5]} >
            <boxGeometry args={[0.3, 3, 0.3]} />
            <meshStandardMaterial color="#593b2b" />
        </mesh>
        <mesh position={[2.5, 1.9, -1.5]} >
            <boxGeometry args={[0.3, 3, 0.3]} />
            <meshStandardMaterial color="#593b2b" />
        </mesh>
        <mesh position={[-2.5, 1.9, 1.5]} >
            <boxGeometry args={[0.3, 3, 0.3]} />
            <meshStandardMaterial color="#593b2b" />
        </mesh>
        <mesh position={[2.5, 1.9, 1.5]} >
            <boxGeometry args={[0.3, 3, 0.3]} />
            <meshStandardMaterial color="#593b2b" />
        </mesh>

        //End Add 4 pillars

        <mesh rotation={[-Math.PI / 2, 0, 0]} >
            <planeGeometry args={[12, 12]} />
            <meshStandardMaterial color="#c8b99c" />
        </mesh>

        <OrbitControls target={[0, 0.5, 0]} />
      </Canvas>
    )
}