let lista = [
'Arroz: ',
'Feijão: ',
'Óleo: ',
'Macarrão: ',
'Sal: ',
'Açucar: ',
'Farinha de trigo: ',
'Carnes: ',
'Frutas: ',
'Legumes: ',
'Hortaliças: '
]

let listap = [
    15, // Arroz
    10, // Feijão
    10, // Óleo
    5, // Macarrão
    4, // Sal
    8, // Açucar
    6, // Farinha de Trigo
    50 // Carnes
    ,12 // Frutas
    ,12 // Legumes
    ,12 // Hortaliças
]
let infos = document.getElementById("infos")
let dados = document.querySelector("#forms");



dados.addEventListener('submit', function(e){
    e.preventDefault();

    let Din = document.getElementById("din").value;

    for(let i=0;i<11;i++) {
        var p = document.createElement("p")
        p.textContent = lista[i]+"("+listap[i]+"): "+ Math.floor(Din / listap[i])
        document.getElementById("infos").appendChild(p);
    }
})

dados.addEventListener('reset', function(e){
    e.preventDefault();

    for(let i=0;i<11;i++) {
        p.textContent = ""
        document.getElementById("infos").replaceChild(p);
    }
})