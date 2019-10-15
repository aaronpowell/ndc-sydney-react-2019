import React, { useContext } from "react";
import { SessionBuilderContext } from "../SessionBuilderContextProvider";
import { groupAgendaDays } from "../agendaUtils";
import Day from "../components/Day";

const MySessions: React.FC = () => {
  const [sessions] = useContext(SessionBuilderContext);
  if (!sessions.length) {
    return <h1>Please select some sessions</h1>;
  }

  const mappedSessions = groupAgendaDays(sessions);

  const days = Object.keys(mappedSessions);

  return (
    <>
      {days.map(day => {
        const agenda = mappedSessions[day];
        return <Day key={day} day={day} agenda={agenda} />;
      })}
    </>
  );
};

export default MySessions;
