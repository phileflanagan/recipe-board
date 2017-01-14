import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

import '../css/Recipe.css';

class Recipe extends Component {
  static propTypes = {
    item: PropTypes.object.isRequired,
    index: PropTypes.string.isRequired
  };

  renderTags = (tags) => {
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
      <div className="recipe-card card">
        <div className="thumb">
          <Link to={`/recipe/${this.props.index}`}><img src={image} alt={name}/></Link>
        </div>
        <div className="desc">
          <h3>
            <Link to={`/recipe/${this.props.index}`}>{name}</Link>
          </h3>
          <p>{desc}</p>
          {this.renderTags(tags)}
            <div className="likes">
              <Link to={`/recipe/${this.props.index}`} className="card-btn">
                <span className="count">{commentCount}</span>
                <span className="count-icon">comments</span>
              </Link>
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

export default Recipe;
