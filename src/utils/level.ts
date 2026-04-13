export const BASE_XP = 100;
export const GROWTH = 1.2;

export function xpToNextLevel(level: number): number {
  return Math.floor(BASE_XP * Math.pow(GROWTH, level));
}

export function calculateLevel(totalXp: number): number {
  let level = 0;
  let xpNeeded = BASE_XP;

  while (totalXp >= xpNeeded) {
    totalXp -= xpNeeded;
    level++;
    xpNeeded = xpToNextLevel(level);
  }

  return level;
}
