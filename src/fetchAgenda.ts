import { useState, useEffect } from "react";
import { groupAgendaDays, AgendaDays } from "./agendaUtils";

export default function useAgenda(): [boolean, AgendaDays] {
  const [isLoading, setLoading] = useState(true);
  const [agenda, setAgenda] = useState<AgendaDays>({});

  useEffect(() => {
    fetch("/agenda.json")
      .then(res => res.json())
      .then(agenda => {
        setAgenda(groupAgendaDays(agenda));
        setLoading(false);
      });
  }, []);

  return [isLoading, agenda];
}
