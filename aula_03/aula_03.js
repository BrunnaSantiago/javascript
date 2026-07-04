// const alunos = [
// "Gustavo",
// "Nilson",
// "Ezequiel",
// "Brunna"
// ]

// alert(alunos[2]);

// for (const aluno of alunos) {
//    console.log(aluno);
// }

const carros = [
 {
    placa: "AAA0A33",
    cor: "Branca",
    marca: "VW",
    modelo: "Fusca",
    tetoSolar: false,
    chassi: "AA00000000",
},
{
    placa: "AAA0A22",
    cor: "Azul",
    marca: "Chevrolet",
    modelo: "Chevette",
    tetoSolar: false,
    chassi: "BB00000000",
},
{placa: "AAA0A21",
    cor: "Amarelo",
    marca: "Chevrolet",
    modelo: "Monza",
    tetoSolar: true,
    chassi: "CC00000000",
},
 ];
// alert(`O carro é: ${carro.marca} ${carro.modelo} - ${carro.placa}`);
// console.log(carros[0].placa);
// console.log(carros[1].placa);

// for (const carro of carros) {
    // console.log(carro.modelo);
// }

function popularTabela() {
    const tbody = document.querySelector("#tabela_carros tbody");

    let html = "";
    for(const carro of carros) {
        html += `
            <tr>
            <td>${carro.marca}</td>
            <td>${carro.modelo}</td>
            <td>${carro.cor}</td>
            <td>${carro.placa}</td>
            <td>${carro.chassi}</td>
            <td>${carro.tetoSolar ? "Sim" :"Não"}</td>
            </tr>
        `;
    }

    tbody.innerHTML = html;
}

popularTabela();