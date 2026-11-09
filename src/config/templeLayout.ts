export const HALL = {
    width: 10,
    depth: 14,
    platformHeight: 0.4,
    pillarHeight: 4.4,
};

export const PLAYER_SPAWN: [number, number, number] = [0, HALL.platformHeight, 5];

export const ALTAR_POSITION: [number, number, number] = [0, HALL.platformHeight, -5.5];

export const PLAYER_BOUNDS = {
    minX: -HALL.width / 2 + 1.2,
    maxX: HALL.width / 2 - 1.2,
    minZ: ALTAR_POSITION[2] + 1.2,
    maxZ: HALL.depth / 2 - 0.6,
}

export const INCENSE_BURNER_POSITION: [number, number, number] = [0, HALL.platformHeight, -3.5];

export const BOWING_POSITION: [number, number, number] = [0, HALL.platformHeight, -1.8];


    
