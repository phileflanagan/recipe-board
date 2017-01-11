import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Match, Miss } from 'react-router';


import App from './components/App';
import Single from './components/Single';
import NotFound from './components/NotFound';

import About from './components/About';
import Contact from './components/Contact';

import './index.css';

const Root = () => {
  return (
    <BrowserRouter>
      <div>
        <Match exactly pattern="/" component={App} />
        <Match exactly pattern="/about" component={About} />
        <Match exactly pattern="/contact" component={Contact} />
        <Match pattern="/recipe/:recipeId" component={Single}/>
        <Miss component={NotFound} />
      </div>
    </BrowserRouter>
  );
}

ReactDOM.render(
  <Root />,
  document.getElementById('root')
);
