import React from 'react';
import ProgressCircle from './ProgressCircle';

const GoalCard = ({goal}) => (
  <li>
    <div className="cards__test-wrapper card">
      <div className="progress-indicator">
      <ProgressCircle value={goal.value} goal={goal.goal} />
    </div>
    <div className="card-text">
      <h2 className="card-title">{goal.category}</h2>
      <p className="card-text">{goal.value} / {goal.goal} {goal.item} per {goal.interval}</p>
    </div>
  </div>
  </li>
)

export default GoalCard;
