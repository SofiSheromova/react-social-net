const ProfileChangesTypes = Object.freeze(
    {ADD_POST: 'ADD_POST', UPDATE_INPUT: 'UPDATE_INPUT'},
);

export const addPostActionCreator = (title) => ({
  type: ProfileChangesTypes.ADD_POST,
  title: title,
});

export const updateInputActionCreator = (event) => ({
  type: ProfileChangesTypes.UPDATE_INPUT,
  event: event,
});

const initialPostsState = [
  {id: 1, completed: false, title: 'How are you?'},
  {id: 2, completed: false, title: 'Hello, it is my first post!'},
];

export const postsReducer = function(state = initialPostsState, action) {
  if (action.type === ProfileChangesTypes.ADD_POST) {
    const stateCopy = state.slice();
    stateCopy.push(
        {id: Date.now(), completed: false, title: action.title},
    );
    return stateCopy;
  }
  return state;
};

const initialOwnerState = {
  id: 0,
  name: 'Eva Smith',
  description: 'Look what a beautiful page!!!!!!!!!!',
  linkImg: 'https://i.pinimg.com/originals/f0/80/ec/f080ec2f072c4e81e9170dcb76731c85.jpg',
  friends: {},
  inputText: '',
};

export const ownerReducer = function(state = initialOwnerState, action) {
  let stateCopy;
  if (action.type === ProfileChangesTypes.ADD_POST) {
    stateCopy = Object.assign({}, state);
    stateCopy.inputText = '';
    return stateCopy;
  }
  if (action.type === ProfileChangesTypes.UPDATE_INPUT) {
    stateCopy = Object.assign({}, state);
    stateCopy.inputText = action.event.target.value;
    return stateCopy;
  }
  return state;
};

