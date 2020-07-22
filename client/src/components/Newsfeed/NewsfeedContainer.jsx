import {
  setNewsActionCreator,
  setNewsCountActionCreator,
  setCurrentPageNumberActionCreator,
} from '../../redux/newsReducer';
import {connect} from 'react-redux';
import Newsfeed from './Newsfeed';

const mapStateToProps = (state) => ({
  news: state.newsData.news,
  newsCount: state.newsData.newsCount,
  pageSize: state.newsData.pageSize,
  currentPageNumber: state.newsData.currentPageNumber,
});

const mapDispatchToProps = (dispatch) => ({
  setNews: (news) => {
    dispatch(setNewsActionCreator(news));
  },
  setNewsCount: (newsCount) => {
    dispatch(setNewsCountActionCreator(newsCount));
  },
  setCurrentPageNumber: (currentPageNumber) => {
    dispatch(setCurrentPageNumberActionCreator(currentPageNumber));
  },
});

const NewsfeedContainer =
    connect(mapStateToProps, mapDispatchToProps)(Newsfeed);

export default NewsfeedContainer;
