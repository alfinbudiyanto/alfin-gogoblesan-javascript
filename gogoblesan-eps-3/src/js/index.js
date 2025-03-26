const hasil = document.getElementById("hasil");

let listHobi = [];

function simpanInputHobi() {
  const input = document.getElementById("inputHobi");
  const hobi = input.value.trim();

  if (hobi === "") {
    alert("Masukkan hobi terlebih dahulu!");
    return;
  }

  listHobi.push(hobi);
  input.value = "";
  updateHasil();
}

function mengalihkan() {
  let dari = document.getElementById("dari").value;
  let ke = document.getElementById("ke").value;

  // Konversi ke angka dan sesuaikan dengan indeks array
  dari = parseInt(dari, 10) - 1;
  ke = parseInt(ke, 10) - 1;

  if (
    isNaN(dari) ||
    isNaN(ke) ||
    dari < 0 ||
    ke < 0 ||
    dari >= listHobi.length ||
    ke >= listHobi.length
  ) {
    alert(
      "Indeks tidak valid! Masukkan angka antara 1 hingga " +
        listHobi.length
    );
    return;
  }

  [listHobi[dari], listHobi[ke]] = [listHobi[ke], listHobi[dari]];

  updateHasil();
}

function updateHasil() {
  hasil.textContent = listHobi.join(" - ");
}
