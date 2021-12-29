//Aqui temos um printo //
console.log('Hola mundo ')

//String 
'', "", ``
console.log('Renan')
//`` permite que da pra usar multiplas linhas e também expressões de linguagens.
console.log(1 + 1)
console.log(`renan ${1 + 1}`)

//Tipo de dado Number
/*inteiros 
    reais floats
    NaN  not number
    Infinity infinito
*/
console.log(1 / 'dale')

console.log(Infinity)

/*
    Boolean
    true  verdadeiro 
    false falso
*/
console.log(true)

/*
    undefined
        não defenido
    null 
        nulo 
        objeto que não tem nada dentro
        diferente de indefinido
*/

console.log(null === undefined)

/*
    Object
    Objeto
    Propriedades / atributos
    Funcionalidades / Método 
    { propriedades: "valor"}
*/

console.log({
    name: 'Renan',
    idade: '25',
    andar: function () {
        console.log('andar');
    }
})

/*
    Array Vetores
    Uma lista 
    Agrupamento de dados
    ['renan', 30]

*/

console.log(['Renan', 'Ovos', 23, '4'])

//Tipos de dados

// Data types 
//Primitive / Primitive value
//Stryctural
//Structural primitive

// Primitivos 
// String 
// Number 
// Boolean 
// undefined 
// Symbol 
// BigInt

// Estruturais 
// Object 
// Array 
// Map 
// Set 
// Data 
// ...
// Function


//------------------------------------------------------------------------------------------------------//

// Variavel 
// Nomes simbolicos para recer algum valor 
// var 
// let semelhante ao var
// const não pode ser mudada durante a aplicação ou seja ela não muda

var clima = 'Quente'
clima = 'Frio'
console.log(clima)

console.log(typeof clima)
// typeof ve o tipo da variavel

// Scope
// Determina a visibilidade de alguma variavels

// Block statement
// Tambem chamado de nlock-scoped 
{
    let x = 0;
    console.log(x)
    // Aqui dentro é um bloco e posso colocar qualquer código//
}

// var é global e poderá funcionar fora de um escopo de bloco

{
    var y = 0;
}
console.log(y);