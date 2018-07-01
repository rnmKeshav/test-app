import mockedSuperagent from "../__mocks__/superagent";

import mockStore from "../hooks/store_mocker";
import getSearchedUsers from "../../src/actions/get_searched_users";

import { getSearchedUsers as searchedUsersResp, errorResponse } from "../hooks/api_response";

describe("get_searched_users action test", () => {
  test("it should return empty without searchtext", () => {
    let store = mockStore({});
    let resp = searchedUsersResp();
    mockedSuperagent({ body: resp });

    return store.dispatch(getSearchedUsers({})).then(resp => {
      expect(store.getActions()).toMatchSnapshot();
    });
  });

  test("it should get searched user", () => {
    let store = mockStore({});
    let resp = searchedUsersResp();
    mockedSuperagent({ body: resp });

    return store.dispatch(getSearchedUsers({ searchText: "rnmke" })).then(resp => {
      expect(store.getActions()).toMatchSnapshot();
    });
  });

  test("It should handle failure case", () => {
    let store = mockStore({});
    let error = errorResponse();
    mockedSuperagent(null, error);

    return store.dispatch(getSearchedUsers({ searchText: "rnm" })).catch(() => {
      console.log("store.getActions()", store.getActions());
      expect(store.getActions()).toMatchSnapshot();
    });
  });
});
