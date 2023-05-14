
class conta{
    constructor(conta, saldo, titular){
        this.conta = conta
        this.saldo = saldo
        this.titular = titular
    }
}
class transacao{
    transferencia(contaSaida, contaEntrada, valor){
        if(contaSaida.saldo >= valor){
            contaSaida.saldo = contaSaida.saldo - valor
            contaEntrada.saldo = contaEntrada.saldo + valor 
        }
        else{
            console.log('saldo insuficiente para esta operação')
        }
    }

    retirada(Conta, valor){
        if(Conta.saldo >= valor){
            Conta.saldo = Conta.saldo - valor 
        }
        else{
            console.log('saldo insuficiente para esta operação')
        }
    }

    deposito(Conta, valor){
        Conta.saldo = Conta.saldo + valor
    }
}

const conta1 = new conta
conta1.conta = '000-1'
conta1.saldo = 1000
conta1.titular = 'samuel'
const conta2 = new conta
conta2.conta = '000-2'
conta2.saldo = 1000
conta2.titular = 'maria'

const m1 = new transacao
m1.transferencia(conta1, conta2, 500)
const m2 = new transacao
const m3 = new transacao
m2.retirada(conta1, 1000)
console.log(conta1)
console.log(conta2)