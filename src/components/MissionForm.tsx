import { useState } from "react";
import type { Mission } from "../types/game";

interface Props {
  onAdd: (mission: Mission) => void;
}

export default function MissionForm({ onAdd }: Props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const newMission: Mission = {
      id: crypto.randomUUID(),
      title,
      description,
      date: new Date().toISOString(),
      status: "ready",
      tags: [],
      priority: Math.floor(Math.random() % 5) + 1,
      notes: ""
    };

    onAdd(newMission);
    setTitle("");
    setDescription("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Mission title"
        required
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
      />
      <button type="submit">Add Mission</button>
    </form>
  );
}
