import React from "react";

const RatingInformation = () => {
  return (
    <div>
      <form className='ui form'>
        <div className='field'>
          <label>Name</label>
          <div className='two fields'>
            <div className='field'>
              <input type='text' name='first_name' placeholder='First Name' />
            </div>
            <div className='field'>
              <input type='text' name='last_name' placeholder='Last Name' />
            </div>
          </div>
        </div>
        <div className='field'>
          <label>Address</label>
          <div className='fields'>
            <div className='twelve wide field'>
              <input type='text' name='line_1' placeholder='Street' />
            </div>
            <div className='four wide field'>
              <input type='text' name='line_2' placeholder='Apt, Unit, Suite' />
            </div>
          </div>
        </div>
        <div className='three fields'>
          <div className='field'>
            <input type='text' name='city' placeholder='City' />
          </div>
          <div className='field'>
            <input type='text' name='region' placeholder='Region' />
          </div>
          <div className='field'>
            <input type='text' name='postal' placeholder='Postal' />
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
