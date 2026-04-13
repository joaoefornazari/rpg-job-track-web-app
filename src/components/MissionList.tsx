import { Mission } from "../types/game";

interface Props {
  missions: Mission[];
}

export default function MissionList({ missions }: Props) {
  return (
    <div>
      {missions.map((m) => (
        <div key={m.id}>
          <h3>{m.title}</h3>
          <p>{m.description}</p>
          <p>Status: {m.status}</p>
          {m.xp_awarded && <p>XP: {m.xp_awarded}</p>}
        </div>
      ))}
    </div>
  );
}
