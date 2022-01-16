export interface UpdatedQuote {
  quote: {
    quoteId: string;
    rating_address: {
      line_1: string;
      line_2: string;
      city: string;
      region: string;
      postal: string;
    };
    policy_holder: {
      first_name: string;
      last_name: string;
    };
    variable_selections: {
      deductible: number;
      asteroid_collision: number;
    };
  };
}
