import React from 'react';

const ProgressCircle = ({value, goal}) => {
  const radius = 54;
  const circumference = 2 * Math.PI * radius;

  const progress = value / goal;

  const dashOffset = circumference * (1 - progress);
  const dashArray = circumference;

  return (
    <svg width='100' height='100' viewBox='0 0 120 120' className='progress'
    >
      <circle cx='60' cy='60' r={`${radius}`} fill='none'stroke='#e6e6e6' strokeWidth='12'/>
      <circle 
        cx='60' 
        cy='60' 
        r='54' 
        fill='none'
        stroke='#1ed66c'
        strokeWidth='12'
        strokeDasharray={`${dashArray}`}
        strokeDashoffset={`${dashOffset}`}
      />
    </svg>
)
}

export default ProgressCircle;
