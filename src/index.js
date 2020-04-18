import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './redux/store';

/**
 * Rerender function.
 */
function rerenderWholePage() {
  ReactDOM.render(
      <React.StrictMode>
        <App state={store.getState()}
          dispatch={store.dispatch}
        />
      </React.StrictMode>,
      document.getElementById('root'),
  );
}

store.subscribe(rerenderWholePage);
rerenderWholePage();

serviceWorker.unregister();
