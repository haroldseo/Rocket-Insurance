import React, { useState, ChangeEvent, FormEvent } from "react";
import { Client } from "../../interfaces/client";

type TonClientSubmit = { onClientSubmit: (client: Client) => void };

const RatingInformation = ({ onClientSubmit }: TonClientSubmit) => {
  const [client, setClient] = useState<Client>({
    firstName: "",
    lastName: "",
    address: {
      line1: "",
      line2: "",
      city: "",
      region: "",
      postal: "",
    },
  });

  const onNameInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setClient({ ...client, [e.target.name]: e.target.value });
  };

  const onAddressInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setClient({ ...client, address: { ...client.address, [e.target.name]: e.target.value } });
  };

  const onFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    onClientSubmit(client);
  };

  return (
    <div>
      <form onSubmit={onFormSubmit} className='ui form'>
        <div className='field'>
          <label>Name</label>
          <div className='two fields'>
            <div className='field'>
              <input
                type='text'
                onChange={onNameInputChange}
                value={client.firstName}
                name='firstName'
                placeholder='First Name'
              />
            </div>
            <div className='field'>
              <input
                type='text'
                onChange={onNameInputChange}
                value={client.lastName}
                name='lastName'
                placeholder='Last Name'
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
                value={client.address.line1}
                name='line1'
                placeholder='Street'
              />
            </div>
            <div className='four wide field'>
              <input
                type='text'
                onChange={onAddressInputChange}
                value={client.address.line2}
                name='line2'
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
            />
          </div>
          <div className='field'>
            <input
              type='text'
              onChange={onAddressInputChange}
              value={client.address.region}
              name='region'
              placeholder='Region'
            />
          </div>
          <div className='field'>
            <input
              type='text'
              onChange={onAddressInputChange}
              value={client.address.postal}
              name='postal'
              placeholder='Postal'
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
