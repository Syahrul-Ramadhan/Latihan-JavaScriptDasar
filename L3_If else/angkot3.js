// Variable
var jmlAngkot = 10;
var angkotBeroperasi = 6;
var noAngkot = 1;

// for dan if else
for (noAngkot; noAngkot <= jmlAngkot; noAngkot++) {
  if (noAngkot <= angkotBeroperasi) {
    console.log("Angkot No." + noAngkot + " beroperasi dengan baik");
  } else {
    console.log("Angkot No." + noAngkot + " sedang tidak beroperasi");
  }
}
