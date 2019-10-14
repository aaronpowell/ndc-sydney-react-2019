import moment from "moment";

export interface IAgendaItem {
  day: string;
  startTime: Date;
  endTime: Date;
  room: string;
  title: string;
  speaker: string;
}

const groupAgendaDays = (agenda: IAgendaItem[]) => {
  return agenda.reduce((groups: { [key: string]: IAgendaItem[] }, item) => {
    if (!groups[item.day]) {
      groups[item.day] = [];
    }
    groups[item.day].push(item);
    return groups;
  }, {});
};

const formatTime = (time: Date) => moment(time).format("hh:mm");

const groupAgendaTimeslots = (agenda: IAgendaItem[]) => {
  return agenda.reduce((groups: { [key: string]: IAgendaItem[] }, item) => {
    const timeslot = `${formatTime(item.startTime)} - ${formatTime(
      item.endTime
    )}`;
    if (!groups[timeslot]) {
      groups[timeslot] = [];
    }
    groups[timeslot].push(item);
    return groups;
  }, {});
};

export { groupAgendaDays, groupAgendaTimeslots, formatTime };
