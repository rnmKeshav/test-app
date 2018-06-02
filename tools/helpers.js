let parseArr = (arr) => (arg) => 
  arr
    .filter(item => !!item)
    .map(item => item(arg));

module.exports = {
  parseArr
};
