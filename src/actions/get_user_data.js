import api from "../helpers/apiUtil";
import { actionTypes } from "../helpers/constants";

import { debounce } from "../helpers/helper";

const getUserData = payload => (dispatch, getState) => {
  return new Promise((resolve, reject) => {
    let { handle } = payload;
    let requestParams = {
      endpoint: `users/${handle}`
    };

    api.get(requestParams).then(
      data => {
        dispatch({
          type: actionTypes["LOGGEDIN_USER/DATA_FETCH_SUCCESS"],
          payload: { data }
        });

        resolve(data);
      },
      err => {
        dispatch({
          type: actionTypes["LOGGEDIN_USER/DATA_FETCH_FAILURE"],
          payload: { message: err.message }
        });

        reject(err);
      }
    );
  });
};

export default debounce(getUserData, 500);
