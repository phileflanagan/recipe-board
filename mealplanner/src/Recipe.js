import React, { Component } from 'react';

import './Recipe.css';

class Recipe extends Component {
  render() {
    return (
      <div className="recipe-card">
        <div className="thumb"><img src="http://www.fillmurray.com/500/300" alt="Recipe"/></div>
        <div className="desc">
          <h3>Atkilt Wat</h3>
          <p>Ethiopian Cabbage and Potatoes</p>
            <div className="tags">
              <ul>
                <li>Spicy</li>
                <li>Potato</li>
                <li>Cabbage</li>
              </ul>
            </div>
            <div className="likes"><span className="heart-count">347</span><span className="heart">&hearts;</span></div>
        </div>
      </div>
    );
  }
}

export default Recipe;
