import initialState from './initialState.json';

const MailChangesTypes = Object.freeze(
    {ADD_MESSAGE: 'ADD_MESSAGE', UPDATE_MESSAGE_INPUT: 'UPDATE_MESSAGE_INPUT'},
);

export const addMessageActionCreator = (content, dialogId) => ({
  type: MailChangesTypes.ADD_MESSAGE,
  content: content,
  id: dialogId,
  itsOwn: true,
});

export const updateMessageInputActionCreator = (event, dialogId) => ({
  type: MailChangesTypes.UPDATE_MESSAGE_INPUT,
  event: event,
  id: dialogId,
});

export const mailReducer = function(state = initialState.mail, action) {
  let stateCopy;
  if (action.type === MailChangesTypes.ADD_MESSAGE) {
    stateCopy = state.slice();
    const partner = stateCopy.find((dialog) => dialog.id === action.id);
    partner.messages.push(
        {id: Date.now(), content: action.content, itsOwn: action.istOwn},
    );
    partner.inputMessage = '';
    return stateCopy;
  }
  if (action.type === MailChangesTypes.UPDATE_MESSAGE_INPUT) {
    stateCopy = state.slice();
    const companion = stateCopy.find((dialog) => dialog.id === action.id);
    companion.inputMessage = action.event.target.value;
    return stateCopy;
  }
  return state;
};
