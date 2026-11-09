import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useKeyboardControls } from "@react-three/drei";
import { Group, MathUtils } from "three";
import { PLAYER_SPAWN, PLAYER_BOUNDS } from "../config/templeLayout";

// Action names match the KeyboardControls mapping in TempleScene.
type MovementAction = "forward" | "backward" | "left" | "right";

export default function Player() {
    // Access the Three.js group directly and read the current keyboard state.
    const PlayerRef = useRef<Group>(null);
    const [, getKeys] = useKeyboardControls<MovementAction>();

    // Update movement every frame without re-rendering the React component.
    useFrame((_, delta) => {
        const player = PlayerRef.current;

        // The group is unavailable until React mounts it.
        if (!player) return;

        const {forward, backward, left, right} = getKeys();
        
        // Opposite keys cancel out; forward points toward negative Z.
        const x = Number(right) - Number(left);
        const z = Number(backward) - Number(forward);
        const length = Math.hypot(x, z);

        // Skip position updates when no movement direction is pressed.
        if (length === 0) return;

        // Move at 2 units per second, limiting jumps after a slow frame.
        const distance = 2 * Math.min(delta,0.05);

        // Normalize the direction so diagonal movement is not faster.
        player .position.x += (x / length) * distance;
        player .position.z += (z / length) * distance;

        // Keep the player's center inside our temporary walking area.
        player.position.x = MathUtils.clamp(player.position.x, PLAYER_BOUNDS.minX, PLAYER_BOUNDS.maxX);
        player.position.z = MathUtils.clamp(player.position.z, PLAYER_BOUNDS.minZ, PLAYER_BOUNDS.maxZ);
    });
    // Child meshes use local positions relative to the player's feet.
    return (
      <group ref={PlayerRef} position={PLAYER_SPAWN}>
        {/* Player body */}
        <mesh position={[0, 0.5, 0]}>
          <boxGeometry args={[0.4, 1, 0.3]} />
          <meshStandardMaterial color="#647567" />
        </mesh>
        {/* Player head */}
        <mesh position={[0, 1.15, 0]}>
          <sphereGeometry args={[0.18, 16, 16]} />
          <meshStandardMaterial color="#c99b78" />
        </mesh>

        {/* Marker showing the forward direction */}
        <mesh position={[0, 0.7, -0.18]}>
          <boxGeometry args={[0.15, 0.15, 0.1]} />
          <meshStandardMaterial color="#e4be65" />
        </mesh>
      </group>
    );
}
