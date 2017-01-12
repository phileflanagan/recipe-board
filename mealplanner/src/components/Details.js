import React from 'react';
import '../css/Details.css';

const Details = (props) => {
  console.log(props.item.recipe)
  return (
    <div className="recipe-details card">
      <p>Recipe Coming Soon</p>
    </div>
  );
}

export default Details;
