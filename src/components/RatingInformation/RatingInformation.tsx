import React, { useState, ChangeEvent, FormEvent } from "react";
import { useNavigate } from "react-router-dom";

import { Client } from "../../interfaces/client";

type TonClientSubmit = { onClientSubmit: (client: Client) => void };

const RatingInformation = ({ onClientSubmit }: TonClientSubmit) => {
  const [client, setClient] = useState<Client>({
    first_name: "",
    last_name: "",
    address: {
      line_1: "",
      line_2: "",
      city: "",
      region: "",
      postal: "",
    },
  });

  const navigate = useNavigate();

  const onNameInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setClient({ ...client, [e.target.name]: e.target.value });
  };

  const onAddressInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setClient({ ...client, address: { ...client.address, [e.target.name]: e.target.value } });
  };

  const onFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    onClientSubmit(client);
    navigate("/quote");
  };

  return (
    <div>
      <h1 className='component-header'>Sign up for a free quote!</h1>
      <form onSubmit={onFormSubmit} className='ui form'>
        <div className='field'>
          <label>Name</label>
          <div className='two fields'>
            <div className='field'>
              <input
                type='text'
                onChange={onNameInputChange}
                value={client.first_name}
                name='first_name'
                placeholder='First Name'
                required
              />
            </div>
            <div className='field'>
              <input
                type='text'
                onChange={onNameInputChange}
                value={client.last_name}
                name='last_name'
                placeholder='Last Name'
                required
              />
            </div>
          </div>
        </div>
        <div className='field'>
          <label>Address</label>
          <div className='fields'>
            <div className='twelve wide field'>
              <input
                type='text'
                onChange={onAddressInputChange}
                value={client.address.line_1}
                name='line_1'
                placeholder='Street'
                required
              />
            </div>
            <div className='four wide field'>
              <input
                type='text'
                onChange={onAddressInputChange}
                value={client.address.line_2}
                name='line_2'
                placeholder='Apt, Unit, Suite'
              />
            </div>
          </div>
        </div>
        <div className='three fields'>
          <div className='field'>
            <input
              type='text'
              onChange={onAddressInputChange}
              value={client.address.city}
              name='city'
              placeholder='City'
              required
            />
          </div>
          <div className='field'>
            <input
              type='text'
              onChange={onAddressInputChange}
              value={client.address.region}
              name='region'
              placeholder='State'
              required
            />
          </div>
          <div className='field'>
            <input
              type='text'
              onChange={onAddressInputChange}
              value={client.address.postal}
              name='postal'
              placeholder='Postal'
              required
            />
          </div>
        </div>
        <button className='ui button' type='submit'>
          Submit
        </button>
      </form>
    </div>
  );
};

export default RatingInformation;
