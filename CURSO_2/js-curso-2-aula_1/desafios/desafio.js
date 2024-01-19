//Criar uma função que exibe "Olá, mundo!" no console.
function mensagemOlaMundo() {
  console.log("Olá mundo");
}

function gravaNome() {
  document.getElementById("teste").className = myFunction();
}

//Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.
function exibeNome(nome) {
  console.log('Olá ', nome);
}

//Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.
function exibeNumero(numero) {
  console.log(numero * 2 );
}

//Criar uma função que recebe três números como parâmetros e retorna a média deles.
function chamarMedia(valor1, valor2, valor3) {
    var resultado = (parseInt (valor1) + parseInt (valor2) + parseInt(valor3)) / 3 
    console.log(resultado)
}

//Criar uma função que recebe dois números como parâmetros e retorna o maior deles.
function numeroMaior(n1, n2) {
  //OPERADOR TERNARIO
  n1 > n2 ? console.log(parseInt(n1)) : console.log(parseInt(n2))

  //MÉTODO CONVENCIONAL
  //   if(n1 > n2){
  //     console.log(parseInt(n1))
  //   }else{
  //     console.log(parseInt(n2))
  //  }
}

//Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo
function numeroEleMesmo(valor) {
  resultado = valor * valor
  console.log(resultado)

} 







