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


const initialPeopleState = [
  {id: 1001, name: 'Sofi', isFriend: true,
    avatar: 'https://mytoys.scene7.com/is/image/myToys/ext/8422443-01.jpg?$l$'},
  {id: 1002, name: 'Sam', isFriend: false,
    avatar: 'https://mytoys.scene7.com/is/image/myToys/ext/8422443-01.jpg?$l$'},
  {id: 1003, name: 'Juli', isFriend: true,
    avatar: 'https://mytoys.scene7.com/is/image/myToys/ext/8422443-01.jpg?$l$'},
];

export const peopleReducer = function(state = initialPeopleState, action) {
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

