// spread operator
const naruto = {
  username: "naruto",
  age: 20,
};

const hokage = {
  title: "hokage",
  ...naruto,
};

const sasuke = {
  ...naruto,
};

const sasuke2 = naruto;

console.log(sasuke2);

const fruits = ["Mangga", "Jeruk", "Apel"];
const fruits2 = ["Semangka", "Salak"];

 const fruits = buah;

const buah = [...fruits, ...fruits2];

 buah[0] = "Durian";

console.log(buah);

const campBoot = {
  username: "enigma",
  age: 4,
};
const bootCamp = campBoot;
bootCamp.username = "boot camp enigma";
console.log(bootCamp);

let week = 7;
week = 14;
let day = week;
day = 28
console.log(day);

const listLaptop = [
  {
    Processor: "I7 13700",
    GPU: "RTX 4060",
    Merk: "Lenovo",
    RAM: "16",
    Internal: "512",
    Type: "Legion Slim 5i",
    Harga: 23_000_000,
  },
  {
    Processor: "Ryzen 7840HS",
    GPU: "RTX 4060",
    Merk: "Lenovo",
    RAM: "16",
    Internal: "512",
    Type: "Legion Slim 5",
    Harga: 22_000_000,
  },
];

const laptopLenovo = {
  Processor: "i9 13900",
  GPU: "RTX 4080",
  Merk: "Lenovo",
  RAM: "32",
  Internal: "2000",
  Type: "Legion 5i Pro",
  Harga: 38_099_000,
};
const laptopSpread = [...listLaptop, laptopLenovo];
console.log(laptopSpread);
