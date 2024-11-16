const user = {
  username: "doraemon",
  age: 20,
  job: "programmer",
  address: {
    city: "jakarta",
    street: "jl. danau toba",
  },
};

// destructuring
const {
  username,
  age,
  job,
  address: { city, street },
} = user;

// console.log(username);

console.log(`username: ${username} | age: ${age} | job: ${job} | city: ${city}}`);
// console.log(user.age);

const fruits = ["Leci", "Jeruk", "Mangga", "Apel", "Salak"];
// const secondfavoriteFruits = fruits[0];
// const favoriteFruits = fruits[1];
// const leastfavoriteFruits = [2];

// const [secondfavoriteFruits, favoriteFruits, leastfavoriteFruits] = fruits;
const [firstFruits, secondFruits, ...restofFruits] = fruits;

console.log(restofFruits);
