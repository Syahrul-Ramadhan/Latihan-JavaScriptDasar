// Membuat object
// Object Literal
var mhs = {
  nama: "Syahrul Ramadhan",
  umur: 18,
  ips: [3.2, 2.75, 3.1],
  alamat: {
    jalan: "Jl. abc No. 123",
    Kota: "Bandung",
    provinsi: "Jawa Barat",
  },
};

// Function Declaration
function buatObjectMahasiswa(nama, nrp, email, jurusan) {
  var mhs = {};
  mhs.nama = nama;
  mhs.nrp = nrp;
  mhs.email = email;
  mhs.jurusan = jurusan;
  return mhs;
}

var mhs3 = buatObjectMahasiswa("Gabriel", "01234567", "Gabrielabigael@gmail.com", "Keperawatan");

// Constructor
function Mahasiswa(nama, nrp, email, jurusan) {
  this.nama = nama;
  this.nrp = nrp;
  this.email = email;
  this.jurusam = jurusan;
}

var mhs4 = new Mahasiswa("Erik", "0123040503", "erik@gmail.com", "Teknik Mesin");
