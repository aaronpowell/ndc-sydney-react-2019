import React from "react";
import { IAgendaItem } from "../agendaUtils";
import Talk from "./Talk";

interface ITimeSlotProps {
  talks: IAgendaItem[];
  timeslot: string;
}

const TimeSlot: React.FC<ITimeSlotProps> = ({ talks, timeslot }) => (
  <div className="Timeslot">
    <h4>{timeslot}</h4>
    {talks.map(item => (
      <Talk
        key={`${item.speaker}${item.title}`}
        title={item.title}
        speaker={item.speaker}
      />
    ))}
  </div>
);

export default TimeSlot;
