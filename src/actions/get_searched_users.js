import { actionTypes } from "../helpers/constants";
import request from "superagent";

import { debounce } from "../helpers/helper";

const getSearchedUsers = payload => (dispatch, getState) => {
  let apiUrl = "https://api.github.com/search/users";

  let { searchText } = payload;
  if (!searchText) {
    return Promise.resolve();
  }

  let query = searchText;

  dispatch({
    type: actionTypes["SEARCHED_USERS/DATA_FETCH_STARTED"]
  });

  return request
    .get(apiUrl)
    .query({ q: query })
    .then(
      response => {
        dispatch({
          type: actionTypes["SEARCHED_USERS/DATA_FETCH_SUCCESS"],
          payload: {
            data: response.body.items
          }
        });
      },
      err => {
        dispatch({
          type: actionTypes["SEARCHED_USERS/DATA_FETCH_FAILURE"],
          payload: {
            message: err.message
          }
        });
      }
    );
};

export default debounce(getSearchedUsers, 300);
