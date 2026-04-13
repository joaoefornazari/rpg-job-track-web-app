import MissionForm from "./components/MissionForm";
import MissionList from "./components/MissionList";
import ImportExport from "./components/ImportExport";
import { useGameState } from "./hooks/useGameState";
import CharacterSheet from "./components/CharacterSheet";

export default function App() {
  const { state, addMission, setState } = useGameState();

  return (
    <div style={{ padding: 20 }}>
      <h1>RPG Job Track</h1>

      <CharacterSheet state={state} />

      <ImportExport state={state} onImport={setState} />

      <MissionForm onAdd={addMission} />

      <MissionList missions={state.missions} />
    </div>
  );
}