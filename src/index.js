'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

import NavBar from './components/nav-bar';
import Mask from './components/mask';
import About from './components/about';
import Blog from './components/blog';
import './styles/styles.scss';

const App = () => {
  return (
    <div>
      <header>
        <NavBar />
        <Mask />
      </header>
      <main>
        <About />
        <Blog />
      </main>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('site'));
