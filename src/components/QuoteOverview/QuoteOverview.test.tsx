import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

import QuoteOverview from "./QuoteOverview";

const mockQuote = {
  quoteId: "",
  rating_address: {
    line_1: "",
    line_2: "",
    city: "",
    region: "",
    postal: "",
  },
  policy_holder: {
    first_name: "",
    last_name: "",
  },
  variable_options: {
    deductible: {
      title: "",
      description: "",
      values: [],
    },
    asteroid_collision: {
      title: "",
      description: "",
      values: [],
    },
  },
  variable_selections: {
    deductible: 0,
    asteroid_collision: 0,
  },
  premium: 0,
};

// const mockQuoteUpdate = jest.fn(() => Promise.resolve({ data: {} }));

describe("Quote Overview Component", () => {
  afterEach(cleanup);
  test("renders correctly", () => {
    render(
      <Router>
        <QuoteOverview quote={mockQuote} />
      </Router>
    );
    expect(screen.getByTestId("quote_overview_header")).not.toBeNull();
  });

  test("user input selection change", () => {
    render(
      <Router>
        <QuoteOverview quote={mockQuote} />
      </Router>
    );
    // const selectElement = screen.getByTestId("selection_change");
    // const selectOptionElement = screen.getByTestId("selection_option_change");
    // userEvent.selectOptions(selectElement, selectOptionElement);
    // fireEvent.change(selectElement, { target: { value: "1" } });
    // expect(selectOptionElement.selected).toBeTruthy();
  });

  test("form update submit", () => {
    render(
      <Router>
        <QuoteOverview quote={mockQuote} />
      </Router>
    );

    // const updateForm = screen.getByTestId("update_submit");
    // fireEvent.submit(updateForm);
    // expect(mockQuoteUpdate).toHaveBeenCalledTimes(1);
  });
});
