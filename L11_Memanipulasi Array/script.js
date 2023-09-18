// Memanipulasi Array

// 1. Menambah isi array
// var arr = [];
// arr[0] = "Syahrul";
// arr[1] = "Ramadhan";

// console.log(arr);

// 2. Menghapus isi array
// var arr = ["Syahrul", "Ramadhan"];
// arr[1] = undefined;

// console.log(arr);

//  3. Menampilkan isi array
// var arr = ["Syahrul", "Ramadhan", "Gabriel", "Abigael", "Mewengkang"];

// for (var i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// Method pada array
// var arr = ["Syahrul", "Ramadhan", "Gabriel", "Abigael", "Mewengkang"];

// 1. join
// console.log(arr.join());

// 2. push & pop                  *di belakang
// arr.push("Doddy", "Fitri");    *Menambahkan elemen
// arr.pop();                     *Menghilangkan elemen
// console.log(arr.join(" -"));

// 3. unshift & shift              *Di depan
// arr.unshift("Doddy");           *Menambahkan elemen
// arr.shift();                    *Menghilangkan elemen
// console.log(arr.join(" - "));

// 4. splic     *Menambal atau menambah elemen di tengah
// splice(indexAwal, mauDihapusBerapa, elemenBaru1, elementBaru2, ...)
// arr.splice(1, 2, "Doddy", "Fitri");
// console.log(arr.join(" - "));

// 5. slice
// slice(awal, akhir);      *Menghapus elemen yang di tengah
// var arr2 = arr.slice(1, 3);
// console.log(arr2.join(" - "));

// 6. forEach  *untuk membuat looping pada array
// var angka = [1, 2, 3, 4, 5, 6, 7, 8];
// var nama = ["Syahrul", "Ramadhan", "Gabriel"];
// for ( var i = 0; i < angka.length; i++) {
//     console.log (angka[i]);
// }

// angka.forEach(function (e) {
//   console.log(e);
// });

// nama.forEach(function (e, i) {
//   console.log("Mahasiswa ke-" + (i + 1) + " adalah : " + e);
// });

// 7. map   *membuat looping pada array, tapi bisa mengembalikkan elemen(dimodifikasi)
// var angka = [1, 2, 5, 3, 6, 8, 4];
// var angka2 = angka.map(function (e) {
//   return e * 2;
// });
// console.log(angka2.join(" - "));

// 8. sort       *mengurutkan elemen pada array
// var angka = [1, 2, 10, 5, 20, 3, 6, 8, 4];
// angka.sort(function (a, b) {
//   return a - b;
// });
// // menggunakan function dan return a-b jika a < b maka urutkan a sebelum b, dan sebaliknya
// console.log(angka.join(" - "));

// 9. filter   *mencari nilai pada array dan mengembalikannya dalam bentuk array (bisa banyak)
// var angka = [1, 2, 10, 5, 20, 3, 6, 8, 4];
// var angka2 = angka.filter(function (x) {
//   return x > 5;
// });
// console.log(angka2.join(" - "));

// // 9. filter   *mencari nilai pada array dan mengembalikannya dalam bentuk array (hanya satu/ yang pertama ketemu)
// var angka = [1, 2, 10, 5, 20, 3, 6, 8, 4];
// var angka2 = angka.find(function (x) {
//   return x > 5;
// });
// console.log(angka2);
