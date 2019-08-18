import React, { useState } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';

const AddTechModal = () => {
  const [firstName, setFirstname] = useState('');
  const [lastName, setLastname] = useState('');

  const onSubmit = () => {
    if (firstName === '' || lastName === '') {
      M.toast({ html: 'Please enter a first and last name' });
    } else {
      console.log(firstName, lastName);
      // Clear fields
      setFirstname('');
      setLastname('');
    }
  };

  return (
    <div id='add-tech-modal' className='modal'>
      <div className='modal-content'>
        <h4>New Technician</h4>
        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              name='firstName'
              value={firstName}
              onChange={e => setFirstname(e.target.value)}
            />
            <label htmlFor='message' className='active'>
              First Name
            </label>
          </div>
        </div>
        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              name='lastName'
              value={lastName}
              onChange={e => setLastname(e.target.value)}
            />
            <label htmlFor='message' className='active'>
              Last Name
            </label>
          </div>
        </div>
      </div>
      <div className='modal-footer'>
        <button
          className='btn waves-effect waves-light'
          type='submit'
          name='action'
          onClick={onSubmit}
        >
          Submit
          <i className='material-icons right'>send</i>
        </button>
      </div>
    </div>
  );
};

export default AddTechModal;
