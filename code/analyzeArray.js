export default function analyzeArray(array) {
  let average = array.reduce((prev, next) => prev + next, 0) / array.length;
  let min = array.sort((prev, next) => {
    return prev - next;
  })[0];
  let max = array.sort((prev, next) => {
    return next - prev;
  })[0];
  let length = array.length;
  return {
    average,
    min,
    max,
    length,
  };
}
