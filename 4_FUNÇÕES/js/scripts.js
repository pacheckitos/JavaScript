// 1 - Criando uma função
function minhaFuncao(){
    console.log("Olá, mundo!");
}

minhaFuncao();

const minhaFuncaoEmVariavel = function(){
    console.log("Função em variável!");
}

minhaFuncaoEmVariavel();

function funcaoComParametro(txt){
    console.log(`Imprimindo: ${txt}`);
}

funcaoComParametro("Teste de função com parâmetro");

// 2 - Return

const a = 10;
const b = 20;

function soma(n1, n2){
    return n1 + n2;
}

console.log(`Soma de a + b: ${soma(a, b)}`);

// 3 - Escopo de função
function testandoEscopo(){
    let y = 20;
    console.log(`Valor de y: ${y}`);
}

testandoEscopo();

// 6 - mais sobre Arrow Function

const raizQuadrada = (n) => n * n;

console.log(`Raiza quadrada de 2: ${raizQuadrada(2)}`)