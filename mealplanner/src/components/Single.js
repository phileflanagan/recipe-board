import React, { Component } from 'react';

import TopBar from './TopBar';
import Footer from './Footer';

import '../css/Single.css';

class Single extends Component {
  render() {
    return (
      <div className="App">
        <TopBar />
        <p>Single Recipe Here</p>
        <Footer />
      </div>
    );
  }
}

export default Single;
