// console.log("Olá mundo!");

// const nome = prompt("Digite seu nome");
// alert("Bem vindo " + nome);

function somar() {
  const n1 = Number(prompt("Digite o 1° número"));
  const n2 = Number(prompt("DIgite o 2° número"));
  const resultado = n1 + n2;
  alert(`O resultado da soma é ${resultado}`);
}

function multiplicar() {
  const n1 = Number(prompt("Digite o número 1: "));
  const n2 = Number(prompt("Digite o número 2:"));
  const resultado = n1 * n2;
  alert(`O resultado da multiplicação é ${resultado}`);
}

//somar();

function somarInputs() {
  const n1 = Number(document.querySelector("#n1_soma").value);
  const n2 = Number(document.querySelector("#n2_soma").value);
  const resultado = n1 + n2;
  document.querySelector("#resultado_soma").textContent =
    `O resultado da soma é ${resultado}`;
}

function multiplicarInputs() {
  const n1 = Number(document.querySelector("#n1_mult").value);
  const n2 = Number(document.querySelector("#n2_mult").value);
  const resultado = n1 * n2;
  document.querySelector("#resultado_multiplicacao").textContent =
    `O resultado da multiplicação é ${resultado}`;
}
