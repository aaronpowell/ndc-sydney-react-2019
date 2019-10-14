import React from "react";
import { IAgendaItem, groupAgendaTimeslots } from "../agendaUtils";
import TimeSlot from "./Timeslot";
import styles from "styled-components";

const DayContainer = styles.div`
  border: 1px solid #cdcdcd;
  margin: 40px;
  border-radius: 10px 10px 0px 0px;
`;

const Title = styles.h2`
  text-transform: capitalize;
`;

interface IDayProps {
  day: string;
  agenda: IAgendaItem[];
}

const Day: React.FC<IDayProps> = ({ day, agenda }) => {
  const timeslots = groupAgendaTimeslots(agenda);

  return (
    <DayContainer>
      <Title>{day}</Title>
      {Object.keys(timeslots).map(key => (
        <TimeSlot key={key} timeslot={key} talks={timeslots[key]} />
      ))}
    </DayContainer>
  );
};

export default Day;
