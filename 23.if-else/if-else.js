// if - else
// if : memeriksa apakah suatu kondisi bernilai true. jika benar, kode di dalam blok if akan dijalankan.
// else : memberikan alternatif jika kondisi if bernilai false.
// else-if : pernyataan dalam pemrograman yang digunakan untuk memeriksa kondisi tambahan jika kondisi pertama pada if bernilai false.

// contoh1: jika suhu lebih dari 30 maka akan mencetak output "Suhu / Cuaca Panasa" ; Jika tidak akan mencetak output "Sejuk"

// const temperature = 25;
// if (temperature > 30) {
//   console.log("Suhu / Cuaca Panas");
// } else {
//   console.log("Sejuk");
// }

// contoh2:
// const nilai = 95;
// if (nilai >= 90) {
//   console.log("Nilai A");
// } else if (nilai >= 80) {
//   console.log("Nilai B");
// } else if (nilai >= 70) {
//   console.log("Nilai C");
// } else {
//   console.log("Nilai D");
// }

// penggunaan operator logika dengan if else
// operator logika memungkinkan pengkondisian yang lebih kompleks:
// AND (&&) : menghasilkan true jika kedua kondisi benar.
// OR (||) : menghasilkan true jika salah satu kondisi benar.
// NOT (!) : membalikkan nilai boolean.

// contoh 3: hanya orang yang berusia 18 tahun atau lebih dan memiliki ID yang bisa masuk
// const age = 20;
// const hasID = true;

// if (age >= 18 && hasID) {
//   console.log("Boleh Masuk");
// } else {
//   console.log("Tidak Boleh Masuk");
// }

// Nested if-else
// jika terdapat kondisi di dalam kondisi lain, kita dapat menggunakan if nested

// contoh4: contoh ini untuk memeriksa apakah usia memenuhi kriteria untuk dewasa, dan kemudian memeriksa jenis kelamin untuk memberikan output spesifik.
// const umur = 25;
// const gender = "L";

// if (umur >= 18) {
//   if (gender === "L") {
//     console.log("Pria Dewasa");
//   } else {
//     console.log("Wanita Dewasa");
//   }
// } else {
//   console.log("Masih Anak-Anak");
// }

// Kondisi Ternary (Operator Ternary)
// jika kondisi sederhana, kita dapat menggunakan operator ternary untuk menulis kondisi dalam satu baris:
// const usia = 20;
// const status = usia >= 18 ? "Dewasa" : "Belum Dewasa";
// console.log(status);

// =====================================================================================================
// CHALLENGE LEVEL 1
// =====================================================================================================

// challenge 1: menentukan status usia
// const umur = 21;
// if (umur >= 18) {
//   console.log("Dewasa");
// } else {
//   console.log("Anak-Anak");
// }

// challenge 2: menentukan jenis angka
// const angka = -10;
// if (angka > 0) {
//   console.log("Angka Positif");
// } else if (angka < 0) {
//   console.log("Angka Negatif");
// } else if (angka == 0) {
//   console.log("Angka Nol");
// } else {
//   console.log("Bukan Angka ini adalah Tipe Data Lain");
// }

// challenge 3: menentukan kelulusan
// const nilai = 65;
// if (nilai >= 75) {
//   console.log("Lulus");
// } else {
//   console.log("Tidak Lulus");
// }

// challenge 4: cek bilangan ganjil atau genap
// const angka = 35;
// if (angka % 2 == 0) {
//   console.log("Genap");
// } else {
//   console.log("Ganjil");
// }

// challenge 5: menentukan harga diskon
// const total__belanja = 3000;
// if (total__belanja >= 3000) {
//   console.log("Anda Mendapatkan diskon 10%");
// } else {
//   console.log("Belanja lagi untuk mendapatkan diskon");
// }

// =====================================================================================================
// CHALLENGE LEVEL 2
// =====================================================================================================

// challenge 1 : Menentukan kategori usia
const usia = 45;
if (usia <= 12) {
  console.log("Anak-Anak");
} else if (usia <= 17) {
  console.log("Remaja");
} else if (usia <= 64) {
  console.log("Dewasa");
} else {
  console.log("lansia");
}

// challenge 2 : sistem penilaian dengan grade
const nilai = 40;
if (nilai >= 90) {
  console.log("A");
} else if (nilai >= 80) {
  console.log("B");
} else if (nilai >= 70) {
  console.log("C");
} else if (nilai >= 60) {
  console.log("D");
} else {
  console.log("E");
}

// challenge 3: mengecek tahun kabisat
