import React, { Component, PropTypes } from 'react';
import '../css/Details.css';

class Details extends Component {
  static propTypes = {
    item: PropTypes.object.isRequired,
    index: PropTypes.string.isRequired
  }

  renderIngs = (ingredients) => {
    if (!ingredients) return;

    return (
      <div className="ingredients">
        <h2 className="details-header">Ingredients</h2>
        <ul>
          {ingredients.map((ing, i) => <li key={i}>{ing}</li>)}
        </ul>
      </div>
    );
  }

  renderMethod = (method) => {
    if (!method) return;

    return (
      <div className="method">
        <h2 className="details-header">Method</h2>
        <p>{ method }</p>
      </div>
    );
  }

  renderNotes = (notes) => {
    if (!notes) return;

    return (
      <div className="notes">
        <h2 className="details-header">Notes</h2>
        <p>{ notes }</p>
      </div>
    );
  }

  noRecipe = (ingredients, method, notes) => {
    if (ingredients || method || notes) return;

    return (
      <p>Recipe Coming Soon!</p>
    );
  }

  render() {
    const { ingredients, method, notes } = this.props.item.recipe || {};
    return (
      <div className="recipe-details card">
        {this.noRecipe(ingredients, method, notes)}
        {this.renderIngs(ingredients)}
        {this.renderMethod(method)}
        {this.renderNotes(notes)}
      </div>
    );
  }
}

export default Details;
