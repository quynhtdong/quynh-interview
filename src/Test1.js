
import React from "react";
import "./App.css";

function Test1(props) {

  return (
    <div >
      <header className="container">
        <img className="header-img-desktop" src="http://via.placeholder.com/1920x650" />
        <img className="header-img-mobile" src="http://via.placeholder.com/600x600" />
        <div className="header-content">
        <h1 id="header-title">Hello Developer!</h1>
        <p id="header-subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </div>
      </header>
        <body className="container">
          <div className="row">
          <div className="card col-sm">
            <img className="card-img" src="http://via.placeholder.com/400x300" />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <div><button type="button" className="btn btn-outline-dark">READ MORE</button></div>
          </div>
          <div className="card col-sm">
            <img className="card-img" src="http://via.placeholder.com/400x300" />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <div><button type="button" className="btn btn-outline-dark">READ MORE</button></div>
          </div>
          <div className="card col-sm">
            <img className="card-img" src="http://via.placeholder.com/400x300" />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <div><button type="button" className="btn btn-outline-dark">READ MORE</button></div>
          </div>
          </div>
        </body>
    </div>
  );
}

export default Test1;

