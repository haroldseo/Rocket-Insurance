import axios from "axios";
import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { useNavigate } from "react-router-dom";

import { Quote } from "../../interfaces/quote";
import { UpdatedQuote } from "../../interfaces/updatedQuote";

type Tquote = { quote: Quote };

const QuoteOverview = ({ quote }: Tquote) => {
  const [premium, setPremium] = useState(quote.premium);
  const [updatedQuote, setUpdatedQuote] = useState<UpdatedQuote>({
    quote: {
      quoteId: quote.quoteId,
      rating_address: quote.rating_address,
      policy_holder: quote.policy_holder,
      variable_selections: quote.variable_selections,
    },
  });

  const navigate = useNavigate();

  useEffect(() => {
    setUpdatedQuote({
      ...updatedQuote,
      quote: {
        ...updatedQuote.quote,
        quoteId: quote.quoteId,
        rating_address: quote.rating_address,
        policy_holder: quote.policy_holder,
        variable_selections: quote.variable_selections,
      },
    });
    setPremium(quote.premium);
  }, [quote]);

  const deductibleOptions = quote.variable_options.deductible;
  const deductibles = deductibleOptions.values.map((deductible) => {
    return (
      <option key={deductibleOptions.values.indexOf(deductible)} value={deductible}>
        {deductible}
      </option>
    );
  });

  const asteroidCollisionOptions = quote.variable_options.asteroid_collision;
  const asteroid_collisions = asteroidCollisionOptions.values.map((asteroid_collision) => {
    return (
      <option key={asteroidCollisionOptions.values.indexOf(asteroid_collision)} value={asteroid_collision}>
        {asteroid_collision}
      </option>
    );
  });

  const onSelectionChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setUpdatedQuote({
      ...updatedQuote,
      quote: {
        ...updatedQuote.quote,
        variable_selections: { ...updatedQuote.quote.variable_selections, [e.target.name]: parseInt(e.target.value) },
      },
    });
  };

  const onQuoteUpdate = async (update: UpdatedQuote) => {
    const response = await axios.put(`https://fed-challenge-api.sure.now.sh/api/v1/quotes/${quote.quoteId}`, update);
    setPremium(response.data.quote.premium);
  };

  const onUpdateSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    onQuoteUpdate(updatedQuote);
  };

  return (
    <div>
      <div className='quote-overview-container'>
        <div className='component-header'>
          <h1 data-testid='quote_overview_header'>
            Annual Premium:
            <br />${premium}
          </h1>
        </div>

        <form onSubmit={onUpdateSubmit} className='ui form'>
          <div className='two fields'>
            <div className='field'>
              <h4>{deductibleOptions.title}</h4>
              <p>{deductibleOptions.description}</p>
              <select className='ui dropdown' onChange={onSelectionChange} name='deductible'>
                {deductibles}
              </select>
            </div>
            <div className='field'>
              <h4>{asteroidCollisionOptions.title}</h4>
              <p>{asteroidCollisionOptions.description}</p>
              <select className='ui dropdown' onChange={onSelectionChange} name='asteroid_collision'>
                {asteroid_collisions}
              </select>
            </div>
          </div>
          <button className='ui button' type='submit'>
            Update
          </button>
          <button
            className='ui button right'
            onClick={() => {
              navigate(-1);
            }}
          >
            Start Over
          </button>
        </form>
      </div>
    </div>
  );
};

export default QuoteOverview;
