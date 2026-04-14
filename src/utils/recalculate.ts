import type { GameState } from "../types/game";
import { calculateLevel, xpToNextLevel } from "./level";

export function recalculateGameState(state: GameState): GameState {
  // 🧠 Character
  const totalXp = state.character.total_xp;
  const characterLevel = calculateLevel(totalXp);
  const nextLevelXp = xpToNextLevel(characterLevel);

  return {
    ...state,
    character: {
      ...state.character,
      level: characterLevel,
      next_level_xp_threshold: nextLevelXp,
    },
  };
}
