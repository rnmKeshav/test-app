//import superagent from "superagent";

const mockedSuperagent = jest.mock("superagent", () => {
  return {
    get: jest.fn().mockImplementation(() => {
      return this;
    }),
    query: jest.fn().mockImplementation(() => {
      console.log("query called");
      return this;
    }),
    then: jest.fn().mockImplementation(resp => {
      return this;
    })
  };
});
// jest.mock("superagent");

// const mockedSuperagent = function() {
//   return {
//     get: () => {
//       superagent.get.mockImplementation(function() {
//         console.log("t");
//         return this;
//       });
//     },

//     query: () => {
//       superagent.query.mockImplementation(function() {
//         return this;
//       });
//     },

//     then: resp => {
//       superagent.then.mockImplementation(function() {
//         return resp;
//       });
//     }
//   };
// };

export default mockedSuperagent;
