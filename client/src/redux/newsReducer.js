import initialState from './initialState.json';

const NewsChangesTypes = Object.freeze(
    {SET_NEWS: 'SET_NEWS'},
);

export const setActionCreator = (news) => ({
  type: NewsChangesTypes.SET_NEWS,
  news: news,
});

export const newsReducer = function(state = initialState.news, action) {
  if (action.type === NewsChangesTypes.SET_NEWS) {
    return [...state, ...action.news];
  }
  return state;
};
