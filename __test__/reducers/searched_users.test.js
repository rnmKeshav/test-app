import searchedUsers from "../../src/reducers/searched_users";
import { actionTypes } from "../../src/helpers/constants";

import { getSearchedUsers } from "../hooks/api_response";

describe("searched_users reducer test", () => {
  test("Should match initial state", () => {
    expect(
      searchedUsers(undefined, {
        type: actionTypes["UNDEFINED_ACTION_TYPE"]
      })
    ).toMatchSnapshot();
  });
  test("Should set handleText on SEARCHED_USERS/CHANGE_HANDLE", () => {
    expect(
      searchedUsers(undefined, {
        type: actionTypes["SEARCHED_USERS/CHANGE_HANDLE"],
        payload: {
          searchText: "kesh"
        }
      })
    ).toMatchSnapshot();
  });

  test("Should set searchedSata on SEARCHED_USERS/DATA_FETCH_SUCCESS", () => {
    expect(
      searchedUsers(undefined, {
        type: actionTypes["SEARCHED_USERS/DATA_FETCH_SUCCESS"],
        payload: {
          data: getSearchedUsers().items
        }
      })
    ).toMatchSnapshot();
  });
});
