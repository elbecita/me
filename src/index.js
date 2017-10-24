'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

import NavBar from './components/nav-bar';
import Header from './components/header';

const App = () => {
  return (
    <div>
      <NavBar />
      <Header />
      <div className="container">
        Hello world! In progress... {'<3'}
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector('body'));
