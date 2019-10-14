import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Talk from "./Talk";

it("will render the name of the talk and speaker", () => {
  const { getByText } = render(<Talk title="title" speaker="speaker" />);

  expect(getByText("title - speaker")).toHaveTextContent("title - speaker");
});
