const price = 10000;
const payment = 9000;
// 1. Kalau uangnya pas
if (payment === price) {
  console.log("Makasih Udah Bayar Pakai Uang Pas!");
} else if (payment > price) {
  // 2. ketika uang nya lebih
  const change = payment - price;
  console.log(`Terima Kasih, Kembalian Anda Sebesar ${change}`);
} else {
  // 3. Ketika uang nya kurang
  const moneyDeficit = payment - price;
  console.log(`"Maaf Uang Anda Kurang ${moneyDeficit}`);
}

const age = 22;
const lulusUjian = false;

if (age >= 17 && lulusUjian) {
    console.log("Boleh bikin SIM");
} else {
    console.log("Tidak boleh");
}

const x = 21;
switch (x % 7) {
  case 0:
    text = "Off";
    break;
  case 1:
    text = "On";
    break;
  default:
    text = "No value found";
} 