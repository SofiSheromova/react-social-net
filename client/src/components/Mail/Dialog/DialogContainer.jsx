import PropTypes from 'prop-types';
import Dialog from './Dialog';
import {addMessageActionCreator, updateMessageInputActionCreator}
  from '../../../redux/mailReducer';
import {connect} from 'react-redux';

const mapStateToProps = (state, ownProps) => ({
  dialog: ownProps.dialog,
  inputMessage: ownProps.dialog.inputMessage,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  updateInput: (event) =>
    dispatch(updateMessageInputActionCreator(event, ownProps.dialog.id)),
  addMessage: (title) =>
    dispatch(addMessageActionCreator(title, ownProps.dialog.id)),
});

const DialogContainer = connect(mapStateToProps, mapDispatchToProps)(Dialog);

DialogContainer.propTypes = {
  dialog: PropTypes.object.isRequired,
};

export default DialogContainer;
