const initialMessagesState = [
  {id: 1001, name: 'Sofi', messages: [{id: 2001, content: 'Hello'}]},
  {id: 1002, name: 'Sam', messages: []},
  {id: 1003, name: 'Juli', messages: [{id: 2002, content: 'How are you?'}]},
];

export const messagesReducer = function(state = initialMessagesState, action) {
  return state;
};

