// creating an array
const cars = ["Saab", "Volvo", "BMW"];
// menampilkan data array cars
// console.log(cars);

// creating an array metode ke dua
const cars2 = [];
cars2[0] = "Hyundai";
cars2[1] = "BYD";
cars2[2] = "Wuling";
cars2[3] = "Tesla";
cars2[4] = "Nissan";
cars2[5] = "Lexus";
cars2[6] = "KIA";
cars2[7] = "Chevrolet";

// menampilkan data array
console.log(cars2);

// using javaScript keyword new
const cars3 = new Array("Ferrari", "Lamborghini", "Mercedes-Benz");
console.log(cars3);

// accessing array element
let car = cars3[0];
console.log(car);

// changing an array element
cars[0] = "Opel";
console.log(cars);

// length property
const fruit = ["Banana", "Orange", "Apple", "Mango"];
let length = fruit.length;
console.log(length);

// accessing the first array element
let fruits = fruit[0];
console.log(fruits);

// accessing the last array element
let fruits2 = fruit[fruit.length - 1];
console.log(fruits2);

// looping array element
const buah = ["Apel", "Jeruk", "Mangga", "Pisang"];
// adding array element
buah.push("Lemon");
console.log(buah);
// adding array element method 2
buah[buah.length] = "Stroberi"; // adds "Stroberi" to buah array
console.log(buah);

//  looping dengan for untuk mengakses setiap elemen array:
for (let i = 0; i < buah.length; i++) {
  console.log(buah[i]);
}
//  looping dengan foreach()
//  menggunakan foreach() untuk mengakses setiap elemen array
buah.forEach((item) => {
  console.log(item);
});

// associative array
const person = [];
(person[0] = "John"), (person[1] = "Doe"), (person[2] = 45), person.length;
person[0];
console.log(person);

// melihat tipe data dari sebuah array
let type = typeof buah;
console.log(type);

// nested array
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(matrix);

// menampilkan elemen tertentu dengan indeks
console.log(matrix[0][0]); // menampilkan elemen pertama (1)
console.log(matrix[1][1]); // menampilkan elemen tengah (5)
console.log(matrix[2][2]); // menampilkan elemen terakhir (9)

// menampilkan seluruh elemen secara manual
console.log(matrix[0][0], matrix[0][1], matrix[0][2]); // menampilkan baris pertama
console.log(matrix[1][0], matrix[1][1], matrix[1][2]); // menampilkan baris kedua
console.log(matrix[2][0], matrix[2][1], matrix[2][2]); // menampilkan baris ketiga

// menampilkan setiap baris dengan join
console.log(matrix[0].join("")); // menampilkan baris pertama
console.log(matrix[1].join("")); // menampilkan baris kedua
console.log(matrix[2].join("")); // menampilkan baris ketiga
console.log(typeof matrix);

// mengakses dan menampilkan elemen diagonal
console.log(matrix[0][0]); // Elemen di [0,0]
console.log(matrix[1][1]); // Elemen di [1,1]
console.log(matrix[2][2]); // Elemen di [2,2]

// menjumlahkan dua elemen secara manual
const sum = matrix[0][2] + matrix[2][2]; // menjumlahkan elemen di matrix [0][2] dan matrix [2][2]
console.log(`Hasil Penjumlahan: ${sum}`);

// mengubah elemen tertentu
matrix[2][1] = 12; // mengubah elemen di baris 2 kolom 1
console.log(matrix);

// array of objects
const students = [
  { name: "ali", age: 18, grade: "A" },
  { name: "Budi", age: 19, grade: "B" },
  { name: "Citra", age: 18, grade: "A" },
];

// destructuring
// const [{ name, age, grade }] = students;

// mendestrukturisasi data dari elemen pertama
// const [{ name: firstName, age: firstAge, grade: firstGrade }] = students;
// console.log(`Data Siswa: ${firstName}, Umur: ${firstAge}, grade: ${firstGrade}`);
// console.log(firstName); // ali
// console.log(firstAge); // 18
// console.log(firstGrade); // A

// menampilkan seluruh array of object
// console.log("Data Siswa: ", students);
// console.log(`Data Siswa: ${firstStudent}, Umur: ${firststudentAge}, grade: ${firststudentGrade}`);

// menampilkan data setiap siswa secara individual dengan destructuring
// students.forEach(({ name, age, grade }) => {
//   console.log(`Nama: ${name}, umur: ${age}, grade: ${grade}`);
// });

// nested array of objects
const studentsNested = [
  {
    name: "Ali",
    age: 18,
    grade: "A",
    courses: [
      { courseName: "Matematika", score: 90 },
      { courseName: "Fisika", score: 80 },
    ],
  },

  {
    name: "Budi",
    age: 19,
    grade: "B",
    courses: [
      { courseName: "Kimia", score: 80 },
      { courseName: "Biologi", score: 88 },
    ],
  },

  {
    name: "Citra",
    age: 18,
    grade: "A",
    courses: [
      { courseName: "Ekonomi", score: 92 },
      { courseName: "Sejarah", score: 86 },
    ],
  },
];

// destructuring denagan nilai default
const studentsNested2 = [
  {
    name: "Ali",
    age: 18,
    grade: "A",
    courses: [{ courseName: "Matematika", score: 90 }],
  },
];

// mendestrukturisasi dengan nilai default
const [
  {
    name: firstName,
    age: firstAge,
    grade: firstGrade,
    courses: [firstCourse, secondCourse = { courseName: "Belum Ada", score: 0 }],
  },
] = studentsNested2;
console.log(secondCourse); // { courseName: "Belum Ada", score: 0 }

// mendestrukturisasi data dari elemen pertama, termasuk nested array course
// const [
//   {
//     name: firstName,
//     age: firstAge,
//     grade: firstGrade,
//     courses: [firstCourse, secondCourse],
//   },
// ] = studentsNested;

// mendestrukturisasi properti di dalam firstcourse
// const { courseName: firstCourseName, score: firstCourseScore } = firstCourse;
// const { courseName: secondCourseName, score: secondCourseScore } = secondCourse;

// console.log(`Data Siswa: ${firstName}, Umur: ${firstAge}, grade: ${firstGrade}, courses: ${firstCourseName} score: ${firstCourseScore}, courses2: ${secondCourseName} score2: ${secondCourseScore}`);

// menampilkan data lengkap siswa beserta mata pelajaran yang diambil
// console.log("Data Siswa: ", studentsNested);
// console.log("Data Siswa (nested): ", JSON.stringify(studentsNested, null, 2));

// menampilkan data detail setiap siswa dan mata pelajaran yang diambil
// studentsNested.forEach(() => {
//   console.log(`Nama: ${student.name}, Umur: ${student.age}, Nilai: ${student.grade}`);
//   student.courses.forEach((course) => {
//     console.log(`Mata Pelajaran: ${course.courseName}, Skor: ${course.score}`);
//   });
// });

// menampilkan firstCourseName dan firstCourseScore
// studentsNested.forEach(({ name, age, grade, courses: [{ courseName: firstCourseName, score: firstCourseScore }] }) => {
//   console.log(`Nama: ${name}, umur: ${age}, grade: ${grade}, courses: ${firstCourseName}, Score: ${firstCourseScore}`);
// });

// menampilkan firstCourse name & score dan secondCourse name & score
// studentsNested.forEach(({ name, age, grade, courses: [firstCourse, secondCourse] }) => {
//   console.log(`Nama: ${name}, umur: ${age}, grade: ${grade}, courses: ${firstCourse.courseName}, score: ${firstCourse.score}, courses2: ${secondCourse.courseName} score2: ${secondCourse.score}`);
// });

studentsNested.forEach(({ name, age, grade, courses: [firstCourse, secondCourse] }) => {
  console.log(`Nama: ${name}, umur: ${age}, grade: ${grade}`);
  console.log(`Mata Pelajaran Pertama: ${firstCourse.courseName}, Score: ${firstCourse.score}`);
  console.log(`Mata Pelajaran Kedua: ${secondCourse.courseName} Score: ${secondCourse.score}`);
});

// array of objects dengan properti nested objects
const studentsWithAddress = [
  {
    name: "Ali",
    age: 18,
    grade: "A",
    address: {
      street: "Jalan Mawar",
      city: "Jakarta",
      zipcode: "12345",
    },
  },

  {
    name: "Budi",
    age: 19,
    grade: "B",
    address: {
      street: "Jalan Melati",
      city: "Bandung",
      zipcode: "67890",
    },
  },

  {
    name: "Citra",
    age: 18,
    grade: "A",
    address: {
      street: "Jl. Kenanga",
      city: "Surabaya",
      zipcode: "54321",
    },
  },
];

// menampilkan data lengkap siswa beserta alamatnya:
console.log("Data Siswa dengan Alamat: ", studentsWithAddress);

// menampilkan data detail setiap siswa dan alamatnya
studentsWithAddress.forEach((student) => {
  console.log(`Nama: ${student.name}, Age: ${student.age}, Nilai: ${student.grade}`);
  console.log(` Alamat: ${student.address.street}, ${student.address.city}, ${student.address.zipcode}`);
});

function displayStudentInfo([
  {
    name,
    age,
    grade,
    courses: [{ courseName, score }],
  },
]) {
  console.log(`Nama: ${name}`);
  console.log(`Umur: ${age}`);
  console.log(`Nilai: ${grade}`);
  console.log(`Mata Pelajaran Pertama: ${courseName} dengan skor ${score}`);
}

displayStudentInfo(studentsNested);

//  array Search

// indexOf()

// lastindexOf()

// includes()

// find()

// findIndex()

// findLast()

// findLastIndex()

// ================================

// array sort

// ================================

// array iteration

// ================================
