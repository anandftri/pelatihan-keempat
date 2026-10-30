const barang = {
  kode: "INV-001",
  nama: "Laptop",
  stok: 10,
  harga: 75000000,
};

console.log(`nama = ${barang.nama}`);
console.log(`stok = ${barang.stok}`);

const stok = 5;
const status = "habiss";

if (stok === 5 && status === "habis") {
  console.log("periksa ketersedian barang");
} else {
  console.log("stok barang tersedia");
}

for (let i = 1; i < 5; i++) {
  console.log("perulangan ke-");
}

for (let i = 10; i >= 0; i--) {
  console.log("perulangan ke-", i);
}

for (let i = 1; i <= 10; i++) {
  if (i % 2 == 0) {
    console.log(i + " adalah angka genap");
  } else {
    console.log(i + " adalah angka ganjil");
  }
}

const daftarBarang = ["Laptop", "Mouse", "Keyboard", "Monitor"];

for (let i = 0; i < daftarBarang.length; i++) {
  console.log(daftarBarang[i]);
}

function tentukanStatusStok(stok) {
  if (stok === 0) {
    return "Habis";
  } else if (stok < 5) {
    return "Menipis";
  } else {
    return "Aman";
  }
}

console.log(tentukanStatusStok(0));
console.log(tentukanStatusStok(3));
console.log(tentukanStatusStok(15));

const hitungLuas = function (panjang, lebar) {
  return panjang * lebar;
};
console.log(hitunganLuas(5, 3));
