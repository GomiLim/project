import React, { useState } from 'react';

const SimpleHabit = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <li className='habit'>
        <span className='habit-name'>Reading</span>
        <span className='habit-count'>{count}</span>
        <button className='habit-button habit-increase' onClick={handleIncrement}>
          <i className='fas fa-plus-square'></i>
        </button>
      </li>
    </div>
  );
};

export default SimpleHabit;
