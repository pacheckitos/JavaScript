// 1 - Arrays
const lista = [1, 2, 3, 4, 5];

console.log(lista);
console.log(typeof lista);

const itens = ["Roberto", true, 2, 4.12];
console.log(itens);
// 1 - A - *** Adicionando itens ***
lista.push(6);
console.log(lista);
// push(): Adiciona um item ao final da lista

lista.unshift(0);
console.log(lista);
// unshift: Adiciona um item ao início da lista

// 1 - B *** Removendo itens ***
const itens2 = ["Roberto", true, 2, 4.12];
console.log(itens2);

// pop(): Remove o último item da lista
itens2.pop();
console.log(itens2);

//  shift(): Remove o  primeiro elemento da lista
itens2.shift();
console.log(itens2);

// 2 - Mais sobre arrays
const arr = ["a", "b", "c", "d"];

console.log(arr[0]);
console.log(arr[2]);
console.log(arr[10]);

// 3 - Propiedades
const numbers = [5, 12, 4, 22];

console.log(numbers.length);
console.log(numbers["length"]);

// 4 - Métodos
const otherNumbers = [1, 2, 3];

const allNumbers = numbers.concat(otherNumbers);
console.log(allNumbers);

const text = "algum texto";

console.log(text.toUpperCase());
console.log(typeof text.toUpperCase);
console.log(text.indexOf("g"));

// 5 - Objetos - Object Literals
const person = {
    name: "Roberto",
    age: 36,
    job: "Programador",
};

console.log(person.name);
console.log(person.name.length);
console.log(typeof person);

// 6 - Criando e deletando propriedades
const car = {
    engine: 2.0,
    brand: "VW",
    model: "Tiguan",
    km: 20000,
}

console.log(car);
car.doors = 4;
console.log(car);

delete car.km;
console.log(car);

// 7 - Mais sobre objetos
const obj = {
    a: "teste",
    b: true,
};

console.log(obj instanceof Object); // verifica se retorna True

const obj2 = {
    c: [],
};

Object.assign(obj2, obj);//Copia um objeto para dentro de outro
console.log(obj2);

// 8 - Mais sobre objetos
console.log(Object.keys(obj)); // Retorna o nome das chaves
console.log(Object.keys(obj2));
console.log(Object.keys(person));

console.log(Object.entries(obj));

// 9 - Mutação
const a = {
    name: "Roberto",
};

const b = a;

console.log(a);
console.log(b);
console.log(a === b);

a.age = 40;
console.log(b);

delete b.age;

console.log(a);
console.log(b);


// 10 - Loops de arrays
const users = ["Arthur", "Leonardo", "Lucas", "Matheus", "Yuri", "Willian"];

for( let i=0; i < users.length; i++){
    console.log(`Listando usuário: ${users[i]}`);
};

//11 - indexof e lastindexof
const myElements = ["Morango", "Maçã", "Abacate", "Pêra", "Abacate"];

console.log(myElements.indexOf("Maçã"));
console.log(myElements.indexOf("Abacate"));

console.log(myElements[2]);
console.log(myElements[myElements.indexOf("Abacate")]);

console.log(myElements.lastIndexOf("Abacate"));
console.log();
