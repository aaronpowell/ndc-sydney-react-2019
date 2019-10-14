import React from "react";
import Day from "./Day";
import { render } from "@testing-library/react";

it("will group by times", () => {
  const agenda = [
    {
      day: "test",
      startTime: { hour: 9, minutes: 0 },
      endTime: { hour: 10, minutes: 0 },
      title: "title 1",
      speaker: "speaker 1",
      room: "test room"
    },
    {
      day: "test",
      startTime: { hour: 9, minutes: 0 },
      endTime: { hour: 10, minutes: 0 },
      title: "title 2",
      speaker: "speaker 2",
      room: "test room"
    },
    {
      day: "test",
      startTime: { hour: 10, minutes: 20 },
      endTime: { hour: 11, minutes: 20 },
      title: "title 3",
      speaker: "speaker 3",
      room: "test room"
    }
  ];

  const { asFragment } = render(<Day day="test" agenda={agenda} />);

  expect(asFragment()).toMatchSnapshot();
});
