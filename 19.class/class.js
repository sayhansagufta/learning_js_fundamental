class User {
  username = " ";
  age = 0;
  #nik = "12444030303303030"
  constructor(username, age) {
    this.username = username + " " + "NIK: " + this.#nik + ".";
    this.age = age;
    this.job = "programmer";
    // console.log("Constructor is called");
  }
}

const user1 = new User("doraemon", 20);
const user2 = new User("naruto", 17);
// user1.username = "naruto";

// console.log(user1);
// console.log(user2);


