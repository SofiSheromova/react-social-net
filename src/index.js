import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import StateManager from './redux/stateManager';

/**
 * Rerender function.
 */
function rerenderWholePage() {
  ReactDOM.render(
      <React.StrictMode>
        <App state={StateManager.state}
          dispatch={StateManager.dispatch}
        />
      </React.StrictMode>,
      document.getElementById('root'),
  );
}

StateManager.subscribe(rerenderWholePage);
rerenderWholePage();

serviceWorker.unregister();
