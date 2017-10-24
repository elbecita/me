'use strict';

import React from 'react';

const NavBar = () => {
  return (
      <nav className="navbar fixed-top navbar-toggleable-md navbar-light bg-faded">
        <div className="container">
          <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
            data-target="#navbar-links" aria-controls="navbar-links" aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbar-links">
            <div className="navbar-nav">
              <a className="nav-item nav-link active" href="#">Home <span className="sr-only">(current)</span></a>
              <a className="nav-item nav-link" href="#">About</a>
              <a className="nav-item nav-link" href="#">Blog</a>
            </div>
          </div>
        </div>
      </nav>
  );
};

export default NavBar;