const user = {
  username: "Kakashi",
  age: 20,
  birthYear: 2000,
  "birth-year": 2002,
  address: {
    province: "Banten",
    city: "Tangerang",
    postalCode: 1000,
    street: {
      number: 123,
      name: "Jl Sawo",
    },
    nickname: ["to", "hokage", "yondaime"],
  },
  greeting: () => {
    return "hello!"; // arrow function
  },
  introduction: function() {
    // Hello my Name is Naruto
    this.username;
    return `Hello my Name is ${this.username}`; // function
  }
};