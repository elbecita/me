'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  return (
    <div>
      Hello world! {'<3'}
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector('.container'));
