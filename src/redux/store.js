import {createStore} from 'redux';

const initialState = {
  charactersList: {},
  characterDetails: {},
};

const reducer = (state = initialState, action) => {
  return state;
};

export default createStore(reducer);
