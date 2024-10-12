const v = 110, d = 15

function calculaRanque(vitorias, derrotas) {
    let saldo = vitorias - derrotas
    let ranque = ''
    if (saldo <= 10) {
        ranque = 'Ferro'
    } else if (saldo <= 20) {
        ranque = 'Bronze'
    } else if (saldo <= 50) {
        ranque = 'Prata'
    } else if (saldo <= 80) {
        ranque = 'Ouro'
    } else if (saldo <= 90) {
        ranque = 'Diamante'
    } else if (saldo <= 100) {
        ranque = 'Lendário'
    } else {
        ranque = 'Imortal'
    }
    return [saldo, ranque]
}

const [saldo, ranque] = calculaRanque(v, d)

console.log(`O Herói tem saldo de ${saldo} e está no nível de ${ranque}`)
