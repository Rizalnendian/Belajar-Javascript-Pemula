let dataString = "Data String";
console.log(dataString);


// 1. Escaping string (\ ' " \\ \n \r \t \b \f)
let data1 = 'Jarvis berkata "Hello sir!"'; 
// tidak boleh pakai kutip yang menumpuk misalnya string "Haloo "Iya halo""
console.log(data1);

// opsi jika tetap ingin menggunakan dua tanda kutip

// eccaping string menggunakan (/)
let data2 =  "Friday berkata \"Hello sir!\"";
console.log(data2);

// eccaping string menggunakan (\n) untuk new line
let data3 = "Ultron pengen semua manusia diganti robot, \nkatanya sih gitu";
console.log(data3);

// // eccaping string menggunakan (\t) untuk menambah tab
let data4 = "Ultron pengen semua manusia diganti robot, \tkatanya sih gitu";
console.log(data4);

// // eccaping string menggunakan (\r) untuk
let data5 = "Ultron pengen semua manusia diganti robot, \rkatanya sih gitu";
console.log(data5);

// // eccaping string menggunakan (\b) untuk
let data6 = "Ultron pengen semua manusia diganti robot, \bkatanya sih gitu";
console.log(data6);

// // eccaping string menggunakan (\b) untuk
let data7 = "Ultron pengen semua manusia diganti robot, \fkatanya sih gitu";
console.log(data7);


// 2. literal string (template literal string)
let namaDepan = "Rizal";
let namaBelakang = "Nendian Rezkita";
let kelompok = 3;
// tipe data num bisa berubah jadi string
let namaLengkap = namaDepan + " " + namaBelakang + ", Dari kelompok " + kelompok;
console.log(namaLengkap);
console.log(typeof namaLengkap)


// string literal atau format
let biodata = `${namaDepan} ${namaBelakang} dari kelompok ${kelompok}`;
console.log(biodata); 