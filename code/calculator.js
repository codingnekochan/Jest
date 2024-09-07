const calculator = {
  add: function (a, b) {
    return a + b;
  },
  subtract(a, b) {
    return a - b;
  },
  divide(a, b) {
    if (b === 0) {
        handleError()
    } else {
      return a / b;
    }
  },
  multiply : function (a,b){
    return a * b;
  }
};

function handleError() {
  throw new Error("Math Error");
}
export default calculator;
