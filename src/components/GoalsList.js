import React from 'react';
import { Link } from 'react-router-dom';
import GoalCard from './GoalCard';
import NewGoalButton from './NewGoalButton';

const GoalsList = ({goals}) => {
  return (
    <div>
      <Link to='/goals/new'>
        <NewGoalButton />
      </Link>
      <ul className='cards'>
        {goals.map(goal => (
          <GoalCard key={goal.id} goal={goal} />
        ))}
      </ul>
    </div>
  )
}

export default GoalsList
