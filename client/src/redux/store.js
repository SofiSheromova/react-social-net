import {combineReducers, createStore} from 'redux';
import {ownerReducer, postsReducer} from './profileReducer';
import {mailReducer} from './mailReducer';
import {usersReducer} from './usersReducer';
import {newsReducer} from './newsReducer';

const reducers = combineReducers({
  ownerData: ownerReducer,
  postsData: postsReducer,
  mailData: mailReducer,
  usersData: usersReducer,
  newsData: newsReducer,
});

const store = createStore(reducers);

export default store;
