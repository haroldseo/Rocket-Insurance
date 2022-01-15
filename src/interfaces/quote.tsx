export interface Quote {
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
  variable_options: {
    deductible: {
      title: string;
      description: string;
      values: number[];
    };
    asteroid_collision: {
      title: string;
      description: string;
      values: number[];
    };
  };
  variable_selections: {
    deductible: number;
    asteroid_collision: number;
  };
  premium: number;
}
