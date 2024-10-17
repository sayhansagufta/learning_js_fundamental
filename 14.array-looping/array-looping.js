// const users = ["theo", "naruto", "doraemon", "nobita", "sasuke", "seto"];

// // users.length = 6
// for (let i = 0; i < users.length; i++) {
//   const currentUsername = users[i];

//   if (currentUsername.length < 5) {
//     console.log("Username Under 5 Characters");
//   } else {
//     console.log("Username above 5 Characters" );
//   }
// }
// function nameArray(value) {
//     const nameIndx = value.filter((newName)=>newName[0]!=="a");
//     return nameIndx;
//   }
 
//   console.log(nameArray(["asus","lenovo","acer","hp","axioo"]));

const numbers = [45, 4, 9, 16, 25];

let txt = "";
numbers.forEach(myFunction);

function myFunction(value) {
console.log(txt += value);
}