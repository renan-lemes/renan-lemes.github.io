
// function statement
function creatPhrases() {
    console.log('Estudar é muito bom')
    console.log('Paciência e persistência')
    console.log('Revisão é a mãe do aprendizado')
}

creatPhrases()

// Funçã anonima
// Function expression
// em javascript sempre vai ter retorno as funções

const sum = function (number1, number2) {
    console.log(number1 + number2)
    let total = number1 + number2
    return total
}

sum(2, 3)
sum(4, 2)
let number1 = 12
let number2 = 37


console.log(`o numero 1 é ${number1}`)
console.log(`o numero 2 é ${number2}`)
console.log(`o total é ${sum(number1, number2)}`)

//Dentro do escopo da função se não declarar o escopo ela vira uma variavel global

console.log(total)

//-------------------------------------------------------------------------------//

function fazerSuco(fruta1, fruta2) {
    return fruta1 + fruta2
}

const copo = fazerSuco('banana', 'maçã')

console.log(copo)

//function scopo

let subject = 'create video'

//Se a função não tem parametro ai ela sobrescreve a variavel
// Caso contrario ela não sobrescreve se tive argumento

function createThink() {
    subject = 'study'
    return subject
}

console.log(createThink(subject))
console.log(subject)

// function hoisting
sayMyName()

function sayMyName() {
    console.log('Renan')
}

// hoisting existe em funções também
// serve para o const e o var ou seja elas não são elevadas 

//arrow function
const sayMyName = (name) => {
    console.log(name)
}
sayMyName('Renan')


//call back function
function sayMyName(name) {
    console.log('antes de executar a função callback')

    name()

    console.log('depois de executar a callback')
}

sayMyName(
    () => {
        console.log('Estou em uma callback')
    }
)

//De outro jeito 
function sayMyName(name) {
    console.log('antes de executar a função callback')

    function name() {
        console.log('estou em uma callback')
    }
    name()
    console.log('depois de executar a callback')
}

// Função construtora
// Function  constructor
// expressao new
// criar um novo objeto
// this kyeword

//Modelo para criar objetos
function Person(name) {
    this.name = name;
    this.walk = function () {
        return this.name + 'está andando'
    }
}
const renan = new Person('Renan')
const joao = new Person('Joao')

console.log(renan.walk())
console.log(joao.walk())

let name = new String("Renan")
let date = new Date("2021-12-29")

console.log(name)
console.log(date)

//Prototype