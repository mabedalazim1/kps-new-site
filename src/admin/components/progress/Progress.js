import PropTypes from 'prop-types';
import { useState,useEffect } from 'react';

const Progress = ({ percentage }) => {
  const [hide, setHide] = useState("hidden");
  
  useEffect(() => {
    percentage !== 0 ? setHide("visible") : setHide("hidden")
  },[percentage])

  return (
    <div className='progress' style={ { width: `${percentage}%` ,visibility:`${hide}`} }>
      <div
        className='progress-bar progress-bar-striped bg-success'
        role='progressbar'
        style={ { width: `${percentage}%` }}
      >
        {percentage}%
      </div>
    </div>
  );
};

Progress.propTypes = {
  percentage: PropTypes.number.isRequired
};

export default Progress;