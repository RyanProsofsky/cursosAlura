//Altere o conteúdo da tag h1 com document.querySelector e atribua o seguinte texto: Hora do Desafio.
 let title = document.querySelector('h1')
 title.innerHTML = 'Hora do desafio'

//Crie uma função que exiba no console a mensagem O botão foi clicado sempre que o botão Console for pressionado.
 function botaoClicado(){
    console.log('O botão foi clicado')
 }

 //Crie uma função que exiba um alerta com a mensagem: Eu amo JS, sempre que o botão Alerta for pressionado.
function exibirAlerta(){
    alert('Eu amo JS')
}

//crie uma função que é executada quando o botão prompt é clicado, perguntando o nome de uma cidade do Brasil. Em seguida, exiba um alerta com a mensagem concatenando a resposta com o texto: Estive em {cidade} e lembrei de você.
function exibePrompt(){     
    let cidade = prompt('Qual o nome da cidade?')
    alert(`Estive em: ${cidade}`)
}

//Ao clicar no botão soma, peça 2 números e exiba o resultado da soma em um alerta.
function somaNumeros(){
    let valor1 = parseInt  (prompt('Digite o primeiro numero'));
    let valor2  = parseInt(prompt('Digite o segundo numero'));
    let resultado =  valor1 + valor2
    alert(resultado)
}
