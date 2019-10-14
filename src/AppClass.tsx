import React from "react";
import moment from "moment";
import "./App.css";
import { IAgendaItem, mapAgenda } from "./agendaUtils";

interface IAppState {
  agenda?: { [key: string]: IAgendaItem[] };
  loading: boolean;
}

class App extends React.Component<{}, IAppState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      agenda: undefined,
      loading: true
    };
  }

  async componentDidMount() {
    const res = await fetch("/agenda.json");
    const rawAgenda = await res.json();

    const agenda = mapAgenda(rawAgenda);

    this.setState({ agenda, loading: false });
  }

  render() {
    const agenda = this.state.agenda;

    if (this.state.loading || !agenda) {
      return (
        <div className="App">
          <header className="App-header">NDC Sydney Agenda</header>
          <div>Loading...</div>
        </div>
      );
    }

    return (
      <div className="App">
        <header className="App-header">NDC Sydney Agenda</header>
        {Object.keys(agenda).map(key => {
          return (
            <div>
              <h2>{key}</h2>
              {agenda[key].map(item => {
                return (
                  <>
                    <h3>
                      {moment(item.startTime).format("hh:mm")} -{" "}
                      {moment(item.endTime).format("hh:mm")}
                    </h3>
                    <p>
                      {item.title} - {item.speaker}
                    </p>
                  </>
                );
              })}
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
