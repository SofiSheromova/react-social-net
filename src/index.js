import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import state from './state';

ReactDOM.render(
    <React.StrictMode>
      <App postsData={state.postsData}
        usersData={state.messagesData}
        ownerData={state.ownerData}/>
    </React.StrictMode>,
    document.getElementById('root'),
);

serviceWorker.unregister();
