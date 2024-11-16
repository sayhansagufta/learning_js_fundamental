const car = {
  type: "Fiat",
  model: "500",
  color: "white",
};
// create an object
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 60,
  eyeColor: "blue",
};

// create an object
const person2 = {};

// add properties
person2.firstName = "John";
person2.lastName = "Doe";
person2.age = 50;
person2.eyeColor = "black";

// using the new keyword
const person3 = new Object();

// add properties
(person3.firstName = "David"), (person3.lastName = "Beckham"), (person3.age = 35);
person3.clubManager = "Inter Miami";

// javascript object methods
const superStar = {
  firstName: "Cristiano",
  lastName: "Ronaldo",
  club: "Manchester United",
  market: "$100.000",
  transferMarket: function () {
    return this.firstName + " " + this.lastName + " " + this.club + " " + this.market;
  },
};

// adding new properties
superStar.nationality = "Portugal";
superStar.Agent = "Gestifute";

// deleting properties
delete superStar.Agent;
delete superStar["Agent"];

// create a copy
const x = superStar;
// change market value
x.market = "$200.000";

// accessing javascript properties
// objectName.property
// let club = superStar.club;
let club = superStar.firstName + " " + superStar.lastName + " " + superStar.club + " " + superStar.market + " ";
console.log(club);

// objectName["property"]
let market = superStar["market"];
console.log(market);

// menampilkan data object
console.log(person);
console.log(person2);
console.log(person3);

// accessing object properties
// objectName.propertyName
// objectName["propertyName"]
console.log(person3.clubManager);
console.log(person3["lastName"]);
console.log(superStar.transferMarket());

console.log(superStar);

// NESTED OBJECTS
const goat = {
  firstName: "Lionel",
  lastName: "Messi",
  "Date of Birth": "Jun 24, 1987",
  Citizenship: "Argentina",
  marketvalue: "$25.000.000.000",
  position: "Right Winger",
  "current Internasional": "Argentina",
  achievement: {
    achievement1: "The Best FIFA Men's Player",
    achievement2: "Ballon D'OR",
    achievement3: "Uefa Best Player in Europe",
    achievement4: "Golden Boot Winner",
    achievement5: "Top Goal Scorrer",
  },
};

// accessing nested object
console.log(goat.achievement.achievement1);
console.log(goat.achievement["achievement5"]);
console.log(goat["achievement"]["achievement3"]);

// Object Methods
const employee = {
  firstname: "Hugo",
  lastname: "Elliot",
  id: 298,
  fullname: function () {
    return this.firstname + " " + this.lastname;
  },
};

// adding a method to an object + using javascript method toUpperCase()
employee.name = function () {
  return (this.firstname + " " + this.lastname).toLowerCase();
};

// accessing object methods
console.log(employee.fullname);
console.log(employee.name());

// Object Cosnstructor Function
function person4(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
  // this.nationality = "English";
  this.fullname = function () {
    return this.firstName + " " + this.lastName;
  };
}

// adding a property to a constructor
person4.prototype.nationality = "English";

// Membuat objek
const myFather = new person4("John", "Doe", 50, "blue");
const myMother = new person4("Sally", "Rally", 48, "green");
const mySister = new person4("Anna", "Rally", 18, "green");
const mySelf = new person4("Johnny", "Rally", 22, "green");

// Menambahkan properti nationality dan hasil fullname sebagai properti baru 
myFather.nationality = "English";
myFather.fullnameResult = myFather.fullname();

myMother.nationality = "Malaysia";
myMother.fullnameResult = myMother.fullname();

mySister.nationality = "Singapore";
mySister.fullnameResult = mySister.fullname();

mySelf.nationality = "Portugal";
mySelf.fullnameResult = mySelf.fullname();

// adding a method to an object
myMother.changeName = function(name) {
  this.lastName = name;
}

// adding a method to a constructor
person4.prototype.changeName = function(name) {
  this.lastName = name;
}

myMother.changeName("Doe");
myMother.fullnameResult = myMother.fullname();
// console.table([myFather, myMother, mySister, mySelf]);

console.table([myFather, myMother, mySister, mySelf], ["firstName", "lastName", "age", "eyeColor", "nationality", "fullnameResult", ]);

