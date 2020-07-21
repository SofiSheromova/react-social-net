import React from 'react';
import * as axios from 'axios';
import style from './Newsfeed.module.css';
import PropTypes from 'prop-types';
import News from './News/News';

/** Class representing a Newsfeed Component. */
class Newsfeed extends React.Component {
  /**
   * Getter for page size.
   * @return {Number} page size.
   */
  get pageSize() {
    return 10;
  }
  newsCount = 0;
  currentPageNumber = 0;

  /**
   * Is invoked immediately after a component is mounted
   */
  componentDidMount() {
    this.newsRequest();
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
    const url = this.buildUrl('/api/newsfeed.get',
        {count: this.pageSize, offset: this.currentPageNumber * this.pageSize});
    axios.get( url)
        .then((resp) => {
          if (resp.data.response) {
            this.newsCount = resp.data.response.count;
            this.props.setNews(resp.data.response.items);
          }
        });
  }

  /**
   * Flip the page and news request.
   */
  flipPage() {
    this.currentPageNumber += 1;
    this.newsRequest();
  }

  /**
   * Render Newsfeed React Component.
   * @return {React.Component} Newsfeed Component.
   */
  render() {
    const downloadButton = (
      <div className={style.pageFlipper} onClick={this.flipPage.bind(this)}>
        <div className={style.arrow}/>
      </div>
    );
    const loader = <div>Тут будет лоадер...</div>;
    return (
      <div className={style.newsfeed}>
        {
          this.props.news.map((item) => {
            return <News key={item._id} news={item}/>;
          })
        }
        {
          this.newsCount > (this.currentPageNumber + 1) * this.pageSize ?
              downloadButton :
              loader
        }
      </div>
    );
  }
}

Newsfeed.propTypes = {
  news: PropTypes.array.isRequired,
  setNews: PropTypes.func.isRequired,
};

export default Newsfeed;
