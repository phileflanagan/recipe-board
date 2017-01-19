import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Match, Miss } from 'react-router';

//Main Components
import Recipes from './components/Recipes';
import Single from './components/Single';

//404 Page
import NotFound from './components/NotFound';

//Static Elements
import TopBar from './components/TopBar';
import Footer from './components/Footer';

//Pages
import About from './components/About';
import Contact from './components/Contact';

import './index.css';

const Root = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <TopBar />
        <Match exactly pattern="/" component={Recipes} />
        <Match exactly pattern="/about" component={About} />
        <Match exactly pattern="/contact" component={Contact} />
        <Match pattern="/recipe/:recipeId" component={Single}/>
        <Miss component={NotFound} />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

ReactDOM.render(
  <Root />,
  document.getElementById('root')
);
