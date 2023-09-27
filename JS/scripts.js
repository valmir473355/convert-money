

function calcularDolar(){
    let real = document.getElementById("input-real").value //variável guarda valor do real digitado
    let dolar = document.getElementById("input-dolar").value // varialvel guarda valor do dolar digitado

    let resultado = real / dolar // variavel guarda o valor do resultado

    dolares.innerHTML = '$ ' + resultado // insere o valor do resultado no nosso paragrafo

}





