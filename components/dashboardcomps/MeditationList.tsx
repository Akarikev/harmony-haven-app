import React, { useState } from "react";
import { Meditation } from "@/data/meditations";
import { useMeditation } from "@/hooks/useMeditation";

interface MeditationListProps {
  meditations: Meditation[];
}

const MeditationList: React.FC<MeditationListProps> = ({ meditations }) => {
  const meditation = useMeditation(id);
  const [streak, setStreak] = useState(0);

  const handleMeditationClick = (id: string) => {
    // Here, you can implement your logic to handle the streak counting.
    // For simplicity, I'll just increment the streak by 1 for each click.
    setStreak((prevStreak) => prevStreak + 1);
  };

  return (
    <div>
      <p>Streak: {streak}</p>
      {meditations.map((meditation) => (
        <div
          key={meditation.id}
          onClick={() => handleMeditationClick(meditation.id)}
        >
          <h3>{meditation.title}</h3>
          <p>{meditation.content}</p>
        </div>
      ))}
    </div>
  );
};

export default MeditationList;
