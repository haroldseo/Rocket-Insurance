import React, { useState } from "react";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Client } from "../interfaces/client";
import { Quote } from "../interfaces/quote";
import RatingInformation from "./RatingInformation/RatingInformation";
import QuoteOverview from "./QuoteOverview/QuoteOverview";

const App = () => {
  const [quote, setQuote] = useState<Quote>({
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
  });

  const onClientSubmit = async (client: Client) => {
    const response = await axios.post("https://fed-challenge-api.sure.now.sh/api/v1/quotes", client);

    setQuote(response.data.quote);
  };

  return (
    <Router>
      <div className='ui container'>
        <h2>Rocket Insurance</h2>
        <Routes>
          <Route path='/' element={<RatingInformation onClientSubmit={onClientSubmit} />} />
          <Route path='/quote' element={<QuoteOverview quote={quote} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
