// latihan promise
// const myPromise = new Promise((resolve, reject) => {
//   // lakukan operasi
//   const sukses = true; // ubah value ke false untuk simulasi error
//   if (!sukses) {
//     resolve("Operasi Berhasil!");
//   } else {
//     reject("Operasi Gagal!");
//   }
// });

// // menangani hasil promise
// myPromise
//   .then((hasil) => {
//     console.log(hasil); // jika berhasil
//   })
//   .catch((error) => {
//     console.log(error); // jika gagal
//   })
//   .finally(() => {
//     console.log("Promise Selesai Diproses");
//   });

// promise dengan operasi asinkronus
// simulasi proses pemesanan makanan
// function masakMakanan(namaMakanan) {
//   return new Promise((resolve, reject) => {
//     console.log(`Memulai Memasak ${namaMakanan}`);
//     setTimeout(() => {
//       const sukses = true; // simulasi ubah ke false untuk error
//       if (!sukses) {
//         resolve(`${namaMakanan} selesai dimasak`);
//       } else {
//         reject("Gagal Memasak Karena Bahan Habis! ");
//       }
//     }, 2000); // Simulasi waktu 2 Detik
//   });
// }

// masakMakanan("Nasi Goreng")
//   .then((hasil) => console.log(hasil))
//   .catch((error) => console.log(`Error: ${error}`))
//   .finally(() => console.log("Proses Memasak Selesai!"));

// promise chaining
// promise chaining adalah teknik dimana beberapa promise dijalankan secara berurutan.
function siapkanBahan() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Bahan Sudah Disiapkan!");
      resolve("Bahan Siap.");
    }, 1000);
  });
}

function masakMakanan() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Makanan Selesai dimasak");
      resolve("Makanan Siap disajikan");
    }, 2000);
  });
}

function sajikanMakanan() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Makanan telah disajikan.");
      resolve("Proses Selesai.");
    }, 3000);
  });
}

// menggabungkan promise
// siapkanBahan()
//   .then((hasil1) => {
//     console.log(hasil1);
//     return masakMakanan();
//   })
//   .then((hasil2) => {
//     console.log(hasil2);
//     return sajikanMakanan();
//   })
//   .then((hasil3) => {
//     console.log(hasil3);
//   })
//   .catch((error) => console.log(`Error : ${error}`));

// kombinasi dengan async await
async function prosesMasak() {
  try {
    const bahan = await siapkanBahan();
    console.log(bahan);

    const masak = await masakMakanan();
    console.log(masak);

    const sajikan = await sajikanMakanan();
    console.log(sajikan);
  } catch (error) {
    console.log(`Error: ${error}`);
  }
}

prosesMasak();
