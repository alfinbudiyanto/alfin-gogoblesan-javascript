/*? no js js needed from me */
const hasil = document.getElementById("hasil");

let listHobi = [];

function simpanInputHobi() {
  const input = document.getElementById("inputHobi");
  const hobi = input.value;
  listHobi.push(hobi);
  hasil.textContent = listHobi;
}

function mengalihkan() {
  const dari = document.getElementById("dari");
  const ke = document.getElementById("ke");
  const a = listHobi[dari.value - 1];
  const b = listHobi[ke.value - 1];
  // console.log(([a, b] = [b, a]));
  // console.log({ z });
  // console.log({ a });
  // console.log({ b });
}

// ! mengubah urutan hobi sesuai kenigingan user
// ! validasi
