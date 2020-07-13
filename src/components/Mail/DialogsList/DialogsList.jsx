import React from 'react';
import style from './DialogsList.module.css';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';

const DialogsList = ({dialogs}) => {
  return (
    <div>
      {
        dialogs.map((dialog) => {
          return <NavLink key={dialog.id} to={`/messages/${dialog.id}`}>
            <div className={style.dialogTitle}>{dialog.name}</div>
          </NavLink>;
        })
      }
    </div>
  );
};

DialogsList.propTypes = {
  dialogs: PropTypes.array.isRequired,
};

export default DialogsList;
