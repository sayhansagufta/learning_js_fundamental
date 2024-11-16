const { add, MY_VARIABLE, multiply } = require("./add/add");
const my_output = require("./output/output");
// const { multiply } = require("./multiply");

let x = 5;
let y = 7;

const additionResult = add(x, y);
const MY_VARIABLE2 = MY_VARIABLE;
const multiply2 = multiply(x, y);
// const my_output = my_output(x);

// console.log(add(x, y));
// console.log(multiply(x, y));
// console.log(MY_VARIABLE);
// console.log(my_output(20));

// console.log(my_output(additionResult));
// console.log(my_output(multiply2));
// console.log(my_output(MY_VARIABLE2));

const mobil = {
    brand: 'Honda',
    model: 'City',
    tahun: 2021,
    color: 'red'
  }
  console.log(myCar());
  function myCar({
    tahun,
    warna,
    brand,
    model
  }) {
    const message = 'My Car' + ' is a ' + tahun + warna + ' ' + brand + ' ' + model + '.';
  }