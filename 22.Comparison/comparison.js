// comparison operator
// operator == dan !=
// membandingkan dua nilai untuk kesetaraan atau ketidaksamaan
const a = 10;
const b = "10";

const num1 = 5;
const num2 = "5";
// console.log(num1 == num2); // true, hanya membandingkan nilai
// console.log(num1 != num2); // false, karena nilainya sama

// console.log(num1 === num2); // false, membandingkan nilai dan tipe data
// console.log(num1 !== num2); // true, karena tipe datanya berbeda

// loose equality (==) hanya membandingkan nilai
// console.log(a == b); // hasilnya true;

// inequality (!=) hanya membandingkan nilai
// console.log(a != b); // hasilnya false;

// operator (===) dan !==
// membandingkan nilai dan tipe data (strict equality)
const x = 5;
const y = "5";

// console.log(x === y); // false , tipe data berbeda
// console.log(x !== y); // true , tipe data berbeda

// operator (>) dan (<)
// membandingkan dua nilai untuk melihat apakah lebih besar atau lebih kecil
// const age = 18;
// console.log(age > 18); // false, karena age tidak lebih dari 18
// console.log(age < 21); // true, karena age lebih kecil dari 21

// const age = 20;
// console.log(age > 18); // true, karena age lebih besar dari 18
// console.log(age < 30); // true, karena age lebih kecil dari 30
// console.log(age >= 20); // true, karena age lebih dari sama dengan 20
// console.log(age <= 19); // false, karena age lebih besar dari 19

// operator (>=) dan (<=)
// membandingkan nilai dengan batas minimum dan maksimum
const score = 85;
// console.log(score >= 90); // false, karena score tidak lebih sama dengan 90
// console.log(score <= 100); // true, karena score kurang dari sama dengan 100

// Menggunakan Operator Logika (&&) AND , (||) OR dan (!) NOT
// memeriksa dua kondisi atau lebih dalam satu pernyataan
const age = 20;
const hasDrivingLicense = true;
// console.log(age >= 18 && hasDrivingLicense); // true, kedua kondisi benar
// console.log(age >= 21 || hasDrivingLicense); // true, salah satu kondisi benar

// pengecekan nilai di rentang tertentu
const temperature = 25;
// console.log(temperature >= 20 && temperature <= 30); // true, karena ada diantara 20 dan 30

// (&&) AND Operator
const isMember = true;

// console.log(isMember && age >= 18); // true, karena keduanya benar
// console.log(isMember && age < 18); // false, karena age tidak 18

// (||) OR Operator
const hasDiscount = false;
const isSenior = true;

// console.log(hasDiscount || isSenior); //true, karena salah satu kondisi benar
// console.log(hasDiscount || age > 18); // true, karena age > 18
// console.log(hasDiscount || age < 15);  // false, karena keduanya salah dan age harusnya > 15

// (!) NOT Operator
const isAdmin = false;
// console.log(!isAdmin); // true, karena nilai isAdmin adalah false

// Kombinasi logical operator
const isStudent = true;
const hasLibraryAccess = false;
// console.log((isStudent || isAdmin) && !hasLibraryAccess); // true, karena isStudent = true dan hasLibraryAccess = false

// pengecekan nilai NAN dengan isNAN()
// gunakan isNAN() untuk mengecek apakah nilai adalah NaN(Not a Number);
const value = "hello";
// console.log(isNaN(value)); // true, karena hello bukan angka
// console.log(isNaN(123)); // false, karena 123 adalah angka

// menggunakan comparison untuk memilih harga terbaik
// membandingkan harga beberapa produk untuk menemukan yang termurah
const priceA = 100;
const priceB = 80;
const priceC = 120;

if (priceA < priceB && priceA < priceC) {
  console.log("Produk A adalah yang termurah");
} else if (priceB < priceA && priceB < priceC) {
  console.log("Produk B adalah yang yang termurah");
} else {
  console.log("Produk C adalah yang termurah ");
}

console.log(priceB < priceA && priceB < priceC);

// Menggunakan ternary operator untuk menyederhanakan if-else
// menggunakan ternary untuk membuat perbandingan sederhana
const isMember2 = true;
const discount = isMember2 ? 20 : 5;
console.log(`Diskon yang diberikan: ${discount}%`);

// kondisi ? nilaiJikaTrue : nilaiJikaFalse;

// Jika kondisi bernilai true, maka hasilnya adalah nilaiJikaTrue
// Jika kondisi bernilai false, maka hasilnya adalah nilaiJikaFalse

// contoh: Misalnya, kita ingin mengecek apakah seseorang sudah dewasa berdasarkan usia:
const age2 = 22;
const isAdult = age2 >= 18 ? "Dewasa" : "Belum Dewasa";
console.log(isAdult); // output: Dewasa

// contoh: menentukan angka genap atau ganjil
// gunakan operator perbandingan untuk memeriksa angka genap atau ganjil
const number = 7;
const result = number % 2 === 0 ? "Genap" : "Ganjil";
console.log(`Angka ${number} adalah ${result}`);

// menggunakan comparison dalam kondisi bersarang (if-nested)
// gunakan if nested untuk membuat perbandingan kompleks
const temperature2 = 35;
if (temperature2 > 30) {
  console.log("Cuaca Panas");
  if (temperature2 > 40) {
    console.log("Ekstrem Panas, Waspada!");
  }
} else if (temperature2 >= 20) {
  console.log("Cuaca Hangat!");
} else {
  console.log("Cuaca Dingin!");
}
