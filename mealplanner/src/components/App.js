import React, { Component } from 'react';
import '../css/App.css';

import TopBar from './TopBar';
import Footer from './Footer';
import Recipes from './Recipes';
import samples from '../sample-items';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopBar />
        <Recipes recipeList={samples} />
        <Footer />
      </div>
    );
  }
}

export default App;
