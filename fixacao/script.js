let elementP = document.querySelector("p");
let elementPValue = elementP.innerHTML;

let textoInput = document.getElementById("texto");

function mostrarInput() {
  console.log(textoInput.value);
}

function substituir() {
  elementP.innerHTML = textoInput.value;
}
