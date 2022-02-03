import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
const Message = ({ msg, delay , handelCancel }) => {
  const [isVisible, setIsVisible] = useState(true); 

  const setTimer = (delay) =>
    {
    setTimeout(() => {
      setIsVisible(false)
      handelCancel()
    }, delay);
    };

  useEffect(() =>
  {
      setIsVisible(true)
      setTimer(delay)
  }, []);

  return (
  <>
     {!isVisible ? "" : 
    <div className='alert alert-info alert-dismissible fade show' role='alert'>
      {msg}
      <button
        type='button'
        className='close'
        data-dismiss='alert'
        aria-label='Close'
      >
        <span aria-hidden='true'>&times;</span>
      </button>
        </div>
      }
    </>
   
  );
};

Message.propTypes = {
  msg: PropTypes.string.isRequired,
  delay: PropTypes.number.isRequired,
};

export default Message;