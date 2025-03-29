// const datas = [
//   {
//     nama: "A",
//     alamat: "Kampung 1",
//   },
//   {
//     nama: "B",
//     alamat: "Kampung 2",
//   },
// ];

// function getDetailData() {
//   //   datas.map(function (result, i) {
//   //     console.table(result);
//   //   });
//   datas.forEach((result) => {
//     console.log(result);
//   });
//   //   console.log(`Data yang anda cari: ${datas}`);
// }

class Hewan {
  warna;
  keahlian;
  constructor(nama) {
    this.nama = nama;
  }

  set newColor(warna) {
    this.warna = warna;
  }

  set newSkill(keahlian) {
    this.keahlian = keahlian;
  }

  get detail() {
    return `Hi saya ${this.nama}, Berwarna ${this.warna}, dan Keahlian saya ${this.keahlian}`;
  }
}

const kucing = new Hewan("Gendon");
kucing.newColor = "Oren";
kucing.newSkill = "Turu";

console.log(kucing.detail);
