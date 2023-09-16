/*? no js js needed from me */
const hasil = document.getElementById("hasil");

let listHobi = [];

function simpanInputHobi() {
  const input = document.getElementById("inputHobi");
  const hobi = input.value;
  listHobi.push(hobi);
  hasil.textContent = listHobi.join(" - ");
}

function mengalihkan() {
  const dari = document.getElementById("dari");
  const ke = document.getElementById("ke");
  const a = listHobi[dari.value - 1];
  const b = listHobi[ke.value - 1];

  listHobi.shift(a, b);
  listHobi.push(a);
  hasil.textContent = listHobi;
}

// ! mengubah urutan hobi sesuai kenigingan user
// ! validasi
