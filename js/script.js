"use strict";

//console.log("Olá Mundo!");

// var nr1 = "10";
// var nr1 = "5";

// console.log(parseInt(nr1)+parseInt(nr2));

// let nome1 = "Dubas";
// //let nome2 = "Serbatinho";
// //const nome3 = "Julia";
// nome = "Ale";
// console.log(nome);

// if(nome1 != ""){
//     let nome1 = "Julia";
// }

// var nome

// console.log(nome1);

/* <button value="click" id="meu-btn">Click</button> */

// declaracao de button do html pelo id
const btn = document.getElementById("meu-btn");

// transformacao do btn em rgb
// elemento.escutarEvento("evento", função)
btn.addEventListener("click", function(){
    // console.log(this.textContent)

    // Função matemática Math
    //randon = Retorna um numero aleatório entre 0 e 1. Ex: 0.23345678;
    //floor  = Arrendonda o número para baixo.
    //ceil  = Arrendonda o número para cima.
    //round  = Arrendonda o número aleatório.

    let r=0,g=0,b=0;

    r = Math.round(Math.random() * 255);
    g = Math.round(Math.random() * 255);
    b = Math.round(Math.random() * 255);

    //this.setAttribute("NOME DO ATRIBUTO", "VALOR INICIAL OU ADICIONADO DO ATRIBUTO")
    //this.setAttribute("style", "background-color:rgb("+r+","+g+","+b+");");
    //com interpolacao
    this.setAttribute("style",`background-color:rgb(${r},${g},${b});`);
});
