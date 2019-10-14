import React from "react";
import { IAgendaItem, groupAgendaTimeslots } from "../agendaUtils";
import TimeSlot from "./Timeslot";

interface IDayProps {
  day: string;
  agenda: IAgendaItem[];
}

const Day: React.FC<IDayProps> = ({ day, agenda }) => {
  const timeslots = groupAgendaTimeslots(agenda);

  return (
    <div className={`Day ${day}`}>
      <h2>{day}</h2>
      {Object.keys(timeslots).map(key => (
        <TimeSlot key={key} timeslot={key} talks={timeslots[key]} />
      ))}
    </div>
  );
};

export default Day;
