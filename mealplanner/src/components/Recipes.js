import React, { Component } from 'react';
import { Preload } from 'react-preload';

import Recipe from './Recipe';
import samples from '../sample-items';

import '../css/Recipes.css';

class Recipes extends Component {
  _handleImageLoadError = () => {
    return;
  }

  _handleImageLoadSuccess = () => {
    return;
  }

  render() {
    const loadingIndicator = <div>Loading...</div>;
    const images = Object.keys(samples).map(key => samples[key].image);

    return (
      <div className="container">

        <Preload
          loadingIndicator={loadingIndicator}
          images={images}
          autoResolveDelay={5000}
          onError={this._handleImageLoadError}
          onSuccess={this._handleImageLoadSuccess}
          resolveOnError={true}
          mountChildren={true}
          >
          <div className="gallery">
            {Object.keys(samples)
              .map(key => <Recipe
                            item={samples[key]}
                            key={key}
                            index={key} />
              )}
          </div>
        </Preload>

      </div>
    );
  }
}

export default Recipes;
