// // Data handphone Samy
// const handPhone = [
//   {
//     processor: "Ex 2100",
//     type: "S21 Ultra",
//     variant: [
//       { ram: 12, internal: 256 },
//       { ram: 16, internal: 512 },
//     ],
//     tahun: 2021,
//   },
//   {
//     processor: "SD 8 Gen 1",
//     type: "S22 Ultra",
//     variant: [
//       { ram: 12, internal: 256 },
//       { ram: 12, internal: 512 },
//     ],
//     tahun: 2022,
//   },
//   {
//     processor: "SD 8 Gen 2 for Galaxy",
//     type: "S23 plus",
//     variant: [
//       { ram: 8, internal: 256 },
//       { ram: 8, internal: 512 },
//     ],
//     tahun: 2023,
//   },
//   {
//     processor: "SD 8 Gen 2 for Galaxy",
//     type: "S23 Ultra",
//     variant: [
//       { ram: 12, internal: 256 },
//       { ram: 12, internal: 512 },
//     ],
//     tahun: 2023,
//   },
// ];

// // Method untuk mendapatkan processor dengan variant RAM 8
// function getProcessorWithRAM8() {
//   return handPhone.filter((phone) => phone.variant.some((v) => v.ram === 8)).map((phone) => phone.processor);
// }

// // Menampilkan output
// console.log("List Processor dengan RAM 8:", getProcessorWithRAM8(), getProcessorWithRAM8());

// Data handphone Samy
// Data handphone Samy
// Data handphone Samy
let handPhone2 = [
    {
      processor: "Ex 2100",
      type: "S21 Ultra",
      variant: [
        { ram: 12, internal: 256 },
        { ram: 16, internal: 512 }
      ],
      tahun: 2021
    },
    {
      processor: "SD 8 Gen 1",
      type: "S22 Ultra",
      variant: [
        { ram: "12", internal: "256" },
        { ram: "12", internal: "512" }
      ],
      tahun: 2022
    },
    {
      processor: "SD 8 Gen 2 for Galaxy",
      type: "S23 plus",
      variant: [
        { ram: "8", internal: "256" },
        { ram: "8", internal: "512" }
      ],
      tahun: 2023
    },
    {
      processor: "SD 8 Gen 2 for Galaxy",
      type: "S23 Ultra",
      variant: [
        { ram: "12", internal: "256" },
        { ram: "12", internal: "512" }
      ],
      tahun: 2023
    }
  ];
  
  // Method untuk mendapatkan processor dengan variant RAM 8
  function getProcessorWithRAM8() {
    return handPhone2
      .reduce((acc, phone) => {
        // Periksa apakah ada variant dengan RAM 8
        const variantsWithRAM8 = phone.variant.filter(v => v.ram == 8);
        if (variantsWithRAM8.length > 0) {
          // Tambahkan nama processor sesuai jumlah varian RAM 8
          acc.push(...Array(variantsWithRAM8.length).fill(phone.processor));
        }
        return acc;
      }, []);
  }
  
  // Menampilkan output
  console.log("List Processor dengan RAM 8:", getProcessorWithRAM8());
  
  
