import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import {ThemeProvider} from '@material-ui/core/styles';

import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './redux/store';
import {defaultTheme} from './themes';
import './index.css';

ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <Provider store={store}>
          <ThemeProvider theme={defaultTheme}>
            <App
              ownerData={store.getState().ownerData}
              mailData={store.getState().mailData}
            />
          </ThemeProvider>
        </Provider>
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root'),
);

serviceWorker.unregister();
