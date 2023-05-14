// cria uma conta 
class conta{
    constructor(conta, saldo, titular, extrato = []){
        this.conta = conta
        this.saldo = saldo
        this.titular = titular
        this.extrato = extrato
        //aqui coloquei o arrow function so como demonstração pois não consegui identificar um local onde ela seria melhor ultilizada
        /*this.tempo = 0
        setInterval(()=>{
            this.tempo++
        }, 1)*/
    }
}
//cria uma transação bancaria onde temos transferencia, deposito e retirada
class transacao{
    // aqui eu recebo a conta de onde vai sair o dinheiro, a conta que vai recebelo e o valor a ser transferido
    transferencia(contaSaida, contaEntrada, valor){
        //verifica se a conta de saida tem dinheiro suficiente
        if(contaSaida.saldo >= valor){
            //executa a transação
            contaSaida.saldo = contaSaida.saldo - valor
            contaEntrada.saldo = contaEntrada.saldo + valor
            // registra a transação feita
            o1.registrar('transferencia no valor de ' + valor + ' para a conta ' + contaEntrada.conta, contaSaida)
            o1.registrar('recebido o valor de ' + valor + '  da conta ' + contaSaida.conta, contaEntrada)
        }
        else{
            // exibe um alerta caso o saldo for insuficiente
            console.log('saldo insuficiente para esta operação')
        }
    }
    // operação de retirada onde pega a conta a ser retirada e o valor
    retirada(Conta, valor){
        //verifica se existe saldo o suficiente
        if(Conta.saldo >= valor){
            //retira o valor do saldo
            Conta.saldo = Conta.saldo - valor 
            //registra a operação
            o1.registrar('foi retirado o valor de '+ valor, Conta)
        }
        else{
            //avisa caso o não tenha saldo
            console.log('saldo insuficiente para esta operação')
        }
    }
    // operação de deposito onde recebe uma conta e o valor
    deposito(Conta, valor){
        // adiciona o valor ao saldo
        Conta.saldo = Conta.saldo + valor
        //registra a operação
        o1.registrar('foi depoitado o valor de '+ valor, Conta)
    }
}
// cria o registro para o extrato
class registro{

    registrar(transacao, conta){
        //adiciona a transação ao extrato
        conta.extrato = conta.extrato + ' \n ' + transacao;

    }
}
// colocando o codigo para funcionar
//criou a conta1
const conta1 = new conta
conta1.conta = '000-1'
conta1.saldo = 1000
conta1.titular = 'samuel'
conta1.extrato = []
//criou a conta2
const conta2 = new conta
conta2.conta = '000-2'
conta2.saldo = 1000
conta2.titular = 'maria'
conta2.extrato = []
//iniciou uma transação
const m1 = new transacao
//inicia um registro
const o1 = new registro
//executou uma transferencia da conta1 para a conta2 no valor de 500
m1.transferencia(conta1, conta2, 500)
//executou uma transferencia da conta2 para a conta1 no valor de 250
m1.transferencia(conta2, conta1, 250)
//depositou 4000 na conta1
m1.deposito(conta1, 4000)
//retirou 1000 da conta1
m1.retirada(conta1, 1000)
// mostra o extrato das contas
console.log(conta1.extrato);
console.log(conta2.extrato);
