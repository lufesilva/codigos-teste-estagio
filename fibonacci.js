
function verificaNumeroFibonacci(numero){
    let fibonacci = 0;
    let auxA = 0, auxB = 0;
    for (let i = 0; i < numero; i++){
        if(i == 0)
        {
            auxA = fibonacci;
            auxB = 1;
            fibonacci = auxA + auxB;
        }
        else
        {
            fibonacci = auxA + auxB;
            auxA = auxB;
            auxB = fibonacci;
        }
        
        if(fibonacci === numero)
        {
            console.log("Seu número está em fibonacci!");
        }
    }
}

let numero = 89;
verificaNumeroFibonacci(numero);