// function changingAddress(data) {
//   setTimeout(() => {
//     if (typeof data === "number") {
//       console.log("data bukan string");
//     } else if (data === undefined) {
//       console.log("data kosong");
//     } else {
//       console.log("alamat sudah di ubah");
//     }
//   }, 1000);
// }

// async function addressCheck(addressProp) {
//   try {
//     const resultChanging = await changingAddres(addressProp);
//     console.log("ini result changing ", resultChanging);
//   } catch (error) {
//     console.log("ini error address ", error);
//   }
// }

// addressCheck("alamat");

// synchronus
// console.log("Mulai!");
// console.log("Proses Selesai");
// console.log("Selesai");

// asynchronous
// console.log("Mulai");

// setTimeout(() => {
//   console.log("Proses Selesai Setelah 2 Detik");
// }, 2000);

// console.log("Selesai");

// callback function
// function prosesData(callback) {
//   console.log("Proses Mulai...");
//   setTimeout(() => {
//     console.log("Proses Selesai!");
//     callback(); // memanggil fungsi callback setelah selesai
//   }, 2000);
// }

// function setelahProses() {
//   console.log("Callback dijalankan setelah proses selesai!");
// }

// prosesData(setelahProses);

// implementasi callback function
// fungsi untuk menerima pesanan
// function terimaPesanan(namaPesanan, callback) {
//   console.log(`Menerima Pesanan untuk ${namaPesanan}...`);
//   setTimeout(() => {
//     console.log(`Pesanan ${namaPesanan} diterima.`);
//     callback(); // panggil callback setelah selesai menerima pesanan
//   }, 2000); // simulasi waktu 2 detik
// }

// fungsi untuk memasak makanan
// function masakPesanan(namaPesanan, callback) {
//   console.log(`Memasak ${namaPesanan}...`);
//   setTimeout(() => {
//     console.log(`${namaPesanan} selesai dimasak`);
//     callback(); // panggil callback setelah selesai dimasak
//   }, 3000); // simulasi waktu 3 detik
// }

//  fungsi untuk mengantar pesanan
// function antarPesanan(namaPesanan, callback) {
//   console.log(`Mengantar ${namaPesanan} ke Pelanggan...`);
//   setTimeout(() => {
//     console.log(`${namaPesanan} telah diantar ke Pelanggan`);
//     callback(); // panggil callback setelah selesai mengantar
//   }, 1000); // simulasi waktu 1 detik
// }

//  jalankan proses pemesanan dengan callback
// function prosesPemesanan(namaPesanan) {
//   terimaPesanan(namaPesanan, () => {
//     masakPesanan(namaPesanan, () => {
//       antarPesanan(namaPesanan, () => {
//         console.log(`Proses pemesanan untuk ${namaPesanan} selesai...`);
//       });
//     });
//   });
// }

//  memulai proses pemesanan
// prosesPemesanan("Nasi Goreng");

// promise
let janji = new Promise((resolve, reject) => {
  let sukses = true;

  if (sukses) {
    resolve("Proses Berhasil!");
  } else {
    reject("Proses Gagal!");
  }
});

janji.then((pesan) => {
  console.log(pesan);
});

janji.catch((error) => {
  console.log(error);
});
