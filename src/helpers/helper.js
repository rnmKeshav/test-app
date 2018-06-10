const debounce = (fn, delay) => {
  let timeout;

  return payload => (dispatch, getState) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      dispatch(fn(payload));
    }, delay);
  };
};

module.exports = {
  debounce
};
