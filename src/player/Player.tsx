import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useKeyboardControls } from "@react-three/drei";
import { Group, MathUtils } from "three";

type MovementAction = "forward" | "backward" | "left" | "right";

export default function Player() {
    const PlayerRef = useRef<Group>(null);
    const [, getKeys] = useKeyboardControls<MovementAction>();

    useFrame((_, delta) => {
        const player = PlayerRef.current;

        if (!player) return;

        const {forward, backward, left, right} = getKeys();
        
        const x = Number(right) - Number(left);
        const z = Number(backward) - Number(forward);
        const length = Math.hypot(x, z);

        if (length === 0) return;

        const distance = 2 * Math.min(delta,0.05);

        player .position.x += (x / length) * distance;
        player .position.z += (z / length) * distance;

        player.position.x = MathUtils.clamp(player.position.x, -2.2, 2.2);
        player.position.z = MathUtils.clamp(player.position.z, 0, 1.5);
    });
    return (
      <group ref={PlayerRef} position={[0, 0.4, 1]}>
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