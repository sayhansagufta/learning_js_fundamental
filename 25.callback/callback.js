// callback function
// function prosesData(callback) {
//   console.log("Proses Mulai!");
//   setTimeout(() => {
//     console.log("Proses Selesai");
//     callback(); // memanggil fungsi callback setelah selesai
//   }, 2000);
// }
// function setelahProses() {
//   console.log("Callback Dijalankan Setelah Proses Selesai!");
// }
// prosesData(setelahProses);

// latihan callback
// function proses(callback) {
//   console.log("Proses Dimulai!");
//   setTimeout(() => {
//     console.log("Proses Selesai!");
//     callback(); // memanggil callback setelah tugas selesai
//   }, 3000);
// }

// proses(() => {
//   console.log("Lanjutkan ke Langkah Berikutnya!");
// });

// latihan callback 2
// fungsi untuk menerima pesanan
function terimaPesanan(namaPesanan, callback) {
  console.log(`Menerima pesanan untuk ${namaPesanan}...`);
  setTimeout(() => {
    console.log(`Pesanan ${namaPesanan} diterima.`);
    callback(); // panggil callback setelah selesai menerima pesanan
  }, 2000); // simulasi waktu 2 detik
}

// fungsi untuk memasak pesanan
function masakPesanan(namaPesanan, callback) {
  console.log(`Memasak ${namaPesanan}...`);
  setTimeout(() => {
    console.log(`${namaPesanan} selesai dimasak`);
    callback(); // panggil callback setelah dimasak
  }, 4000); // simulasi waktu selesai dimasak 4 detik
}

// fungsi untuk mengantar pesanan
function antarPesanan(namaPesanan, callback) {
  console.log(`Mengantar ${namaPesanan} ke pelanggan...`);
  setTimeout(() => {
    console.log(`${namaPesanan} telah diantar ke pelanggan...`);
    callback(); // panggil callback setelah selesai diantar
  }, 5000); // estimasi waktu 5 detik diantar
}

// jalankan proses pemesanan dengan callback
function prosesPemesanan(namaPesanan) {
  terimaPesanan(namaPesanan, () => {
    masakPesanan(namaPesanan, () => {
      antarPesanan(namaPesanan, () => {
        console.log(`Proses Pemesanan untuk ${namaPesanan} selesai...`);
      });
    });
  });
}

// memulai proses pemesanan
prosesPemesanan("Soto Ayam");
