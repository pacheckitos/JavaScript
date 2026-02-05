// 1 - Number
console.log (typeof 2);
console.log (typeof 2.2);
console.log (typeof 4)

// 2 - Ops. aritméticas
console.log(2 + 4);
console.log(10 - 5);
console.log(4 * 5);
console.log(10 / 2);
console.log(5 + (4 * 12));

// 3 - Special Numbers
console.log(typeof Infinity);
console.log(12 * "asd");
console.log(typeof NaN);

// 4 - Strings
console.log("Um texto com aspas");
console.log(`Um texto crase`);
console.log('Um texto com apóstrofe (aspas simples)');
console.log(typeof "Opa");

// 5 - Símbolos especiais em strings
console.log("Testando \nquebra de linha");
console.log("Espaçamento \t de tabulação");

// 6 - Concatenação
console.log("Oi, " + "tudo bem?");
console.log("Testando" + " concatenação")

// 7 - Interpolação (Obrigatoriamente entre crases)
console.log(`A soma de 2 + 2 é: ${2+2}`);
console.log(`Podemos executar qualquer coisa: ${console.log("Teste")}`);

// 8 - Booleans
console.log(5 > 2);
console.log(30 > 100);

// 9 - Comparações
console.log(5 <= 5);
console.log(5 < 5);
console.log(5 == 5);
console.log(5 == 4);
console.log(5 != 4);

// 10 - Idêntico
console.log(5 == "5");
console.log(5 === "5");

// 11 - Operadores lógicos
console.log(true && true);
console.log(true && false);
console.log(5 > 2 && 2 < 10);
console.log (5 > 2 && "Matheus" === 1);
console.log(10 > 2 || 5 > 100);
console.log(!50 > 10);

// 12 - Empty Values
console.log(typeof null, typeof undefined);
console.log(null === undefined);
console.log(null == undefined);
console.log(null == false);

// 13 - Mudanças de tipo
console.log(5 * null);
num = console.log("10" + 1);
console.log(typeof num);
console.log("10" * 10);
console.log("opa" * 10);

const texto = "GOL"
const comemoracao = texto.repeat(5)
console.log(comemoracao);

