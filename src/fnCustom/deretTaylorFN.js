// export const loadingData = (role) => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(role);
//     }, 100);
//   });
// };

export const deretTaylorFN = ({ setShowNumber, valRef }) => {
  const factorial = (n) => (n ? n * factorial(n - 1) : 1);
  // init exponential
  const expoInitial = (x) => {
    return function (n) {
      return Math.pow(x, n) / factorial(n);
    };
  };
  // create core function
  const sum = (series) => {
    let change = series(1);
    let result = series(0) + change;
    change = Math.abs(change);
    for (let n = 2; change > 0.000001; n++) {
      let before = result;
      let after = result + series(n);
      change = Math.abs(after - before);
      result = after;
    }
    return result;
  };
  // final fn and result
  const exp = (x) => sum(expoInitial(x));
  setShowNumber(exp(valRef.current.value));
};
