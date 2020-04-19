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

const initialMessagesState = [
  {id: 1001, name: 'Sofi', inputMessage: '',
    messages: [{id: 2001, content: 'Hello', itsOwn: true}]},
  {id: 1002, name: 'Sam', inputMessage: '',
    messages: []},
  {id: 1003, name: 'Juli', inputMessage: '',
    messages: [{id: 2002, content: 'How are you?', itsOwn: false}]},
];

export const messagesReducer = function(state = initialMessagesState, action) {
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
