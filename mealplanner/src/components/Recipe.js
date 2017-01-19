import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

import FontAwesome from 'react-fontawesome';
import '../css/Recipe.css';

class Recipe extends Component {
  static propTypes = {
    item: PropTypes.object.isRequired,
    index: PropTypes.string.isRequired
  }

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
    const { name, image, desc, likes, commentCount, tags} = this.props.item;

    return (
      <div className="recipe-card">
        <div className="recipe-card-content">
            <Link to={`/recipe/${this.props.index}`}><img src={image} alt={name}/></Link>
            <div className="desc">
              <Link to={`/recipe/${this.props.index}`}><h3>{name}</h3></Link>
              <p>{desc}</p>
              {this.renderTags(tags)}
            </div>
            <div className="likes">
              <Link to={`/recipe/${this.props.index}`} className="card-btn">
                <span className="count">{commentCount}</span>
                <span className="count-icon"><i className="fa fa-comment"></i></span>
              </Link>
              <a href="#" className="card-btn">
                <span className="count">{likes}</span>
                <span className="count-icon"><i className="fa fa-heart"></i></span>
              </a>
            </div>
        </div>
      </div>
    );
  }
}

export default Recipe;
