import React from 'react';
import CategoryCard from './CategoryCard';

const ChoseCategory = ({categories}) => (
  <ul className='category-cards'>
    {categories.map(category => (
      <CategoryCard key={category.id} category={category} />
    ))}
  </ul>
)

export default ChoseCategory;
