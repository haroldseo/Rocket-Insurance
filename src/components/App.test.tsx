import React from "react";
import { render, screen } from "@testing-library/react";

import App from "./App";

describe("App Component", () => {
  test("renders correctly", () => {
    render(<App />);
    expect(screen.getByText("Rocket Insurance 🚀")).not.toBeNull();
  });
});
