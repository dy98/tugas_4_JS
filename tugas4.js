// 1. Buat 3 buah variabel
const tinggiA = 167;
const tinggiB = 170;
const tinggiC = 181;


// menentukan tinggi badan tertinggi
if (tinggiA > tinggiB && tinggiA > tinggiC) {
	console.log(tinggiA + ', ' + tinggiB + ', ' + tinggiC);
} else if (tinggiB > tinggiA && tinggiB > tinggiC) {
	console.log(tinggiB + ', ' + tinggiA + ', ' + tinggiC);
} else if (tinggiC > tinggiA && tinggiC > tinggiB) {
	console.log(tinggiC + ', ' + tinggiB + ', ' + tinggiA);
} else {
	console.log('Tidak ada yang lebih tinggi');
}