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
};

delete user.address;
delete user.age;

console.log(user);
