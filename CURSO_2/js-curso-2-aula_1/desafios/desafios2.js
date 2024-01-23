//Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.
function calcularImc(peso, altura) {
  let imc = peso / (altura * altura);
  console.log(imc);
}

//Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.
function calculoFatorial(valor) {
  fatorial = valor;
  while (valor > 1) {
    fatorial = fatorial * (valor - 1);
    console.log(fatorial);
    valor--;
  }
}

//Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equsvalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.
function converteDolar(valor) {
  conversao = valor / 4.8;
  console.log(conversao);
}

//Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.
function areaPerimetro(altura, largura) {
  area = largura * altura;
  perimetro = Number(altura) + Number(largura);

  console.log(`A area é de: ${area}`);
  console.log(`O perimetro: ${perimetro}`);
}

//Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.
function perimetroCircular(raio) {
  let calculo = parseFloat(2 * 3.14 * raio);
  console.log(calculo);
}

//Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.
/*function (valor) {
    cont = 0
  while (cont <= 10) {
    total = valor * i
    console.log(total)
    cont++ 
  }
}*/

function calcTabuada(valor) {
  for (i = 0; i <= 10; i++) {
    total = valor * i;
    console.log(total);
  }
}
