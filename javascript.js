window.onload = inicio;

const caminho = "css/";
const prefix = "IMAGEM-";
const extensao = ".jpg";
let cont = 0;

const lista = [
    { img: 1, titulo: "Cooperativa Cemiso" },
    { img: 3, titulo: "Fornecimento para 8 ceramistas" },
    { img: 2, titulo: "4 tipos de argila disponíveis" }
];

const titulo = document.getElementById("titulo-carrossel");
const moldura = document.getElementById("moldura");
const botaoVoltar = document.getElementById("btnVoltar");
const botaoAvancar = document.getElementById("btnAvancar");

function inicio() {
    botaoAvancar.onclick = avancar;
    botaoVoltar.onclick = voltar;
    atualizar();
}

function avancar() {
    cont++;
    if (cont >= lista.length) cont = 0;
    atualizar();
}

function voltar() {
    cont--;
    if (cont < 0) cont = lista.length - 1;
    atualizar();
}

function atualizar() {
    moldura.src = caminho + prefix + lista[cont].img + extensao;
    titulo.innerHTML = lista[cont].titulo;
}
