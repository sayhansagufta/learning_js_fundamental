// latihan fungsi promise 2
// Promise adalah objek yang mewakili nilai yang belum tersedia tetapi akan diterima di masa depan. Promise dapat berada dalam tiga status:

function masakMakanan() {
  return new Promise((resolve, reject) => {
    const sukses = true; // ubah ke false untuk simulasi error
    setTimeout(() => {
      if (!sukses) {
        resolve("Makanan Selesai Dimasak");
      } else {
        reject("Masak Makanan Gagal!");
      }
    }, 2000); // simulasi waktu 2 detik
  });
}

// masakMakanan()
//   .then((hasil) => {
//     console.log(hasil);
//   })
//   .catch((errormsg) => {
//     console.log(`Error: ${errormsg}`);
//   });

// async await
// async dan await adalah sintaks modern untuk menangani Promise agar kode lebih mudah dibaca dan terlihat seperti proses sinkron.
async function prosesPesanan() {
  try {
    console.log("Memulai Proses Pesanan...");
    const hasil = await masakMakanan(); // menunggu masak makanan selesai
    console.log(hasil);
    console.log("Proses Pesanan Selesai!");
  } catch (error) {
    console.log(`Error: ${error}`);
  }
}

prosesPesanan();
