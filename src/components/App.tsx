import React from "react";

import { Client } from "../interfaces/client";
import RatingInformation from "./RatingInformation/RatingInformation";

const App = () => {
  const onClientSubmit = (client: Client) => {
    console.log(client);
  };

  return (
    <div className='ui container'>
      <RatingInformation onClientSubmit={onClientSubmit} />
    </div>
  );
};

export default App;
