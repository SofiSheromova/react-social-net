import React from 'react';
import * as axios from 'axios';
import style from './News.module.css';
import PropTypes from 'prop-types';

const News = ({news, setNews}) => {
  axios.get('/api/getList').then((response) => {
    console.log(response);
    if (news.length === 0 ) {
      setNews(response.data);
    }
  });
  return (
    <div className={style.news}>
      <h1>Your news</h1>
      {
        news.map((item) => {
          return (<div key={item.id}>{item.content}</div>);
        })
      }
    </div>
  );
};

News.propTypes = {
  news: PropTypes.object.isRequired,
  setNews: PropTypes.func.isRequired,
};

export default News;
