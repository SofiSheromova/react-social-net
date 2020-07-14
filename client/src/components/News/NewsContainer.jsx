import {setActionCreator} from '../../redux/newsReducer';
import {connect} from 'react-redux';
import News from './News';

const mapStateToProps = (state) => ({
  news: state.newsData,
});

const mapDispatchToProps = (dispatch) => ({
  setNews: (news) => {
    dispatch(setActionCreator(news));
  },
});

const NewsContainer = connect(mapStateToProps, mapDispatchToProps)(News);

export default NewsContainer;
