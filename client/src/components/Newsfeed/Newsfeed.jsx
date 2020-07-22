import React from 'react';
import style from './Newsfeed.module.css';
import PropTypes from 'prop-types';
import News from './News/News';

const Newsfeed = ({news, newsCount, currentPageNumber, pageSize, flipPage}) => {
  const newsExists = newsCount > currentPageNumber * pageSize;
  const downloadButton = (
    <div className={style.pageFlipper} onClick={flipPage}>
      <div className={style.arrow}/>
    </div>
  );
  const loader = <div>Тут будет лоадер...</div>;
  return (
    <div className={style.newsfeed}>
      {
        news.map((item) => {
          return <News key={item._id} news={item}/>;
        })
      }
      {
          newsExists ? downloadButton : loader
      }
    </div>
  );
};

Newsfeed.propTypes = {
  news: PropTypes.array.isRequired,
  newsCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  currentPageNumber: PropTypes.number.isRequired,
  flipPage: PropTypes.func.isRequired,
};

export default Newsfeed;
