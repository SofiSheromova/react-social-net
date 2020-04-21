import initialState from './initialState.json';

const MessagesChangesTypes = Object.freeze(
    {ADD_MESSAGE: 'ADD_MESSAGE', UPDATE_MESSAGE_INPUT: 'UPDATE_MESSAGE_INPUT'},
);

export const addMessageActionCreator = (content, chatId) => ({
  type: MessagesChangesTypes.ADD_MESSAGE,
  content: content,
  id: chatId,
  itsOwn: true,
});

export const updateMessageInputActionCreator = (event, chatId) => ({
  type: MessagesChangesTypes.UPDATE_MESSAGE_INPUT,
  event: event,
  id: chatId,
});

export const messagesReducer = function(state = initialState.messages, action) {
  let stateCopy;
  if (action.type === MessagesChangesTypes.ADD_MESSAGE) {
    stateCopy = state.slice();
    const partner = stateCopy.find((chat) => chat.id === action.id);
    partner.messages.push(
        {id: Date.now(), content: action.content, itsOwn: action.istOwn},
    );
    partner.inputMessage = '';
    return stateCopy;
  }
  if (action.type === MessagesChangesTypes.UPDATE_MESSAGE_INPUT) {
    stateCopy = state.slice();
    const partner = stateCopy.find((chat) => chat.id === action.id);
    partner.inputMessage = action.event.target.value;
    return stateCopy;
  }
  return state;
};
