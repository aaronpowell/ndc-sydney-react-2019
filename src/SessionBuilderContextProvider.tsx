import React, { createContext, useState } from "react";
import { IAgendaItem } from "./agendaUtils";

const SessionBuilderContext = createContext<
  [IAgendaItem[], (talk: IAgendaItem) => void]
>([[], x => {}]);

const SessionBuilderContextProvider: React.FC = ({ children }) => {
  const [sessions, setSessions] = useState<IAgendaItem[]>([]);

  const addSessionToList = (talk: IAgendaItem) =>
    sessions.indexOf(talk) >= 0 ? {} : setSessions([...sessions, talk]);

  return (
    <SessionBuilderContext.Provider value={[sessions, addSessionToList]}>
      {children}
    </SessionBuilderContext.Provider>
  );
};

export { SessionBuilderContext, SessionBuilderContextProvider };
