class User {
  firstName = "";
  lastName = "";
  username = " ";
  age = 0;

  constructor(username, age, firstName, lastName) {
    this.username = username;
    this.age = age;
    this.job = "programmer";
    this.firstName = firstName;
    this.lastName = lastName;
    // console.log("Constructor is called");
  }

  #getfullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  greeting() {
    return `Hello, I'm ${this.#getfullName()}`;
  }

  introduction() {
    return `My Name is ${this.#getfullName()}, I'am a ${this.job}`;
  }
  checkEligibleKTP() {
    if (this.age >= 17) {
      return "Boleh Buat KTP";
    } else {
      return `Tidak Boleh Buat KTP Harus ${this.age} tahun`;
    }
  }
}

class Mobil {
  constructor(nama, tahun) {
    this.nama = nama;
    this.tahun = tahun;
  }
  age() {
    // return new Date().getFullYear() - this.tahun;
    return this.tahun - new Date().getFullYear();
  }
}

class Person {
  #firstName;
  #lastName;
  constructor(firstName, lastName) {
    this.#firstName = firstName;
    this.#lastName = lastName;
  }
  #firstLast() {
    return `${this.#firstName} ${this.#lastName}`;
  }
  #lastFirst() {
    return `${this.#lastName}, ${this.#firstName}`;
  }
  getFullName(format = false) {
    return format ? this.#firstLast() : this.#lastFirst();
  }
}
let person = new Person("John", "Doe");
let fullName = person.getFullName();

console.log(fullName);

const mobil1 = new Mobil("Avanza", 2024);
const user1 = new User("doraemon", 20, "Seto", "Javascript");
const user2 = new User("naruto", 20, "Naruto", "Uzumaki");
// const user2 = new User("naruto", 17);
// user1.username = "naruto";

console.log(mobil1.age());
console.log(user1.introduction());
console.log(user2.checkEligibleKTP());
