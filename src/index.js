import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './redux/store';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';


ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <Provider store={store}>
          <App
            ownerData={store.getState().ownerData}
            messagesData={store.getState().messagesData}
          />
        </Provider>
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root'),
);


serviceWorker.unregister();
