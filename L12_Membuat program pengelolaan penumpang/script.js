var penumpang = ["Syahrul", undefined, "Ramadhan"];
var tambahPenumpang = function (namaPenumpang, penumpang) {
  // jika angkot kosong
  if (penumpang.length == 0) {
    // tambahkan penumpang di awal array
    penumpang.push(namaPenumpang);
    // kembalikan isi array & keluar dari function
    return penumpang;
  } else {
    // telusuri seluruh kursi dari awal
    for (var i = 0; i < penumpang.length; i++) {
      // jika ada kursi kosong
      if (penumpang[i] == undefined) {
        // tambah penumpang di kursi tsb
        penumpang[i] = namaPenumpang;
        // kembalikan isi array & keluar dari function
        return penumpang;
      }
      //   jika sudah ada nama yang sama
      else if (penumpang[i] == namaPenumpang) {
        // tampilkan pesan kesalahannya
        console.log(namaPenumpang + " sudah ada di dalam angkot.");
        // kembalikan isi array & keluar dari function
        return penumpang;
      }
      //   jika seluruh kursi terisi
      else if (i == penumpang.length - 1) {
        // tambah penumpang di akhir array
        penumpang.push(namaPenumpang);
        // kembalikan isi array & keluar dari function
        return penumpang;
      }
    }
  }
};

// menurunkan penumpang
var hapusPenumpang = function (namaPenumpang, penumpang) {
  // jika angkot kosong
  if (penumpang.length == 0) {
    // tampilkan pesan bahwa angkot kosong, dan tidak mungkin ada penumpang yang turun
    console.log("angkot masih kosong");
  } else {
    // telusuri seluruh kursi dari awal
    for (var i = 0; i < penumpang.length; i++) {
      // jika nama penumpang sesuai
      if (penumpang[i] == namaPenumpang) {
        penumpang[i] = undefined;

        return penumpang;
      } else if (i == penumpang.length - 1) {
        console.log(namaPenumpang + "tidak ada di dalam angkot.");

        return penumpang;
      }
    }
  }
  // kembalikan isi array & keluar dari function
  return penumpang;
};
