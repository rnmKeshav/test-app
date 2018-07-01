import apiUtil from "../../src/helpers/apiUtil";

const apiUtilMock = () => {
  //jest.mock("../../src/helpers/apiUtil");
  return {
    // get: {
    //   success: resp => {
    //     apiUtil.get = jest.fn(() => {
    //       return Promise.resolve(resp);
    //     });
    //   },
    //   failure: resp => {
    //     // apiUtil.get = jest.fn(() => {
    //     //   return Promise.reject(resp);
    //     // });
    //     apiUtil.get.mockImplementation(() => {
    //       return Promise.reject(resp);
    //     });
    //   }
    // }

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
