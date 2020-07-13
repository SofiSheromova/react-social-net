import {followActionCreator, unfollowActionCreator}
  from '../../redux/usersReducer';
import {connect} from 'react-redux';
import Users from './Users';

const mapStateToProps = (state) => ({
  users: state.usersData,
});

const mapDispatchToProps = (dispatch) => ({
  changeFollowStatus: (user) => {
    if (user.isFriend) {
      dispatch(unfollowActionCreator(user.id));
    } else {
      dispatch(followActionCreator(user.id));
    }
  },
});

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;
