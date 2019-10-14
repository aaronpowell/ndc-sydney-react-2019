import React from "react";

interface ITalkProps {
  title: string;
  speaker: string;
}

const Talk: React.FC<ITalkProps> = ({ title, speaker }) => (
  <p>
    {title} - {speaker}
  </p>
);

export default Talk;
