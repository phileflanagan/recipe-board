import React, { Component } from 'react';
import { Preload } from 'react-preload';

import Loader from './Loader';
import Recipe from './Recipe';
import samples from '../sample-items';

import '../css/Recipes.css';

class Recipes extends Component {
  render() {
    const loadingIndicator = Loader();
    const images = Object.keys(samples).map(key => samples[key].image);

    return (
      <div className="container">

        <Preload
          loadingIndicator={loadingIndicator}
          images={images}
          autoResolveDelay={5000}
          resolveOnError={true}
          mountChildren={true}>
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
