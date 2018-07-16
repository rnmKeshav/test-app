import mockedSuperagent from "../__mocks__/superagent";

import mockStore from "../hooks/store_mocker";
import getSearchedUsers from "../../src/actions/get_searched_users";

import { getSearchedUsers as searchedUsersResp, errorResponse } from "../hooks/api_response";

const undebouncedFunction = (store, payload = {}) => {
  return new Promise((resolve, reject) => {
    store.dispatch(getSearchedUsers(payload));

    setTimeout(resolve, 301); // 301 corresponds to debounce time 300ml in get_searched_users action.
  });
};

const undebouncedFunction1 = (store, payload = {}) => {
  //let store = mockStore({});
  //let resp = searchedUsersResp();
  //mockedSuperagent({ body: resp });
  return new Promise((resolve, reject) => {
    store.dispatch(getSearchedUsers(payload));

    setTimeout(reject, 301);
  });
};

describe("get_searched_users action test", () => {
  test("it should return empty without searchtext", () => {
    let store = mockStore({});
    let resp = searchedUsersResp();
    mockedSuperagent({ body: resp });

    return undebouncedFunction(store).then(() => {
      expect(store.getActions()).toMatchSnapshot();
    });
    // return store.dispatch(getSearchedUsers({})).then(resp => {
    //   expect(store.getActions()).toMatchSnapshot();
    // });
  });

  test("it should get searched user", () => {
    let store = mockStore({});
    let resp = searchedUsersResp();
    mockedSuperagent({ body: resp });

    return undebouncedFunction(store, { searchText: "rnmke" }).then(resp => {
      expect(store.getActions()).toMatchSnapshot();
    });
  });

  test("It should handle failure case", () => {
    let store = mockStore({});
    let error = errorResponse();
    mockedSuperagent(null, error);

    return undebouncedFunction1(store, { searchText: "rnm" }).then(
      () => {},
      err => {
        expect(store.getActions()).toMatchSnapshot();
      }
    );
  });
});
