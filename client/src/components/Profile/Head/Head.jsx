import React from 'react';
import style from './Head.module.css';
import PropTypes from 'prop-types';
import Avatar from './Avatar/Avatar';

const Head = ({ownerData}) => {
  return (
    <div className={style.info}>
      <div>
        <div className={style.name}>{ownerData.name}</div>
        <p className={style.description}>{ownerData.description}</p>
      </div>
      <Avatar src={ownerData.linkImg}/>
    </div>
  );
};

Head.propTypes = {
  ownerData: PropTypes.object.isRequired,
};

export default Head;
