let mockresp = {};
let mockerror = {};
const mockedSuperagent = (resp, error) => {
  mockresp = resp;
  mockerror = error;
};

jest.mock("superagent", () => {
  return {
    get: jest.fn(function() {
      return this;
    }),
    query: jest.fn(function() {
      return this;
    }),
    then: jest.fn(function(respFn, errFn) {
      /*
        NOTE: The module factory of `jest.mock()` is not allowed to reference any out-of-scope variables.
          This is a precaution to guard against uninitialized mock variables. 
          If it is ensured that the mock is required lazily, variable names prefixed with `mock` are permitted.
      */
      if (mockerror) {
        errFn(mockerror);
        return Promise.reject();
      }

      respFn(mockresp);
      return Promise.resolve();
    })
  };
});

export default mockedSuperagent;
