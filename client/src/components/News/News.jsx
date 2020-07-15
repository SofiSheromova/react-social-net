import React from 'react';
import * as axios from 'axios';
import style from './News.module.css';
import PropTypes from 'prop-types';

/** Class representing a News Component. */
class News extends React.Component {
  /**
   * Is invoked immediately after a component is mounted
   */
  componentDidMount() {
    axios.get('/api/getList')
        .then((response) => {
          this.props.setNews(response.data);
        });
  }

  /**
   * Render News React Component.
   * @return {React.Component} News Component.
   */
  render() {
    return (
      <div className={style.news}>
        {
          this.props.news.map((item) => {
            return <div key={item.id}>{item.content}</div>;
          })
        }
      </div>
    );
  }
}

News.propTypes = {
  news: PropTypes.array.isRequired,
  setNews: PropTypes.func.isRequired,
};

export default News;
