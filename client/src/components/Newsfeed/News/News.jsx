import React from 'react';
import style from './News.module.css';
import PropTypes from 'prop-types';

const News = ({news}) => {
  return (
    <div className={style.news}>
      {/* author*/}
      {/* attachments*/}
      <div className={style.newsTitle}>
        {news.title || 'Default news title'}
      </div>
      <p>{news.content}</p>
    </div>
  );
};

News.propTypes = {
  news: PropTypes.object.isRequired,
};

export default News;
