import {followActionCreator, unfollowActionCreator}
  from '../../redux/peopleReducer';
import {connect} from 'react-redux';
import People from './People';

const mapStateToProps = (state) => ({
  users: state.peopleData,
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

const PeopleContainer = connect(mapStateToProps, mapDispatchToProps)(People);

export default PeopleContainer;
