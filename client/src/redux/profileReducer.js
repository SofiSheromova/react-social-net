import initialState from './initialState.json';

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

export const postsReducer = function(state = initialState.posts, action) {
  if (action.type === ProfileChangesTypes.ADD_POST) {
    const stateCopy = state.slice();
    stateCopy.push(
        {id: Date.now(), completed: false, title: action.title},
    );
    return stateCopy;
  }
  return state;
};

export const ownerReducer = function(state = initialState.owner, action) {
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

