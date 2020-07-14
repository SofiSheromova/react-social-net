import React from 'react';
import * as axios from 'axios';
import style from './News.module.css';
import PropTypes from 'prop-types';

class News extends React.Component {
  constructor(props) {
    super(props);
    this.news = props.news;
    this.setNews = props.setNews;
  }

  componentDidMount() {
    axios.get('/api/getList')
        .then((response) => {
          this.setNews(response.data);
        });
  }

  render() {
    return (
      <div>
        <div className={style.news}>
          {
            this.news.map((item) => {
              return <div key={item.id}>{item.content}</div>;
            })
          }
        </div>
      </div>
    );
  }
}

News.propTypes = {
  news: PropTypes.array.isRequired,
  setNews: PropTypes.func.isRequired,
};

export default News;
