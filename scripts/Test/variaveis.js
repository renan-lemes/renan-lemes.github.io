

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

}

// Visibilidade das variaveis

// var é global e poderá funcionar fora de um escopo de bloco
// hoisting elevação 
{
    var y = 0;
}
console.log(y);

{
    let y = 0;
}
// let e const não funciona como global ou seja so existe se fizer fora do escopo
console.log(y);

// var e global ou seja funciona fora e dentro do scopo de block
// já cont e let não são globais 

