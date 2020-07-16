import {setActionCreator} from '../../redux/newsReducer';
import {connect} from 'react-redux';
import Newsfeed from './Newsfeed';

const mapStateToProps = (state) => ({
  news: state.newsData,
});

const mapDispatchToProps = (dispatch) => ({
  setNews: (news) => {
    dispatch(setActionCreator(news));
  },
});

const NewsfeedContainer =
    connect(mapStateToProps, mapDispatchToProps)(Newsfeed);

export default NewsfeedContainer;
