import type { GameState } from "../types/game";

interface Props {
  state: GameState;
  onImport: (data: GameState) => void;
}

export default function ImportExport({ state, onImport }: Props) {
  function handleExport() {
    const blob = new Blob([JSON.stringify(state, null, 2)], {
      type: "application/json",
    });

    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "rpg-save.json";
    a.click();
    URL.revokeObjectURL(url);
  }

  function handleImport(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      try {
        const data = JSON.parse(reader.result as string);
        onImport(data);
      } catch (error) {
        console.error("Failed to import save file.", error);
        alert("Invalid save file. Please import a valid JSON export.");
      }
    };
    reader.readAsText(file);
  }

  return (
    <div>
      <button onClick={handleExport}>Export</button>
      <input type="file" onChange={handleImport} />
    </div>
  );
}
