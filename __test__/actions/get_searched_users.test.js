import getSearchedUsers from "../../src/actions/get_searched_users";

import mockStore from "../hooks/store_mocker";
import superagent from "../__mocks__/superagent";

import { getSearchedUsers as searchedUsersResp } from "../hooks/api_response";

describe("get_searched_users action test", () => {
  let store = mockStore({});

  test("it should get searched user", () => {
    let resp = { a: 1 };

    return store.dispatch(getSearchedUsers());
  });
});
