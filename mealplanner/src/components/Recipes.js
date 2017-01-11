import React, { Component } from 'react';

import Recipe from './Recipe';
import samples from '../sample-items';

import '../css/Recipes.css';

class Recipes extends Component {
  render() {
    return (
      <div className="container">
        <div className="gallery">
          {Object.keys(samples)
            .map(key => <Recipe
                          item={samples[key]}
                          key={key}
                          index={key} />
            )}
        </div>
      </div>
    );
  }
}

export default Recipes;
