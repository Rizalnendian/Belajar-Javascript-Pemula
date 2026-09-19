// operasi string

// 1.charAt (mengambil satu data index dari string)
let dataString = "abcde";
let dataKarakter = dataString.charAt(0);
console.log(`karakter pada index 0 = ${dataKarakter}`);
dataKarakter = dataString.charAt(1);
console.log(`karakter pada index 1= ${dataKarakter}`);
dataKarakter = dataString.charAt(2);
console.log(`karakter pada index 2 = ${dataKarakter}`);
dataKarakter = dataString.charAt(3);
console.log(`karakter pada index 3 = ${dataKarakter}`);
dataKarakter = dataString.charAt(4);
console.log(`karakter pada index 4 = ${dataKarakter}`);
dataKarakter = dataString.charAt(5);
console.log(`karakter pada index 5= ${dataKarakter}`); //tidak ada isi stringnya

// 2. menyambung string
let namaDepan = "Rizal";
let namaBelakang= "Nendian Rezkita";
let namaLengkap = namaDepan.concat(' ',namaBelakang, ' si mahasiswa UT')
console.log(namaLengkap);


// 3. mengambil indexnya dari huruf
console.log(namaLengkap.indexOf('U'));
console.log(namaLengkap.indexOf('R'));
console.log(namaLengkap.indexOf('T'));


// 4. mengambil substring
let julukan = namaLengkap.substring(22,37);
console.log (julukan);
console.log(namaLengkap.substring(37,22)); //batas index bisa di bolak balik


// 5. slice
console.log(namaLengkap.slice(22,37));
console.log(namaLengkap.substring(37,22)); //kosong tidak bisa dibolak balik indexnya

// 6. replace
namaLengkap = namaLengkap.replace('si mahasiswa UT', 'si alumni UT');
console.log(namaLengkap);

// 7. to lower
console.log(namaLengkap.toLowerCase());

// 8. to upper
console.log(namaLengkap.toUpperCase());

// 9. extract data number
let dataString2 = '10';
console.log(typeof dataString2);
let dataInteger = parseInt(dataString2);
console.log(typeof dataInteger);



// extract data number float
let dataString3 = '14.5';
console.log(typeof dataString3);
let dataFloat = parseFloat(dataString3);
console.log(typeof dataFloat);
console.log(dataFloat);