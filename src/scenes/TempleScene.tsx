import { Canvas } from "@react-three/fiber";
import { KeyboardControls } from "@react-three/drei";
import TemplePillar from "../components/TemplePillar";
import TempleAltar from "../components/TempleAltar";
import Player from "../player/Player";
import { HALL, ALTAR_POSITION, INCENSE_BURNER_POSITION, BOWING_POSITION, BELL_POSOTION, LISTENING_POSITION } from "../config/templeLayout";
import IncenseTable from "../components/IncenseTable";
import TempleBell from "../components/TempleBell";
import ListeningStand from "../components/ListeningStand";


export default function TempleScene() {
    // Inset pillars from the edges and center their height above the platform.
    const pillarX = HALL.width / 2 - 0.6;
    const pillarY = HALL.platformHeight + HALL.pillarHeight / 2;
    const pillarZ = HALL.depth / 2 - 1;
    // Share named keyboard actions with Player. Jump is mapped but not implemented.
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
        {/* Rendering surface and temporary inspection camera */}
        <Canvas camera={{ position: [0, 2.6, 8.5], fov: 50 }}>
          {/* Scene background and basic lighting; shadows are not enabled yet. */}
          <color attach="background" args={["#f5f0e6"]} />  
          <ambientLight intensity={0.56} />
          <directionalLight position={[5, 8, 5]} intensity={2} />

        {/* Raised wooden platform: its bottom rests at Y = 0. */}
        <mesh position={[0, HALL.platformHeight / 2, 0]} >
            <boxGeometry args={[HALL.width, HALL.platformHeight, HALL.depth]} />
            <meshStandardMaterial color="#79573d" />
        </mesh>
        {/* Six side pillars leave the central aisle open. */}
        <TemplePillar position={[-pillarX, pillarY, -pillarZ]} />
        <TemplePillar position={[pillarX, pillarY, -pillarZ]} />
        <TemplePillar position={[pillarX, pillarY, 0]} />
        <TemplePillar position={[-pillarX, pillarY, 0]} />
        <TemplePillar position={[pillarX, pillarY, pillarZ]} />
        <TemplePillar position={[-pillarX, pillarY, pillarZ]} />

        {/* Main altar and a separate incense table closer to the entrance */}
        <TempleAltar position={ALTAR_POSITION} />
        <IncenseTable position={INCENSE_BURNER_POSITION} />
        <TempleBell position={BELL_POSOTION} />

        {/* Future chanting selection point; no interaction yet */}
        <ListeningStand position={LISTENING_POSITION} />

        {/* Layout marker only; half its thickness keeps it above the platform. */}
        <mesh position={[BOWING_POSITION[0], BOWING_POSITION[1] + 0.025, BOWING_POSITION[2]]}>
            <boxGeometry args={[1.2, 0.05, 1.4]} />
            <meshStandardMaterial color="#9b8860" />
        </mesh>

        {/* Flat placeholder roof rests on the pillar tops, with a small overhang. */}
        <mesh position={[0, HALL.platformHeight + HALL.pillarHeight + 0.15, 0]}>
        <boxGeometry args={[HALL.width + 0.6, 0.3, HALL.depth + 0.6]} />
        <meshStandardMaterial color="#35251e" />
        </mesh>

        {/* Rotate the surrounding ground plane from vertical to horizontal. */}
        <mesh rotation={[-Math.PI / 2, 0, 0]} >
            <planeGeometry args={[24, 28]} />
            <meshStandardMaterial color="#c8b99c" />
        </mesh>

        {/* Controllable character; mouse orbit is for inspecting the layout. */}
        <Player />
        </Canvas>
    </KeyboardControls>
    )
}
