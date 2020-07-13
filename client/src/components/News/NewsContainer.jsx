import {followActionCreator, unfollowActionCreator}
  from '../../redux/usersReducer';
import {connect} from 'react-redux';
import News from './News';

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

const NewsContainer = connect(mapStateToProps, mapDispatchToProps)(News);

export default NewsContainer;
