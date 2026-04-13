import type { GameState } from "../types/game";

interface Props {
  state: GameState;
}

export default function CharacterSheet({ state }: Props) {
  const { character, stats } = state;

  return (
    <div style={container}>
      <h2>Character Sheet</h2>

      <div style={section}>
        <p><strong>Name:</strong> {character.name}</p>
        <p><strong>Level:</strong> {character.level}</p>
        <p><strong>Total XP:</strong> {character.total_xp}</p>
      </div>

      <div style={section}>
        <h3>Stats</h3>

        {Object.entries(stats).map(([key, stat]) => (
          <div key={key} style={statRow}>
            <span style={statName}>{formatStatName(key)}</span>

            <span>
              Lv. {stat.level} — {stat.xp} XP
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function formatStatName(key: string) {
  return key
    .replace("_", " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

const container: React.CSSProperties = {
  border: "1px solid #444",
  padding: "16px",
  borderRadius: "8px",
  marginBottom: "20px",
};

const section: React.CSSProperties = {
  marginBottom: "12px",
};

const statRow: React.CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  padding: "4px 0",
  borderBottom: "1px solid #333",
};

const statName: React.CSSProperties = {
  fontWeight: "bold",
};
