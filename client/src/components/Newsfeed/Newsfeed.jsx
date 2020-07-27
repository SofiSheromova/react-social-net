import React from 'react';
import style from './Newsfeed.module.css';
import PropTypes from 'prop-types';
import NewsCard from './News/NewsCard';
import LinearProgress from './Progress';

const Newsfeed = ({
  news, newsCount, currentPageNumber, pageSize, isFetching,
  flipPage,
}) => {
  const newsExists = newsCount > currentPageNumber * pageSize;
  const downloadButton = (
    <div className={style.fetchStatus} onClick={flipPage}>
      <div className={style.arrowFlipper}/>
    </div>
  );
  const loader = <div className={style.fetchStatus}>
    <LinearProgress/>
  </div>;

  return (
    <div>
      <div className={style.newsfeed}>
        {
          news.map((item) => {
            return <NewsCard key={item._id} news={item}/>;
          })
        }
      </div>
      {
          isFetching ?
              loader :
              newsExists ? downloadButton : 'no more news'
      }
    </div>
  );
};

Newsfeed.propTypes = {
  news: PropTypes.array.isRequired,
  newsCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  currentPageNumber: PropTypes.number.isRequired,
  isFetching: PropTypes.bool.isRequired,
  flipPage: PropTypes.func.isRequired,
};

export default Newsfeed;
