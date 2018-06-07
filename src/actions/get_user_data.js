import api from '../helpers/apiUtil';
import {actionTypes} from '../helpers/constants';

const getUserData = (payload) => (dispatch, getState) => {
  return new Promise((resolve, reject) => {
    let requestParams = {
      endpoint: '/get_user_data'
    };

    api.get(requestParams)
      .then((data) => {
        dispatch({
          type: actionTypes.USER_DATA_FETCH_SUCCESS,
          payload: {data}
        });

        resolve(data);
      }, (err) => {
        dispatch({
          type: actionTypes.USER_DATA_FETCH_FAILURE,
          payload: {message: err.message}
        });

        reject(err);
      });
  });
};

export default getUserData;
