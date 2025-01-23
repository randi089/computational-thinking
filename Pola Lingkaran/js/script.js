const pola = document.querySelector("#pola");
const btn = document.querySelector(".btn");
const tempat = document.querySelector(".hasil-pola");

function lingkaran(input) {
  let colom = "";
  let hasil = "";
  if (!input) {
    return "<p>Isi Angka Boss!!</p>";
  }
  let pola = +input;

  for (let i = 1; i <= pola + 1; i++) {
    for (let j = 1; j <= pola + 2; j++) {
      colom += "🟢";
    }
    hasil += "<p>" + colom + "</p>";
    colom = "";
  }
  return hasil;
}

btn.addEventListener("click", function () {
  tempat.innerHTML = lingkaran(pola.value);
});
