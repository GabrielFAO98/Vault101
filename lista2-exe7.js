chefe()

function chefe(){
    var vetor = [] // declara o vetor
    exe7(vetor) //estamos passando o vetor como parâmetro = escopo global
    console.log(vetor)
    calculaMedia(vetor)
}

// entrada de dados
function exe7(vet){ // vet representa vetor -> o que fizemos com vet, será feito em vetor

    var numero = Number(prompt(`Informe um numero`))
    de {

        //coloca o numero em vet
        vet.push(numero)
        numero = Number(prompt(`Informe outro numero, informe numero negativo para encerrar`))
    }
    while (numero >= 0)
}

function calculaMedia(vet){
    var soma =0
    for(var i=0 i < vet.length;i++){
        soma = soma + vet[i]
    }
    console.log(`A média é ${soma/vet.length}`)
}