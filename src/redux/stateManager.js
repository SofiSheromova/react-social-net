import {postsReducer, ownerReducer} from './profileReducer';

const StateManager = (function() {
  /**
   * Constructor function.
   */
  function StateManager() {}

  const _state = {
    ownerData: {
      id: 0,
      name: 'Eva Smith',
      description: 'Look what a beautiful page!!!!!!!!!!',
      linkImg: 'https://i.pinimg.com/originals/f0/80/ec/f080ec2f072c4e81e9170dcb76731c85.jpg',
      friends: {},
      inputText: '',
    },
    postsData: [
      {id: 1, completed: false, title: 'How are you?'},
      {id: 2, completed: false, title: 'Hello, it is my first post!'},
    ],
    messagesData: [
      {id: 1001, name: 'Sofi', messages: [{id: 2001, content: 'Hello'}]},
      {id: 1002, name: 'Sam', messages: []},
      {id: 1003, name: 'Juli', messages: [{id: 2002, content: 'How are you?'}]},
    ],
  };

  let callSubscriber;

  Object.defineProperty(StateManager, 'state', {
    get: function() {
      return _state;
    },
  });

  StateManager.dispatch = function(action) {
    _state.ownerData = ownerReducer(_state.ownerData, action);
    _state.postsData = postsReducer(_state.postsData, action);
    callSubscriber();
  };

  StateManager.subscribe = function(observer) {
    callSubscriber = observer;
  };

  return StateManager;
})();


export default StateManager;
