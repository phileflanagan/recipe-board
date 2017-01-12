import React, { Component } from 'react';
import '../css/Details.css';

class Details extends Component {
  constructor() {
    super();
    this.renderIngs = this.renderIngs.bind(this);
  }

  renderIngs(ings) {
    if (ings === []) return;
    console.log(ings);
    return (
      <div className="ingredients">
        <h2 className="details-header">Ingredients</h2>
        <ul>
          {ings.map((ing, i) => <li key={i}>{ing}</li>)}
        </ul>
      </div>
    );
  }

  render() {
    const { ingredients, method } = this.props.item.recipe;
    return (
      <div className="recipe-details card">
        {this.renderIngs(ingredients)}
        <p className="method">{ method }</p>
      </div>
    );
  }
}

export default Details;
