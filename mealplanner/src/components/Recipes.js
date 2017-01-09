import React, { Component } from 'react';

import Recipe from './Recipe';

import '../css/Recipes.css';

class Recipes extends Component {
  render() {
    return (
      <div className="gallery">
        {Object.keys(this.props.recipeList)
          .map(key => <Recipe
                        item={this.props.recipeList[key]}
                        key={key}
                        index={key} />
          )}
      </div>
    );
  }
}

export default Recipes;
