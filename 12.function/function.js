// function sayHello() {
//   console.log("Hello World!");
// }

// function sayGoodbye() {
//   sayHello();
//   console.log("Say Goodbye!");
// }

// sayGoodbye();
// parameter
// function greetUser( username, age = 0,) {
//   if (typeof username === "string" && typeof age === "number") {
//     console.log(`Hello, ${username}`);
//     console.log(`You Are ${age} years old`);
//   }
// }

// greetUser("Sasuke");

// function repeatGreetings(numberOfTimes = 0) {
//     for(let i = 0; i < numberOfTimes; i++){
//         console.log('Hello');
//     }
// }

// repeatGreetings(2);

// function helloWorld() {
//   //console.log("Hello World!");
//   return helloWorld;
// }

// function add(x = 0, y = 0) {
//   return x + y;
// }

// function divide(x, y) {
//   return x / y;
// }

// console.log(add(8, 4) + divide(12, 5));

// function name(value) {
//     const nameVar = [value]
//     return nameVar
//   }

//   console.log(name(["budi","dayat","hamid","dodi","farhan"]));

// function student(value) {
//     const studentFunct = ["Andi","Budi","Wahyu"]
//     return studentFunct;
//   }
// const list = studentFunct;
// console.log(list);

function camp(value) {
  const campVar = value;
  const campInd = campVar[3];
  console.log(campInd);
}

camp(["Enigma", "Camp", "Code", "Node", "Javascript"]);
