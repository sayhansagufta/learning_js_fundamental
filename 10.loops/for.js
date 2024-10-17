// loop -> if condition yang berulang selama condition masih true

// SEGMENT 1 -> dieksekusi sebelum loop berjalan (SATU KALI AJA)
// SEGMENT 2 -> CONDITION (TRUE | FALSE)
// SEGMENT 3 -> dieksekusi di akhir setiap pengulangan

// for (let i = 0; i < 5; i++) {
//   if (i === 3) {
//     // break; // MEMBERHENTIKAN PENGULANGAN KESELURUHAN LOOOP
//     continue; // MEMBERHENTIKAN PENGULANGAN DI KONDISI TERTENTU
//   }
//   console.log("Masuk Loop");
//   console.log("i = " + i);
// }

// for (let i = 0; i < 5; i++) {
//   console.log("i = " + i);
//   for (let z = 0; z < 3; z++) {
//     console.log("z = " + z);
//   }
//   for (let k = 0; k < 3; k++) {
//     console.log("k = " + k);
//   }
// }

// for (let i = 0; i < 5; i++){
//     console.log(i);
// }

// let i = 0;
//   while (i < 10) {
//     console.log(i++);
//     if (i===5) {
//         break;
//     }
//   }

// for (let i = 0; i < 5; i++) {
//     console.log(i);
//     if (i % 2) {
//         console.log("ini habis dibagi 2");
//         i++;
//     }
// }

// let i = 10
// do {
//   console.log(i)
//   i++
// } while (i < 5)

let rows = 5;

for (let i = 1; i <= rows; i++) {
    let stars = '#'.repeat(2 * i - 1);
    let spaces = ' '.repeat(rows - i);
    console.log(spaces + stars);
}