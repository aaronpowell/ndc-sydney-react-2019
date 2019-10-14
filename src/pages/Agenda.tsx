import React from "react";
import Day from "../components/Day";
import TabControl from "../components/TabControl";
import { Route, Switch } from "react-router-dom";
import useAgenda from "../fetchAgenda";

const Agenda: React.FC = () => {
  const [isLoading, agenda] = useAgenda();

  if (isLoading || !agenda) {
    return <div>Loading...</div>;
  }

  const days = Object.keys(agenda);

  return (
    <TabControl tabNames={days}>
      <Switch>
        <Route exact path="/">
          <h1>Please select a day for the agenda</h1>
        </Route>
        {days.map(key => (
          <Route key={key} path={`/agenda/${key}`}>
            <Day day={key} agenda={agenda[key]} />
          </Route>
        ))}
      </Switch>
    </TabControl>
  );
};

export default Agenda;
