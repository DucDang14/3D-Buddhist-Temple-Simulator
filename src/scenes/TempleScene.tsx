import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { KeyboardControls } from "@react-three/drei";
import TemplePillar from "../components/TemplePillar";
import TempleAltar from "../components/TempleAltar";
import Player from "../player/Player";
import { HALL, ALTAR_POSITION, INCENSE_BURNER_POSITION, BOWING_POSITION } from "../config/templeLayout";
import IncenseTable from "../components/IncenseTable";


export default function TempleScene() {
    const pillarX = HALL.width / 2 - 0.6;
    const pillarY = HALL.platformHeight + HALL.pillarHeight / 2;
    const pillarZ = HALL.depth / 2 - 1;
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
        <Canvas camera={{ position: [10, 9, 13], fov: 50 }}>
          <color attach="background" args={["#f5f0e6"]} />  
          <ambientLight intensity={0.56} />
          <directionalLight position={[5, 8, 5]} intensity={2} />

        {/*Platform mesh*/}
        <mesh position={[0, HALL.platformHeight / 2, 0]} >
            <boxGeometry args={[HALL.width, HALL.platformHeight, HALL.depth]} />
            <meshStandardMaterial color="#79573d" />
        </mesh>
        {/* Four wooden pillars */}
        <TemplePillar position={[-pillarX, pillarY, -pillarZ]} />
        <TemplePillar position={[pillarX, pillarY, -pillarZ]} />
        <TemplePillar position={[pillarX, pillarY, 0]} />
        <TemplePillar position={[-pillarX, pillarY, 0]} />
        <TemplePillar position={[pillarX, pillarY, pillarZ]} />
        <TemplePillar position={[-pillarX, pillarY, pillarZ]} />
        {/* End four wooden pillars */}

        <TempleAltar position={ALTAR_POSITION} />
        <IncenseTable position={INCENSE_BURNER_POSITION} />

        {/*Placeholder bowing mat*/}
        <mesh position={[BOWING_POSITION[0], BOWING_POSITION[1] + 0.025, BOWING_POSITION[2]]}>
            <boxGeometry args={[1.2, 0.05, 1.4]} />
            <meshStandardMaterial color="#9b8860" />
        </mesh>

        {/* temporary flat roof */}
        <mesh position={[0, HALL.platformHeight + HALL.pillarHeight + 0.15, 0]}>
        <boxGeometry args={[HALL.width + 0.6, 0.3, HALL.depth + 0.6]} />
        <meshStandardMaterial color="#35251e" />
        </mesh>

        <mesh rotation={[-Math.PI / 2, 0, 0]} >
            <planeGeometry args={[24, 28]} />
            <meshStandardMaterial color="#c8b99c" />
        </mesh>

        <Player />
        <OrbitControls target={[0, 1.5, 0]} />
        </Canvas>
    </KeyboardControls>
    )
}