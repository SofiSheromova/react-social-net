import initialState from './initialState.json';

const PeopleChangesTypes = Object.freeze(
    {FOLLOW_USER: 'FOLLOW_USER', UNFOLLOW_USER: 'UNFOLLOW_USER'},
);

export const followActionCreator = (userId) => ({
  type: PeopleChangesTypes.FOLLOW_USER,
  userId: userId,
});

export const unfollowActionCreator = (userId) => ({
  type: PeopleChangesTypes.UNFOLLOW_USER,
  userId: userId,
});

export const peopleReducer = function(state = initialState.people, action) {
  if (action.type === PeopleChangesTypes.FOLLOW_USER) {
    return state.map(
        (user) =>
            action.userId === user.id ? {...user, isFriend: true} : user,
    );
  }
  if (action.type === PeopleChangesTypes.UNFOLLOW_USER) {
    return state.map(
        (user) =>
              action.userId === user.id ? {...user, isFriend: false} : user,
    );
  }
  return state;
};

