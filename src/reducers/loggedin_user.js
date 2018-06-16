import { actionTypes } from "../helpers/constants";

const initialState = {
  isFetching: false,
  isModalOpen: false,
  error: {
    status: false,
    body: {}
  },
  userHandle: "",
  details: {}
};

const updateUserData = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes["LOGGEDIN_USER/CHANGE_HANDLE"]:
      return Object.assign({}, state, { userHandle: action.payload.handle });

    case actionTypes["LOGGEDIN_USER/DATA_FETCH_STARTED"]:
      return Object.assign({}, state, { isFetching: true, isModalOpen: false });

    case actionTypes["LOGGEDIN_USER/DATA_FETCH_FAILURE"]:
      return Object.assign({}, state, {
        isFetching: false,
        error: { state: true, body: action.payload }
      });

    case actionTypes["LOGGEDIN_USER/DATA_FETCH_SUCCESS"]:
      return Object.assign({}, state, {
        isFetching: false,
        error: initialState.error,
        details: action.payload.data,
        isModalOpen: true
      });

    case actionTypes["LOGGEDIN_USER/UPDATE_TO_LOCALSTORE"]:
      window.localStorage.loggedinUser = JSON.stringify(state.details);
      return Object.assign({}, state, { isModalOpen: false });

    case actionTypes["LOGGEDIN_USER/UPDATE_DETAIL_FROM_LOCALSTORAGE"]:
      let details = window.localStorage.getItem("loggedinUser");

      return Object.assign({}, state, { details: JSON.parse(details) });

    default:
      return state;
  }
};

export default updateUserData;
