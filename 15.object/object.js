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
Object.freeze(user)
// menambahkan properti color ke dalam street
user["address"]["street"].color = "white";
// mengubah properti age menjadi 25
user.age = 25; 
// menambahkan properti car dengan value Avanza
user.car = "Avanza"; 
// Mengakses birthYear dengan dot notation
console.log(user.birthYear); 
// Mengakses "birth-year" dengan bracket notation
console.log(user["birth-year"]); 
// Mengakses elemen pertama dari nickname
console.log(user.address.nickname[2]);
// mengakses object properti
console.log(user.greeting());
console.log(user.introduction());
console.log(Object.keys(user));
console.log(Object.values(user));

const laptopGame = {
    Processor: "I7 13700",
    GPU: "RTX 4060",
    Merk: "Lenovo",
    Type: "Legion",
    Harga: 21_000_000
}
laptopGame.Harga = 23_500_000;
console.log(laptopGame.Harga);

const rumah = {
    Panjang : 25,
    Lebar: 10,
    Alamat: "Jakarta",
    Harga: 1_500_000_000,
    Pajak: function(){this.Harga*0.02}
}