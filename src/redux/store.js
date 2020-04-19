import {combineReducers, createStore} from 'redux';
import {ownerReducer, postsReducer} from './profileReducer';
import {messagesReducer} from './messadesReducer';
import {peopleReducer} from './peopleReducer';

const reducers = combineReducers({
  ownerData: ownerReducer,
  postsData: postsReducer,
  messagesData: messagesReducer,
  peopleData: peopleReducer,
});

const store = createStore(reducers);

export default store;
