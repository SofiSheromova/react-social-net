import {
  setNewsActionCreator,
  setNewsCountActionCreator,
  setCurrentPageNumberActionCreator, toggleIsFetchingActionCreator,
} from '../../redux/newsReducer';
import {connect} from 'react-redux';
import React from 'react';
import * as axios from 'axios';
import Newsfeed from './Newsfeed';
import PropTypes from 'prop-types';

/** Class representing a NewsfeedApiContainer Component. */
class NewsfeedApiContainer extends React.Component {
  /**
   * Is invoked immediately after a component is mounted
   */
  componentDidMount() {
    this.flipPage();
  }

  /**
   * URL Builder.
   * @param {String} address - URL address.
   * @param {Object} params - query params.
   * @return {String} URL.
   */
  buildUrl(address, params) {
    const queryString = new URLSearchParams();
    for (const key in params) {
      if (!params.hasOwnProperty(key)) {
        continue;
      }
      queryString.set(key, params[key]);
    }

    return address + '?' + queryString.toString();
  }

  /**
   * News Request
   */
  newsRequest() {
    const url = this.buildUrl('/api/newsfeed.get', {
      count: this.props.pageSize,
      offset: this.props.currentPageNumber * this.props.pageSize,
    });
    this.props.toggleIsFetching(true);
    axios.get(url)
        .then((resp) => {
          if (resp.data.response) {
            this.props.setNewsCount(resp.data.response.count);
            this.props.setNews(resp.data.response.items);
          }
          this.props.toggleIsFetching(false);
        });
  }

  /**
   * Flip the page and news request.
   */
  flipPage() {
    this.props.setCurrentPageNumber(this.props.currentPageNumber + 1);
    this.newsRequest();
  }

  /**
   * Render NewsfeedApiContainer React Component.
   * @return {React.Component} NewsfeedApiContainer Component.
   */
  render() {
    return <Newsfeed
      news={this.props.news}
      newsCount={this.props.newsCount}
      pageSize={this.props.pageSize}
      currentPageNumber={this.props.currentPageNumber}
      isFetching={this.props.isFetching}
      flipPage={this.flipPage.bind(this)}
    />;
  }
}

NewsfeedApiContainer.propTypes = {
  news: PropTypes.array.isRequired,
  newsCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  currentPageNumber: PropTypes.number.isRequired,
  isFetching: PropTypes.bool.isRequired,
  setNews: PropTypes.func.isRequired,
  setNewsCount: PropTypes.func.isRequired,
  setCurrentPageNumber: PropTypes.func.isRequired,
  toggleIsFetching: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  news: state.newsData.news,
  newsCount: state.newsData.newsCount,
  pageSize: state.newsData.pageSize,
  currentPageNumber: state.newsData.currentPageNumber,
  isFetching: state.newsData.isFetching,
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
  toggleIsFetching: (isFetching) => {
    dispatch(toggleIsFetchingActionCreator(isFetching));
  },
});

const NewsfeedContainer =
    connect(mapStateToProps, mapDispatchToProps)(NewsfeedApiContainer);

export default NewsfeedContainer;
