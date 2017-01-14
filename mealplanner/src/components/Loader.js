import React from 'react';
import '../css/Loader.css';

const Loader = () => {
  return (
    <div className="loading">
    <div className="loader">
    	<span className="sl-topbun"></span>
    	<span className="sl-lettuce"></span>
    	<div className="sl-tomatoes">
    		<span className="sl-tomato"></span>
    		<span className="sl-tomato"></span>
    	</div>
    	<div className="sl-onions">
    		<span className="sl-onion"></span>
    		<span className="sl-onion"></span>
    	</div>
    	<div className="sl-pickles">
    		<span className="sl-pickle"></span>
    		<span className="sl-pickle"></span>
    		<span className="sl-pickle"></span>
    	</div>
    	<span className="sl-burger"></span>
    	<span className="sl-bottombun"></span>
    </div>
    <h1>Content Loading</h1>
    <h2>Please Wait</h2>
    </div>

  );
}

export default Loader;
