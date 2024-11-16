let age = 23;
age = 10;

let year = age; // pass by value
year = 2023;

console.log(age);

// pass by reference
const naruto = {
  username: "naruto",
  age: 20,
};

const sasuke = naruto;
sasuke.username = "sasuke";

console.log(naruto);
