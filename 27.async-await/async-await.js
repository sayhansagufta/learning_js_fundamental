function ambilData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data Berhasil Diambil!");
    }, 2000);
  });
}

async function prosesData() {
  console.log("Mulai Proses...");
  let hasil = await ambilData();
  console.log(hasil);
  console.log("Proses Selesai");
}

prosesData();
