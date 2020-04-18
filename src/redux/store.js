import {combineReducers, createStore} from 'redux';
import {ownerReducer, postsReducer} from './profileReducer';
import {messagesReducer} from './messadesReducer';

const reducers = combineReducers({
  ownerData: ownerReducer,
  postsData: postsReducer,
  messagesData: messagesReducer,
});

const store = createStore(reducers);

export default store;
