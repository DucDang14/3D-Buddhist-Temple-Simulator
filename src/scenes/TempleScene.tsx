import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { KeyboardControls } from "@react-three/drei";
import TemplePillar from "../components/TemplePillar";
import TempleAltar from "../components/TempleAltar";
import Player from "../player/Player";


export default function TempleScene() {
    return (
      <KeyboardControls
        map={[
          { name: "forward", keys: ["ArrowUp", "KeyW"] },
          { name: "backward", keys: ["ArrowDown", "KeyS"] },
          { name: "left", keys: ["ArrowLeft", "KeyA"] },
          { name: "right", keys: ["ArrowRight", "KeyD"] },
          { name: "jump", keys: ["Space"] },
        ]}
      >
        <Canvas camera={{ position: [5, 4, 6], fov: 50 }}>
          <color attach="background" args={["#f5f0e6"]} />  
          
          <ambientLight intensity={0.56} />
          <directionalLight position={[5, 8, 5]} intensity={2} />

        <mesh position={[0, 0.2, 0]} >
            <boxGeometry args={[6, 0.4, 4]} />
            <meshStandardMaterial color="#8b7355" />
        </mesh>
        {/* Four wooden pillars */}
        <TemplePillar position={[-2.5, 1.9, -1.5]} />
        <TemplePillar position={[2.5, 1.9, -1.5]} />
        <TemplePillar position={[-2.5, 1.9, 1.5]} />
        <TemplePillar position={[2.5, 1.9, 1.5]} />
        {/* End four wooden pillars */}
        <TempleAltar position={[0, 0.4, -1]} />
        {/* Placeholder roof */}
        <mesh position={[0, 3.55, 0]}>
        <boxGeometry args={[6.6, 0.3, 4.6]} />
        <meshStandardMaterial color="#873e32" />
        </mesh>

        <mesh rotation={[-Math.PI / 2, 0, 0]} >
            <planeGeometry args={[12, 12]} />
            <meshStandardMaterial color="#c8b99c" />
        </mesh>
        <Player />
        <OrbitControls target={[0, 0.5, 0]} />
        </Canvas>
    </KeyboardControls>
    )
}