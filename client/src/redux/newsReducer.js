import initialState from './initialState.json';

const NewsChangesTypes = Object.freeze(
    {
      SET_NEWS: 'SET_NEWS',
      SET_NEWS_COUNT: 'SET_NEWS_COUNT',
      SET_CURRENT_PAGE_NUMBER: 'SET_CURRENT_PAGE',
    },
);

export const setNewsActionCreator = (news) => ({
  type: NewsChangesTypes.SET_NEWS,
  news: news,
});

export const setNewsCountActionCreator = (newsCount) => ({
  type: NewsChangesTypes.SET_NEWS_COUNT,
  newsCount: newsCount,
});

export const setCurrentPageNumberActionCreator = (currentPageNumber) => ({
  type: NewsChangesTypes.SET_CURRENT_PAGE_NUMBER,
  currentPageNumber: currentPageNumber,
});

export const newsReducer = function(state = initialState.newsfeed, action) {
  switch (action.type) {
    case NewsChangesTypes.SET_NEWS:
      return {...state, news: [...state.news, ...action.news]};
    case NewsChangesTypes.SET_NEWS_COUNT:
      return {...state, newsCount: action.newsCount};
    case NewsChangesTypes.SET_CURRENT_PAGE_NUMBER:
      return {...state, currentPageNumber: action.currentPageNumber};
    default:
      return state;
  }
};
