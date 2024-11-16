const user1 = {
  username: "doraemon",
  age: 200,
};

const user2 = {
  username: "naruto",
  age: 13,
};

const user3 = {
  username: "seto",
  age: 20,
};

const user4 = {
  username: "sasuke",
  age: 30,
};

const users = [user1, user2, user3, user4, { username: "Shayhan", age: 23 }];

// for (let i = 0; i < users.length; i++) {
//   console.log(`${i + 1}. username: ${users[i].username} | age: ${users[i].age}`);
// }

// users.forEach((user, index) => {
//   console.log(`${index + 1}. username: ${user.username} | age: ${user.age}`);
// });

const filteredUsers = users.filter((user) => user.age >= 17);

// filteredUsers.forEach((user, index) => {
//   console.log(`${index + 1}. username: ${user.username} | age: ${user.age}`);
// });

// console.log(filteredUsers);

const findUser = users.find((user) => user.age === 30);

// findUser.forEach((user, index) => {
//   console.log(`${index + 1}. username: ${user.username} | age: ${user.age}`);
// });

// console.log(findUser);

// biografi = [{
//     Nama: "Hamdi",
//     Umur: 26,
//     Alamat: {
//         Profinsi: "Jawa Barat",
//         Kota:"Bandung"
//     },
//     Pekerjaan: "Programmer",
// }, {
//     Nama: "Hamka",
//     Umur: 27,
//     Alamat: {
//         Profinsi: "DKI Jakarta",
//         Kota:"Jakarta Selatan"
//     },
//     Pekerjaan: "Wirausaha",
// }, ]
// const biografiLoop = biografi.map((value)=>value.Alamat)
// console.log(biografiLoop[0]);

// const biografi = [{
//     Nama: "Hamdi",
//     Umur: 26,
//     Alamat: {
//         Profinsi: "Jawa Barat",
//         Kota:"Bandung"
//     },
//     Pekerjaan: "Programmer",
// }, {
//     Nama: "Hamka",
//     Umur: 27,
//     Alamat: {
//         Profinsi: "DKI Jakarta",
//         Kota:"Jakarta Selatan"
//     },
//     Pekerjaan: "Wirausaha",
// }, {
//     Nama: "Rudi",
//     Umur: 27,
//     Alamat: {
//         Profinsi: "Jawa Tengah",
//         Kota:"Semarang"
//     },
//     Pekerjaan: "Wiraswasta",
// }]
// const biografiPop = biografi.pop((value)=>value.Alamat[0])
// console.log(biografiPop);

// const listLaptop = [{
//     Processor: "I7 13700",
//     GPU: "RTX 4060",
//     RAM: "16",
//     Internal:"512",
//     Harga: 23_000_000
// },{
//     Processor: "Ryzen 7840HS",
//     GPU: "RTX 4060",
//     RAM: "16",
//     Internal:"512",
//     Harga: 22_000_000
// },{
//     Processor: "Ryzen 7840HS",
//     GPU: "RTX 4050",
//     RAM: "8",
//     Internal:"512",
//     Harga: 18_000_000
// }]
// const listLaptopSearch = listLaptop.filter((value)=>value[0])
// console.log(listLaptopSearch);

const biografi = [
  {
    Nama: "Hamdi",
    Umur: 26,
    Alamat: {
      Profinsi: "Jawa Barat",
      Kota: "Bandung",
    },
    Pekerjaan: "Programmer",
  },
  {
    Nama: "Hamka",
    Umur: 27,
    Alamat: {
      Profinsi: "DKI Jakarta",
      Kota: "Jakarta Selatan",
    },
    Pekerjaan: "Wirausaha",
  },
  {
    Nama: "Rudi",
    Umur: 27,
    Alamat: {
      Profinsi: "Jawa Tengah",
      Kota: "Semarang",
    },
    Pekerjaan: "Wiraswasta",
  },
];
biografi[0].Nama = "Yusuf";
biografi[0].Pekerjaan = "Ojek Online";

console.log(biografi[0]);
