import React from 'react';
import style from './Mail.module.css';
import PropTypes from 'prop-types';
import DialogsList from './DialogsList/DialogsList';
import {Route} from 'react-router-dom';
import DialogContainer from './Dialog/DialogContainer';

const Mail = ({dialogs}) => {
  return (
    <div className={style.profile}>
      <span>Your messages are here</span>
      <Route exact path='/messages'>
        <DialogsList dialogs={dialogs}/>
      </Route>
      {
        dialogs.map((dialog) => {
          return <Route key={dialog.id} path={`/messages/${dialog.id}`} >
            <DialogContainer dialog = {dialog}/>
          </Route>;
        })
      }
    </div>
  );
};

Mail.propTypes = {
  dialogs: PropTypes.array.isRequired,
};

export default Mail;
