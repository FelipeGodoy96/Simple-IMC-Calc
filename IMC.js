let nome = ['José', 'Carlos', 'Aline', 'Ana']
let sobrenome = ['da Silva', 'de Souza', 'Ferreira', 'Paula']
let idade = ['27', '28', '33', '26']
let peso = [83.5, 80.1, 63.7, 55.0]
let altura = [1.7, 1.76, 1.53, 1.62]
let plano = ['Ouro', 'Diamante', null, 'Prata']
function IMC(weight, height) {
  return peso[weight] / (altura[height] * altura[height])
}

let codCliente = ''
//codCliente = prompt(
//  'Por favor, insira o código do cliente para cálculo de IMC.'
//)
codCliente = 0
weight = codCliente
height = codCliente
let IMCdepurado = IMC(weight, height)
while (codCliente < nome.length) {
  console.log(
    nome[codCliente] +
      ' ' +
      sobrenome[codCliente] +
      //if(plano == !null || undefined) {
      // return  ' (' + plano[codCliente] + ')'
      //} else {
      //return  ' (sem-plano) '
      //}
      ' (' +
      plano[codCliente] +
      ')' +
      ' tem ' +
      idade[codCliente] +
      ' anos e seu Índice de Massa Corporal é de ' +
      IMCdepurado.toFixed(2)
  )
  codCliente++
  IMCdepurado++
}
