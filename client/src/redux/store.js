import {combineReducers, createStore} from 'redux';
import {ownerReducer, postsReducer} from './profileReducer';
import {mailReducer} from './mailReducer';
import {usersReducer} from './usersReducer';

const reducers = combineReducers({
  ownerData: ownerReducer,
  postsData: postsReducer,
  mailData: mailReducer,
  usersData: usersReducer,
});

const store = createStore(reducers);

export default store;
