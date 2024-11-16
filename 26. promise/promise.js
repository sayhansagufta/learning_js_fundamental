// promise latihan
// function asyncOne() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("function ONE is Done!");
//       resolve("Function ONE is Done!");
//     }, 3000);
//   });
// }

// function asyncTwo() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("function TWO is Done!");
//       resolve("Function TWO is Done! ");
//     }, 1000);
//   });
// }

// function asyncThree() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("function THREE is Done!");
//       resolve("Function THREE is Done!");
//     }, 2000);
//   });
// }

// asyncOne()
//   .then((result) => {
//     console.log(result);

//     return asyncTwo();
//   })
//   .then((hasil) => {
//     console.log(hasil);

//     return asyncThree();
//   })
//   .then((hasil3) => {
//     console.log(hasil3);
//   });

// asyncTwo().then((message) => {
//   console.log(message);
// });

// promise latihan 2
// let janji = new Promise((resolve, reject) => {
//   let sukses = false;
//   if (sukses) {
//     resolve("Proses Berhasil!");
//   } else {
//     reject("Proses Gagal!");
//   }
// });

// janji
//   .then((pesan) => {
//     console.log(pesan);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// latihan promise 3
// fungsi untuk menerima pesanan
function terimaPesanan(namaPesanan) {
  return new Promise((resolve, reject) => {
    console.log(`Menerima Pesanan untuk ${namaPesanan}...`);
    setTimeout(() => {
      const error = false; // ubah ke true untuk simulasi error
      if (error) {
        console.log(`Pesanan ${namaPesanan} diterima..`);
        resolve(namaPesanan); // menyelesaikan promise
      } else {
        reject(`Pesanan ${namaPesanan} gagal diterima.`);
      }
    }, 2000); // simulasi waktu 2 detik
  });
}

// fungsi untuk memasak makanan
function masakPesanan(namaPesanan) {
  return new Promise((resolve, reject) => {
    console.log(`Memasak ${namaPesanan}...`);
    setTimeout(() => {
      console.log(`${namaPesanan} selesai dimasak`);
      resolve(namaPesanan);
    }, 3000); // simulasi waktu 3 detik
  });
}

//  fungsi untuk mengantar pesanan
function antarPesanan(namaPesanan) {
  return new Promise((resolve, reject) => {
    console.log(`Mengantar ${namaPesanan} ke pelanggan...`);
    setTimeout(() => {
      console.log(`${namaPesanan} telah diantar ke pelanggan...`);
      resolve(`Proses Pemesanan untuk ${namaPesanan} selesai`);
    }, 1000);
  });
}

// memulai proses pemesanan dengan promise
terimaPesanan("Nasi Goreng")
  .then((namaPesanan) => masakPesanan(namaPesanan)) // memasak setelah pesanan diterima
  .then((namaPesanan) => antarPesanan(namaPesanan)) // mengantar setelah memasak selesai
  .then((pesanSelesai) => console.log(pesanSelesai)) // menampilkan pesan terakhir
  .catch((error) => console.log(`Terjadi Kesalahan: ${error}`)); // menangani jika terjadi error
