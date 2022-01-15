import React from "react";

import { Quote } from "../../interfaces/quote";

type Tquote = { quote: Quote };

const QuoteOverview = ({ quote }: Tquote) => {
  const deductibleOptions = quote.variable_options.deductible;
  const deductibles = deductibleOptions.values.map((deductible) => {
    return (
      <option key={deductibleOptions.values.indexOf(deductible)} value={deductibleOptions.values.indexOf(deductible)}>
        {deductible}
      </option>
    );
  });

  const asteroidCollisionOptions = quote.variable_options.asteroid_collision;
  const asteroid_collisions = asteroidCollisionOptions.values.map((asteroid_collision) => {
    return (
      <option
        key={asteroidCollisionOptions.values.indexOf(asteroid_collision)}
        value={asteroidCollisionOptions.values.indexOf(asteroid_collision)}
      >
        {asteroid_collision}
      </option>
    );
  });

  return (
    <div className='ui container'>
      <h3>Quote Overview</h3>
      <div>Annual Premium: {quote.premium}</div>

      <form className='ui form'>
        <div className='two fields'>
          <div className='field'>
            <h4>{deductibleOptions.title}:</h4>
            <p>{deductibleOptions.description}</p>
            <select className='ui dropdown' name='deductible'>
              {deductibles}
            </select>
          </div>
          <div className='field'>
            <h4>{asteroidCollisionOptions.title}:</h4>
            <p>{asteroidCollisionOptions.description}</p>
            <select className='ui dropdown' name='asteroid_collision'>
              {asteroid_collisions}
            </select>
          </div>
        </div>
        <button className='ui button' type='submit'>
          Update
        </button>
      </form>
    </div>
  );
};

export default QuoteOverview;
