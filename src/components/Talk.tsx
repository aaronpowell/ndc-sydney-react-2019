import React, { useContext } from "react";
import styles from "styled-components";
import { SessionBuilderContext } from "../SessionBuilderContextProvider";
import { IAgendaItem } from "../agendaUtils";

interface ITalkProps {
  title: string;
  speaker: string;
  talk: IAgendaItem;
}

const Container = styles.div`
  width: 200px;
  display: inline-block;
  vertical-align: top;
  padding: 5px;
  margin: 5px;
  border: 1px solid #BADA55;
  border-radius: 5px;
  min-height: 100px;
  box-shadow: 5px 10px 8px #888888;
  cursor: pointer;
`;

const Talk: React.FC<ITalkProps> = ({ title, speaker, talk }) => {
  const [_, setSessions] = useContext(SessionBuilderContext);
  return (
    <Container onClick={() => setSessions(talk)}>
      <em>{title}</em>
      <br />
      <strong>{speaker}</strong>
    </Container>
  );
};

export default Talk;
