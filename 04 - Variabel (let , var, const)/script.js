// 1. Variabel let
let nama = "Rizal Nendian";



// Menampilkan data
console.log(nama);


// let dapat diubah nilainya
nama = "Tony Stark";
console.log(nama);

// perilaku let
let namaBelakang = "Nendian";
{
    let namaBelakang = "Rezkita";
    console.log(namaBelakang);
}
console.log(namaBelakang);


// 2. Variabel dengan var
var namaDepan = "Rizal";
console.log(namaDepan);
namaDepan = "Nendian";
console.log(namaDepan);


// perilaku dari var
var namaTengah = "Nendian";
{
    var namaTengah = "Nendians";
    console.log(namaTengah);
}
console.log(namaTengah);


// kasus khusus
// tanpa keyword otomatis jadi var
gorengan = "Bala-bala";
{
    gorengan = "Combro";
}
console.log(gorengan);


// const atau constanta
const TL = "25 Mei 2000";
console.log(TL);