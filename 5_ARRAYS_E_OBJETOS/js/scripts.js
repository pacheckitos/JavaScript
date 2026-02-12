// 1 - Arrays
const lista = [1, 2, 3 ,4 ,5];

console.log(lista);
console.log(typeof lista);

const itens2 = ["Roberto", true, 2, 4.12];
console.log(itens2);

// 1.a - ** Adicionando itens **
lista.push(6);
console.log(lista);
// Método push adiciona o item ao final da lista

lista.unshift(0);
console.log(lista);
// Método unshift adiciona o item no início da lista

// 1.b - ** Removendo itens **
itens2.pop();
console.log(itens2);
// Método pop remove o último item da lista


itens2.shift();
console.log(itens2);
// Método shift remove o primeiro elemento da lista

// 2 - Mais sobre arrays
const arr = ["a", "b", "c", "d"];
console.log(arr[0]);
console.log(arr[2]);
console.log(arr[10]);

// 3 - Propriedades
const numbers = [5, 12, 4, 22];
console.log(numbers.length);
console.log(numbers["length"]);

// 4 - Métodos
const otherNumbers = [1, 2, 3];

const allNumbers = numbers.concat(otherNumbers);
console.log(allNumbers);

const text = "algum texto";
console.log(text);
console.log(text.toUpperCase());
console.log(typeof text.toUpperCase());
console.log(text.indexOf("g"));

// 5 - Objetos - Object Literals
const person = {
    name: "Roberto",
    age: 36,
    job: "Programador"
};

console.log(person.name);

// 6 - Criando e deletando propriedades
const car = {
    engine: 2.0,
    brand: "Volkswagen",
    model: "Tiguan",
    km: 20000
}

console.log(car);
car.doors = 4;
console.log(car);

delete car.km;
console.log(car);

// 7 - Mais sobre objetos
const obj = {
    a: "teste",
    b: true
}

console.log(obj instanceof Object);

const obj2 = {
    c: []
};

Object.assign(obj2, obj);
console.log(obj2);

// 8 - Mais sobre objetos
console.log(Object.keys(obj)); // Retorna o nome das chaves
console.log(Object.keys(obj2));
console.log(Object.keys(person));

console.log(Object.entries(obj));

// 9 - Mutação
const a = {
    name: "Roberto"
};

const b = a;

console.log(a);
console.log(b);
console.log(b === a);

a.age = 40;
console.log(b)

console.log(a);
console.log( b);

// 10 - Loops de arrays
const users = ["Arthur", "Leonardo", "Lucas", "Matheus", "Yuri", "Willian"];

for (let i =  0; i < users.length; i++){
    console.log(`Listando usuário: ${users[i]}`)
}