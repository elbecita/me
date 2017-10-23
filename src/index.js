<<<<<<< HEAD
'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  return (
    <div>
      Hello world!
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector('.container'));
=======
import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'

// Your top level component
import App from './App'

// Export your top level component as JSX (for static rendering)
export default <App />

// Render your app
if (typeof document !== 'undefined') {
  const render = Comp => {
    ReactDOM.hydrate(
      <AppContainer>
        <Comp />
      </AppContainer>,
      document.getElementById('root'),
    )
  }

  // Render!
  render(App)

  // Hot Module Replacement
  if (module.hot) {
    module.hot.accept('./App', () => {
      render(require('./App').default)
    })
  }
}
>>>>>>> 580cad4589eb136291c643e975c41e18cd9038f8
