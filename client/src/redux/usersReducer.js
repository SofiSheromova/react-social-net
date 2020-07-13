import initialState from './initialState.json';

const UsersChangesTypes = Object.freeze(
    {FOLLOW_USER: 'FOLLOW_USER', UNFOLLOW_USER: 'UNFOLLOW_USER'},
);

export const followActionCreator = (userId) => ({
  type: UsersChangesTypes.FOLLOW_USER,
  userId: userId,
});

export const unfollowActionCreator = (userId) => ({
  type: UsersChangesTypes.UNFOLLOW_USER,
  userId: userId,
});

export const usersReducer = function(state = initialState.users, action) {
  if (action.type === UsersChangesTypes.FOLLOW_USER) {
    return state.map(
        (user) => action.userId === user.id ? {...user, isFriend: true} : user,
    );
  }
  if (action.type === UsersChangesTypes.UNFOLLOW_USER) {
    return state.map(
        (user) => action.userId === user.id ? {...user, isFriend: false} : user,
    );
  }
  return state;
};
