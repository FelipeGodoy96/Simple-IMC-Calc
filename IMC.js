//function testeLogico() {
// if (plano[codCliente] == !null) {
//   return ' (' + plano[codCliente] + ')'
// } else {
//   return ' (sem-plano) '
// }
//}

let nome = ['José', 'Carlos', 'Aline', 'Ana']
let sobrenome = ['da Silva', 'de Souza', 'Ferreira', 'Paula']
let idade = ['27', '28', '33', '26']
let peso = [83.5, 80.1, 63.7, 55.0]
let altura = [1.7, 1.76, 1.53, 1.62]
let plano = ['Ouro', 'Diamante', null, 'Prata']
function IMC(weight, height) {
  return peso[weight] / (altura[height] * altura[height])
}

//let classificacao = function() {
//  if ()
//} --- criar função de if e else para classificação de IMC e grau

let codCliente = ''

//codCliente = prompt(
//  'Por favor, insira o código do cliente para cálculo de IMC.'
//) --- código para ser rodado em navegador

codCliente = 0
weight = codCliente
height = codCliente

let testeLogico = function () {
  if (plano[codCliente] != null) {
    return ' (' + plano[codCliente] + ')'
  } else {
    return ' (plano expirado)'
  }
}

let IMCdepurado = IMC(weight, height)
while (codCliente < nome.length) {
  console.log(
    nome[codCliente] +
      ' ' +
      sobrenome[codCliente] +
      testeLogico() +
      ' tem ' +
      idade[codCliente] +
      ' anos e seu Índice de Massa Corporal é de ' +
      IMCdepurado.toFixed(2) +
      '. Sendo assim, encontra-se na classificação de '
    // +
    //classificacao() +
    //'.'
  )
  codCliente++
  IMCdepurado++
}
