import type { GameState, StatKey } from "../types/game";
import { calculateLevel, xpToNextLevel } from "./level";

export function recalculateGameState(state: GameState): GameState {
  // 🧠 Character
  const totalXp = state.character.total_xp;
  const characterLevel = calculateLevel(totalXp);
  const nextLevelXp = xpToNextLevel(characterLevel);

  // 🧠 Stats (auto-level each one)
  const updatedStats = { ...state.stats };

  (Object.keys(updatedStats) as StatKey[]).forEach((key) => {
    const statXp = updatedStats[key].xp;

    updatedStats[key] = {
      ...updatedStats[key],
      level: calculateLevel(statXp),
    };
  });

  return {
    ...state,
    character: {
      ...state.character,
      level: characterLevel,
      next_level_xp_threshold: nextLevelXp,
    },
    stats: updatedStats,
  };
}