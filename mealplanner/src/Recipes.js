import React, { Component } from 'react';

import Recipe from './Recipe';

import './Recipes.css';

class Recipes extends Component {
  render() {
    return (
      <div className="gallery">
        <Recipe />
        <Recipe />
        <Recipe />
        <Recipe />
        <Recipe />
        <Recipe />
        <Recipe />
      </div>
    );
  }
}

export default Recipes;
