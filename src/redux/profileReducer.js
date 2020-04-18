const ProfileChangesTypes = Object.freeze({ADD_POST: 1, UPDATE_INPUT: 2});

export const addPostActionCreator = function(title) {
  return {
    type: ProfileChangesTypes.ADD_POST,
    title: title,
  };
};

export const updateInputActionCreator = function(event) {
  return {
    type: ProfileChangesTypes.UPDATE_INPUT,
    event: event,
  };
};

const initialPostsState = [
  {id: 1, completed: false, title: 'How are you?'},
  {id: 2, completed: false, title: 'Hello, it is my first post!'},
];

export const postsReducer = function(state = initialPostsState, action) {
  switch (action.type) {
    case ProfileChangesTypes.ADD_POST: {
      state.push(
          {id: Date.now(), completed: false, title: action.title},
      );
    }
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
  switch (action.type) {
    case ProfileChangesTypes.ADD_POST: {
      state.inputText = '';
      break;
    }
    case ProfileChangesTypes.UPDATE_INPUT: {
      state.inputText = action.event.target.value;
    }
  }
  return state;
};

