import React from 'react';

const GoalForm = ({handleChange, handleSubmit, values, match}) => (
  <form onSubmit={handleSubmit}>
    <label>Category</label>
    <input type='text' name='category' value={match.params.category} disabled={true} />
    <br />
    <label>Item</label>
    <input type='text' name='item' value={values.item} onChange={handleChange} />
    <br />
    <label>Goal</label>
    <input type='number' name='goal' value={values.goal} onChange={handleChange} />
    <br />
    <label>Interval</label>
    <input type='text' name='interval' value={values.interval} onChange={handleChange} />
    <br />

    <input type="submit" value="submit" />
  </form>
)

export default GoalForm;
