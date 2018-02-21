import React from 'react';
import { Link } from 'react-router-dom';

const CategoryCard = ({category}) => (
    <li className='category-card'>
      <Link to={`/goals/new/${category.name}`} className='category-link'>
        <div className='cards__test-wrapper '>
          <div className='card-text'>
            <h2 className='card-title'>{category.name}</h2>
          </div>
        </div>
      </Link>
    </li>
)

export default CategoryCard;
