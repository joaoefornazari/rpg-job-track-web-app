import type { GameState } from "../types/game";
import { calculateLevel, xpToNextLevel } from "./level";

export function recalculateGameState(state: GameState): GameState {
  const totalXp = state.character.total_xp;

  const level = calculateLevel(totalXp);
  const nextLevelXp = xpToNextLevel(level);

  return {
    ...state,
    character: {
      ...state.character,
      level,
      next_level_xp_threshold: nextLevelXp,
    },
  };
}