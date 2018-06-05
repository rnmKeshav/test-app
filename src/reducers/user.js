import {actionTypes} from '../helpers/constants';

const initialState = {
  isFetching: false,
  error: {
    status: false,
    body: {}
  },
  details: {}
};

const updateUserData = (state=initialState, action) => {
  switch(action.type) {
    case actionTypes.USER_DATA_FETCH_STARTED:
      return Object.assign({}, state, {isFetching: true});

    case actionTypes.USER_DATA_FETCH_FAILURE:
      return Object.assign({}, state, {isFetching: false, error: {state: true, body: action.payload}});

    case actionTypes.USER_DATA_FETCH_SUCCESS:
      return Object.assign({}, state, {isFetching: false, error: initialState.error, details: action.payload.data});

    default:
      return state;
  }
};

export default updateUserData;
