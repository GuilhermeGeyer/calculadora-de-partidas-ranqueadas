const v = 70, d = 5

function imprimeRanque(vitorias, derrotas) {
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
    console.log(`O Herói tem saldo de ${saldo} e está no nível de ${ranque}`)
}

imprimeRanque(v, d)
