var tanya = true;

while (tanya) {
  // Menangkap pilihan player
  var p = prompt("pilih : kertas, gunting, batu");

  // menangkap pilihan komputer
  // membangkitkan bilangan random
  var comp = Math.random();

  if (comp < 0.34) {
    comp = "kertas";
  } else if (comp >= 0.34 && comp < 0.67) {
    comp = "gunting";
  } else {
    comp = "batu";
  }

  var hasil = "";

  // menentukan rules
  if (p == comp) {
    hasil = "SERI";
  } else if (p == "kertas") {
    // if( comp == 'batu') {
    //     hasil = 'MENANG!';
    // } else {
    //     hasil = 'KALAH!';
    // }
    hasil = comp == "batu" ? "MENANG!" : "KALAH!";
  } else if (p == "gunting") {
    hasil = comp == "kertas" ? "MENANG!" : "KALAH!";
  } else if (p == "batu") {
    hasil = comp == "batu" ? "MENANG!" : "KALAH!";
  } else {
    hasil = "memasukkan pilihan yang salah!!";
  }

  // Tampilkan hasilnya
  alert("Kamu memilih : " + p + " dan Komputer memilih : " + comp + "\nMaka hasilnya : Kamu " + hasil);

  tanya = confirm("lagi?");
}

alert("terima kasih sudah bermain.");
