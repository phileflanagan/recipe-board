import React, { Component, PropTypes } from 'react';
import '../css/Details.css';

class Details extends Component {
  static propTypes = {
    item: PropTypes.object.isRequired,
    index: PropTypes.string.isRequired
  }

  renderIngs = (ingredients) => {
    if (ingredients === []) return;

    return (
      <div className="ingredients">
        <h2 className="details-header">Ingredients</h2>
        <ul>
          {ingredients.map((ing, i) => <li key={i}>{ing}</li>)}
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
