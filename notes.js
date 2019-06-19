function cl(data) {
  console.log(data);
}

let numArr = [1, 3, 4, 5, 6, 7, 8];

let total = numArr.reduce((arg1, arg2) => {
  return arg1 + arg2;
});

cl(total);

