import React from 'react';
import * as axios from 'axios';
import style from './Newsfeed.module.css';
import PropTypes from 'prop-types';

/** Class representing a Newsfeed Component. */
class Newsfeed extends React.Component {
  /**
   * Is invoked immediately after a component is mounted
   */
  componentDidMount() {
    axios.get('/api/newsfeed.get')
        .then((resp) => {
          if (resp.data.response) {
            this.props.setNews(resp.data.response.items);
          }
        });
  }

  /**
   * Render Newsfeed React Component.
   * @return {React.Component} Newsfeed Component.
   */
  render() {
    return (
      <div className={style.newsfeed}>
        {
          this.props.news.map((item) => {
            return <div key={item._id}>{item.content}</div>;
          })
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
