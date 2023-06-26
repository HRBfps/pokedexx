let dados = document.querySelector("forms");

dados.addEventListener('submit', function(e){
    event.preventDefault();

    let peso = document.getElementById("peso").value;
    let altura = document.getElementById("altura").value;
    console.log(altura,peso)
})