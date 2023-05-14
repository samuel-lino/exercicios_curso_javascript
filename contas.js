

class conta{
    constructor(conta, saldo, titular, extrato = []){
        this.conta = conta
        this.saldo = saldo
        this.titular = titular
        this.extrato = extrato


    }
}
class transacao{
    transferencia(contaSaida, contaEntrada, valor){
        if(contaSaida.saldo >= valor){
            contaSaida.saldo = contaSaida.saldo - valor
            contaEntrada.saldo = contaEntrada.saldo + valor
            o1.registrar('transferencia no valor de ' + valor + ' para a conta ' + contaEntrada.conta, contaSaida)
            o1.registrar('recebido o valor de ' + valor + '  da conta ' + contaSaida.conta, contaEntrada)
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
class registro{

    registrar(transacao, conta){
        conta.extrato = conta.extrato + ' | ' + transacao
    }
}
var ola = []
const conta1 = new conta
conta1.conta = '000-1'
conta1.saldo = 1000
conta1.titular = 'samuel'
conta1.extrato = []
const conta2 = new conta
conta2.conta = '000-2'
conta2.saldo = 1000
conta2.titular = 'maria'
conta2.extrato = []
const m1 = new transacao
const o1 = new registro
m1.transferencia(conta1, conta2, 500)
const m2 = new transacao
const m3 = new transacao
m2.retirada(conta1, 1000)
m3.transferencia(conta2, conta1, 250)
console.log(conta1)
console.log(conta2)