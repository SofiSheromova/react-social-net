import PropTypes from 'prop-types';
import Chat from './Chat';
import {addMessageActionCreator, updateMessageInputActionCreator}
  from '../../../redux/messadesReducer';
import {connect} from 'react-redux';

const mapStateToProps = (state, ownProps) => ({
  user: ownProps.user,
  inputMessage: ownProps.user.inputMessage,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  updateInput: (event) =>
    dispatch(updateMessageInputActionCreator(event, ownProps.user.id)),
  addMessage: (title) =>
    dispatch(addMessageActionCreator(title, ownProps.user.id)),
});

const ChatContainer = connect(mapStateToProps, mapDispatchToProps)(Chat);

ChatContainer.propTypes = {
  user: PropTypes.object.isRequired,
};

export default ChatContainer;
