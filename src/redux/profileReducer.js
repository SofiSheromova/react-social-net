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

export const postsReducer = function(state, action) {
  switch (action.type) {
    case ProfileChangesTypes.ADD_POST: {
      state.push(
          {id: Date.now(), completed: false, title: action.title},
      );
    }
  }
  return state;
};

export const ownerReducer = function(state, action) {
  debugger;
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

