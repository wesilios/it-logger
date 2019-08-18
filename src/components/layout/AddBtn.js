import React from 'react';

const AddBtn = () => {
  return (
    <div className='fixed-action-btn'>
      <a
        href='#add-log-modal'
        className='btn-floating btn-large blue darken-2 modal-trigger'
      >
        <i className='large material-icons'>add</i>
      </a>
      <ul>
        <li>
          <a
            href='#tech-list-modal'
            className='btn-floating green darken-2 modal-trigger'
          >
            <i className='material-icons'>people</i>
          </a>
        </li>
        <li>
          <a
            href='#add-tech-modal'
            className='btn-floating red darken-2 modal-trigger'
          >
            <i className='material-icons'>person</i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default AddBtn;
