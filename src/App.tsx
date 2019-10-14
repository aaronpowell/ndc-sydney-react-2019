import React from 'react';
import agenda from './fetchAgenda';
import moment from 'moment';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        NDC Sydney Agenda
      </header>
      {agenda.map(item => {
        return (<div>
          <h2>{item.day}</h2>
          <h3>{moment(item.startTime).format('hh:mm')} - {moment(item.endTime).format('hh:mm')}</h3>
          <p>{item.title} - {item.speaker}</p>
        </div>);
      })}
    </div>
  );
}

export default App;
