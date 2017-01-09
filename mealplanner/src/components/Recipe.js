import React, { Component } from 'react';

import '../css/Recipe.css';

class Recipe extends Component {
  renderTags(tags) {
    if (!tags) return;

    return (
      <div className="tags">
        <ul>
          {tags.map(tag => <li key={tag}>{tag}</li>)}
        </ul>
      </div>
    );
  }

  render() {
    const { name, image, desc, likes, commentCount, comments, tags, recipe, recipeVideo } = this.props.item;

    return (
      <div className="recipe-card">
        <div className="thumb"><img src={image} alt="Recipe"/></div>
        <div className="desc">
          <h3>{name}</h3>
          <p>{desc}</p>
          {this.renderTags(tags)}
            <div className="likes">
              <button>
                <span className="count">{commentCount}</span>
                <span className="count-icon">comments</span>
              </button>
              <button>
                <span className="count">{likes}</span>
                <span className="count-icon">saves</span>
              </button>
            </div>
            {console.log('use these guys:', comments, recipe, recipeVideo)}
        </div>
      </div>
    );
  }
}

Recipe.propTypes = {
  item: React.PropTypes.object.isRequired,
  index: React.PropTypes.string.isRequired
}

export default Recipe;
