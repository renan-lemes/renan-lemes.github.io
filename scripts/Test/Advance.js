var name
name = 'Renan'

let age = 25
let isHuman = true

let age, isHuman
age = 18
isHuman = true

// multiplos argumentos na função
console.log(name, age, isHuman)

// escrita  de texto + variaveis concatenção 
console.log('o' + name + ' tem ' + age + 'anos')

// interpolando valores
console.log(`o ${name} tem ${age} anos`)

// Object
const person = {
    name: 'renan',
    age: 25,
    weight: 88.6,
    isAdmin: true,
}

console.log(person.age)
console.log(`${person.name} tem ${person.age} anos`)

// Array
const animals = [
    'Lion',
    'Mokey',
    'Cat',
    {
        name: 'Dog',
        age: 3,
    }
]

console.log(animals[0])
console.log(animals.length)
console.log(animals[3].name)

// Exercicios 
let weight;
console.log(typeof weight)

let person = {
    name: 'Renan',
    age: 24,
    stars: 3.2,
    weight: 80,
    isSubscribed: true,
}

console.log(`${person.name} de idade ${person.age} e ${person.weight} kg`)

let student = []

student = [
    person, // ta atribuimos na possição 0 o objeto person
]

const students = {
    name: 'Isak',
    age: 28,
    weight: 74.5,
    isSubscribed: false,
}

student = [
    person,
    students,
]
// outro jeito é 
student[1] = students




