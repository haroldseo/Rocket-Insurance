import React from "react";
import axios from "axios";

import { Client } from "../interfaces/client";
import RatingInformation from "./RatingInformation/RatingInformation";

const App = () => {
  const onClientSubmit = async (client: Client) => {
    const response = await axios.post("https://fed-challenge-api.sure.now.sh/api/v1/quotes", client);
    console.log(response.data.quote);
  };

  return (
    <div className='ui container'>
      <RatingInformation onClientSubmit={onClientSubmit} />
    </div>
  );
};

export default App;
