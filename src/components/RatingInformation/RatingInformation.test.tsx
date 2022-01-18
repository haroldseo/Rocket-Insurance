import React from "react";
import { render, screen, fireEvent, waitFor, cleanup } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

import RatingInformation from "./RatingInformation";

const mockClientSubmit = jest.fn(() => Promise.resolve({ data: {} }));

describe("Rating Information Component", () => {
  afterEach(cleanup);
  test("renders correctly", () => {
    render(
      <Router>
        <RatingInformation onClientSubmit={mockClientSubmit} />
      </Router>
    );
    expect(screen.getByText("Sign up for a free quote!")).not.toBeNull();
  });

  test("api request", async () => {
    render(
      <Router>
        <RatingInformation onClientSubmit={mockClientSubmit} />
      </Router>
    );
    mockClientSubmit.mockImplementationOnce(() => Promise.resolve({ data: { quote: {} } }));
    fireEvent.submit(screen.getByTestId("rating_info"));
    await waitFor(() => {
      expect(mockClientSubmit).toHaveBeenCalledTimes(1);
    });
  });

  test("user input onChange", () => {
    render(
      <Router>
        <RatingInformation onClientSubmit={mockClientSubmit} />
      </Router>
    );
    const inputElement = screen.getByPlaceholderText("First Name") as HTMLInputElement;
    fireEvent.change(inputElement, { target: { value: "Harold" } });
    expect(inputElement.value).toBe("Harold");
  });

  test("form submit", () => {
    render(
      <Router>
        <RatingInformation onClientSubmit={mockClientSubmit} />
      </Router>
    );
    const button = screen.getByText("Submit");
    fireEvent.click(button);
    expect(mockClientSubmit).toHaveBeenCalledTimes(1);
  });
});
