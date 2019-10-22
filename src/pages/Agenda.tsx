import React from "react";
import Day from "../components/Day";
import TabControl from "../components/TabControl";
import { Route, Switch } from "react-router-dom";
import useAgenda from "../fetchAgenda";
import { SessionBuilderContextProvider } from "../SessionBuilderContextProvider";
import MySessions from "./MySessions";

const Agenda: React.FC = () => {
  const [isLoading, agenda] = useAgenda();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const days = Object.keys(agenda);

  return (
    <SessionBuilderContextProvider>
      <TabControl
        tabNames={[
          ...days.map(d => ({ name: d, route: `/agenda/${d}` })),
          { name: "My Schedule", route: "/my-sessions" }
        ]}
      >
        <Switch>
          <Route exact path="/">
            <h1>Please select a day for the agenda</h1>
          </Route>
          {days.map(key => (
            <Route key={key} path={`/agenda/${key}`}>
              <Day day={key} agenda={agenda[key]} />
            </Route>
          ))}

          <Route path="/my-sessions">
            <MySessions />
          </Route>
        </Switch>
      </TabControl>
    </SessionBuilderContextProvider>
  );
};

export default Agenda;
