import request from "superagent";

/***********
options = {
  endpoint: '/get_users',
  query: {
    a: b
  },
  headers: {
    Content-Type: application/json
  },
  payload: {} // for POST/PATCH/DELETE
}
**********/
const apiRequest = (method, options = {}, host = "https://api.github.com/") => {
  let { endpoint, query = {}, payload = {} } = options;
  let headers = { accept: "application/json" };
  host = host || window.location.origin;
  let url = `${host}${endpoint}`;

  console.log("url", url);
  Object.assign(headers, options.headers);

  let req = request[method.toLowerCase()](url)
    .query(query)
    .set(headers);

  if (method.toLowerCase() !== "get") {
    req.send(payload);
  }

  return new Promise((resolve, reject) => {
    req.end((error, res) => {
      let response;

      if (error) {
        reject(error);
      }

      try {
        if (res && res.text !== "") {
          response = JSON.parse(res.text);
        }
      } catch (e) {
        reject(e);
      }

      resolve(response);
    });
  });
};

const api = {
  get: apiRequest.bind(null, "get"),
  post: apiRequest.bind(null, "post"),
  patch: apiRequest.bind(null, "patch"),
  delete: apiRequest.bind(null, "delete")
};

export default api;
