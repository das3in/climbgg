import React from 'react';
import GoalCard from './GoalCard';
import '../GoalCard.css';

const GoalsList = ({goals}) => {

  return (
    <ul className="cards">
      {goals.map(goal => (
        <GoalCard key={goal.id} goal={goal} />
      ))}
    </ul>
  )
}

export default GoalsList
