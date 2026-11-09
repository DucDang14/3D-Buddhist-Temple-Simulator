// Shared dimensions: X is width, Y is height, and Z is depth.
// Positive Z leads to the entrance; negative Z leads to the altar.
export const HALL = {
    width: 10,
    depth: 14,
    platformHeight: 0.4,
    pillarHeight: 4.4,
};

// Start the player near the entrance, with feet on the platform.
export const PLAYER_SPAWN: [number, number, number] = [0, HALL.platformHeight, 5];

// Place the altar toward the far end of the hall.
export const ALTAR_POSITION: [number, number, number] = [0, HALL.platformHeight, -5.5];

// Temporary rectangular walking limits; these do not detect object collisions.
export const PLAYER_BOUNDS = {
    minX: -HALL.width / 2 + 1.2,
    maxX: HALL.width / 2 - 1.2,
    minZ: ALTAR_POSITION[2] + 1.2,
    maxZ: HALL.depth / 2 - 0.6,
}

// Position of the whole incense table; the burner sits on top in local coordinates.
export const INCENSE_BURNER_POSITION: [number, number, number] = [0, HALL.platformHeight, -3.5];

// Reserve a bowing area in front of the incense table.
export const BOWING_POSITION: [number, number, number] = [0, HALL.platformHeight, -1.8];

// Left side of the hall, outside the central aisle
export const BELL_POSOTION: [number, number, number] = [-3, HALL.platformHeight, -4];
    
//Right side of the hall, opposite the bell
export const LISTENING_POSITION: [number, number, number] = [3, HALL.platformHeight, -4];