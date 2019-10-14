export interface IAgendaItem {
  day: string;
  startTime: Date;
  endTime: Date;
  room: string;
  title: string;
  speaker: string;
}

const mapAgenda = (agenda: IAgendaItem[]) => {
  return agenda.reduce((groups: { [key: string]: IAgendaItem[] }, item) => {
    if (!groups[item.day]) {
      groups[item.day] = [];
    }
    groups[item.day].push(item);
    return groups;
  }, {});
};

export { mapAgenda };
