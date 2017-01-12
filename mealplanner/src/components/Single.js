import React, { Component } from 'react';
import '../css/Single.css';

import sampleItems from '../sample-items';
import Recipe from './Recipe';
import Details from './Details';
import Comments from './Comments';

class Single extends Component {
  render() {
    const { recipeId } = this.props.params;

    return (
      <div className="container">
        <div className="single">
          <Recipe index={recipeId} item={sampleItems[recipeId]} />
          <Details index={recipeId} item={sampleItems[recipeId]} />
          <Comments />
        </div>
      </div>
    );
  }
}

export default Single;
