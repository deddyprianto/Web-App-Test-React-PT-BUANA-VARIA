const myFunction = (arr) => {
  let hasil;
  let data = arr.filter((item) => arr.indexOf(item));
  data.forEach((element) => {
    hasil = element;
  });
  return hasil;
};
// console.log(myFunction([1, 1, 1, 2, 1, 1]));
console.log(myFunction([0, 1, 1, 1, 1, 1, 1, 1]));
