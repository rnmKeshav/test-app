import apiUtil from "../../src/helpers/apiUtil";

const apiUtilMock = () => {
  return {
    get: {
      success: resp => {
        apiUtil.get = jest.fn(() => Promise.resolve(resp));
      },

      failure: resp => {
        apiUtil.get = jest.fn(() => Promise.reject(resp));
      }
    }
  };
};

module.exports = { apiUtilMock: apiUtilMock() };
