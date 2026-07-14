async function buscarCep() {
  const cepDigitado = document.querySelector("#cep").value;
  const url = `https://viacep.com.br/ws/${cepDigitado}/json/`;

  const resposta = await fetch(url);
  const data = await resposta.json();

  popularCampos(data);
}

function popularCampos(dados) {
  document.querySelector("#logradouro").value = dados.logradouro;
  document.querySelector("#bairro").value = dados.bairro;
  document.querySelector("#cidade").value = dados.localidade;
  document.querySelector("#estado").value = dados.uf;
  document.querySelector("#regiao").value = dados.regiao;
}
