var s = "";

// for (var i = 0; i <= 10; i++) {
//   for (var j = 0; j <= i; j++) {
//     s += "x";
//   }
//   s += "\n";
// }
// console.log(s);

// for (var i = 10; i > 0; i--) {
//   for (var j = 0; j < i; j++) {
//     s += "x";
//   }
//   s += "\n";
// }
// console.log(s);

// for (var i = 0; i < 9; i++) {
//   if (i < s) {
//     for (var j = 0; j <= i; j++) {
//       s += "*";
//     }
//   } else {
//     for (var k = 9; k > i; k--) {
//       s += "*";
//     }
//   }

//   s += "\n";
// }
// console.log(s);

// for (var g = 0; g < 9; g++) {
//   if (g < 5) {
//     for (var c = 0; c <= g; c++) {
//       s += "*";
//     }
//   } else {
//     for (var x = 9; x > g; x--) {
//       s += "*";
//     }
//   }

//   s += "\n";
// }

// console.log(s);

// for (i = 0; i < 5; i++) {
//   if (i == 0) {
//     for (var a = 0; a < 1; a++) {
//       for (var b = 0; b < 1; b++) {}
//       s += "    " + b;
//     }
//   } else if (i == 1) {
//     for (var c = 0; c < 1; c++) {
//       for (var d = 0; d < 1; d++) {
//         s += "   " + a + " " + b;
//       }
//     }
//   } else if (i == 2) {
//     for (var e = 0; e < 1; e++) {
//       for (var f = 0; f < 1; f++) {
//         s += "  " + c + " ";
//         s += a + b;
//         s += " " + d;
//       }
//     }
//   } else if (i == 3) {
//     for (var g = 0; g < 1; g++) {
//       for (var h = 0; h < 1; h++) {
//         s += " " + e + " ";
//         s += a + b + c;
//         s += " ";
//         s += a + b + d;
//         s += " " + f;
//       }
//     }
//   } else {
//     s += "" + g + " ";
//     s += a + b + c + e;
//     s += " ";
//     s += a + b + c + d + e + f;
//     s += " ";
//     s += a + b + d + f;
//     s += " " + h;
//   }
//   s += "\n";
// }
// console.log(s);

for (i = 0; i < 5; i++) {
  if (i == 0) {
    for (var a = 0; a < 1; a++) {
      for (var b = 0; b < 1; b++) {}
      s += "    " + b;
    }
  } else if (i == 1) {
    for (var c = 0; c < 1; c++) {
      for (var d = 0; d < 1; d++) {
        s += "   " + a + " " + b;
      }
    }
  }
  s += "\n";
}
console.log(s);
