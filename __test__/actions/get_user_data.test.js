import getUserData from "../../src/actions/get_user_data";
import { actionTypes } from "../../src/helpers/constants";

import { apiUtilMock } from "../__mocks__/apiUtil";

import { getUserData as userMockData } from "../hooks/api_response";
import storeMocker from "../hooks/store_mocker";

describe("get_user_data action test", () => {
  test("should get user data successfully", () => {
    let store = storeMocker({});
    let userData = userMockData();
    let expectedActions = [
      { type: actionTypes["LOGGEDIN_USER/DATA_FETCH_STARTED"] },
      {
        type: actionTypes["LOGGEDIN_USER/DATA_FETCH_SUCCESS"],
        payload: { data: userData }
      }
    ];

    apiUtilMock.get.success(userData);

    return store.dispatch(getUserData({ handle: "rnmkeshav" })).then(resp => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  test("should handle error", () => {
    let store = storeMocker({});
    apiUtilMock.get.failure({
      message: "something went wrong"
    });

    // For handling error, catching is necessary
    return store.dispatch(getUserData({})).catch(() => {
      expect(store.getActions()).toMatchSnapshot();
    });
  });
});
