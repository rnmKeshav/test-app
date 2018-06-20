import loggedinUser from "../../src/reducers/loggedin_user";
import { actionTypes } from "../../src/helpers/constants";

import { loggedinUser as loggedinUserInitialState } from "../hooks/initial_states";
import { getUserData } from "../hooks/api_response";

describe("loggedin_user reducer test", () => {
  let userData = getUserData();

  test("Should return initial state for not defined action type", () => {
    expect(
      loggedinUser(undefined, {
        type: actionTypes["SOME_UNDEFINED_ACTION"]
      })
    ).toEqual(loggedinUserInitialState);
  });

  test("Should set handle on handle change LOGGEDIN_USER/CHANGE_HANDLE", () => {
    let actionPayload = {
      handle: "keshav"
    };
    let expectedState = Object.assign({}, loggedinUserInitialState, {
      userHandle: actionPayload.handle
    });
    expect(
      loggedinUser(undefined, {
        type: actionTypes["LOGGEDIN_USER/CHANGE_HANDLE"],
        payload: actionPayload
      })
    ).toEqual(expectedState);
  });

  test("Should update isModalOpen on LOGGEDIN_USER/DATA_FETCH_STARTED", () => {
    let expectedState = Object.assign({}, loggedinUserInitialState, {
      isFetching: true,
      isModalOpen: false
    });
    expect(
      loggedinUser(undefined, {
        type: actionTypes["LOGGEDIN_USER/DATA_FETCH_STARTED"]
      })
    ).toEqual(expectedState);
  });

  test("Should update isFetching and error on LOGGEDIN_USER/DATA_FETCH_FAILURE", () => {
    let actionPayload = {
      message: "there was an error"
    };
    let expectedState = Object.assign({}, loggedinUserInitialState, {
      isFetching: false,
      error: { state: true, body: actionPayload }
    });
    expect(
      loggedinUser(undefined, {
        type: actionTypes["LOGGEDIN_USER/DATA_FETCH_FAILURE"],
        payload: actionPayload
      })
    ).toEqual(expectedState);
  });

  test("Should update fetched data on LOGGEDIN_USER/DATA_FETCH_SUCCESS", () => {
    let actionPayload = {
      data: userData
    };
    let expectedState = Object.assign({}, loggedinUserInitialState, {
      isFetching: false,
      error: loggedinUserInitialState.error,
      details: actionPayload.data,
      isModalOpen: true
    });
    expect(
      loggedinUser(undefined, {
        type: actionTypes["LOGGEDIN_USER/DATA_FETCH_SUCCESS"],
        payload: actionPayload
      })
    ).toEqual(expectedState);
  });

  test("Should set localstorage on LOGGEDIN_USER/UPDATE_TO_LOCALSTORE", () => {
    let actionPayload = {
      data: userData
    };

    // global is equivalent to window.
    global.localStorage = {};

    // This state data will be setup for next action as next action requires some state to be pre-set
    let state = loggedinUser(undefined, {
      type: actionTypes["LOGGEDIN_USER/DATA_FETCH_SUCCESS"],
      payload: actionPayload
    });
    let expectedState = Object.assign({}, state, { isModalOpen: false });

    expect(
      loggedinUser(state, {
        type: actionTypes["LOGGEDIN_USER/UPDATE_TO_LOCALSTORE"]
      })
    ).toEqual(expectedState);
    expect(global.localStorage.loggedinUser).toEqual(JSON.stringify(userData));
  });

  test("Should set state from localStorage on LOGGEDIN_USER/UPDATE_DETAIL_FROM_LOCALSTORAGE", () => {
    // global is equivalent to window.
    global.localStorage = {
      loggedinUser: JSON.stringify(userData),
      getItem: jest.fn(() => JSON.stringify(userData))
    };

    let expectedState = Object.assign({}, loggedinUserInitialState, {
      details: JSON.parse(global.localStorage.loggedinUser)
    });

    expect(
      loggedinUser(loggedinUserInitialState, {
        type: actionTypes["LOGGEDIN_USER/UPDATE_DETAIL_FROM_LOCALSTORAGE"]
      })
    ).toEqual(expectedState);
  });

  test("Should update isModalOpen on LOGGEDIN_USER/CLOSE_CONFIRMATION_MODAL", () => {
    let expectedState = Object.assign({}, loggedinUserInitialState, {
      isModalOpen: false
    });
    expect(
      loggedinUser(undefined, {
        type: actionTypes["LOGGEDIN_USER/CLOSE_CONFIRMATION_MODAL"]
      })
    ).toEqual(expectedState);
  });
});
