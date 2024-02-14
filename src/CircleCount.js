
import React from 'react';
import './CircleCount.css';

const CircleCount = ({ grey, onClick }) => {
  return (
    <div className={`circle-count ${grey ? 'grey' : ''}`} onClick={onClick}>
      <div className={`circle ${grey ? 'grey' : ''}`}></div>
    </div>
  );
};

export default CircleCount;
