//var

/* var color = "Amarillo"
var color = "Blue"

console.log(color) */


//let
/*  let nombre = "carlos"
nombre = "Pedro"

//let nombre = "Luis" //incorrecto

let fruta
fruta = "piña"

console.log(typeof fruta)  */

//const

/* const color = 'blanco'
color = 'verde' // No es permitido

console.log(color) */


//Operadores matemáticos

/* let shots = 2

console.log( 6 + 4 + 23 )
console.log("Tus shots son: " , shots)

let msj = "Tus shots son: " + shots */

/* let num1 = Number( prompt("Dame un número 1") ) 
let num2 = Number( prompt("Dame un número 2") ) 
console.log( num1 + num2 )*/

//console.log(4 * "cinco") //NaN: Not a Number

/* let shots = 3
shots++
shots++
shots++
shots += 3
shots --
shots --


console.log(shots) */

//Operadores de comparación

// == : evalúa solo valor 
// === : evalúa valor y tipo de dato (recomendable)

//console.log( 3 !== "3" )

/* let numerouno = prompt( "pon un numero" )
let numerodos = 6

console.log(numerouno === numerodos) */

//Para entrar a VIP debes llamarte mario y tener más de 18 años
/* let edad = 10
let nombre = 'MaRiO'.toLowerCase()
 */
//.toLowerCase() : Transforma cadena de caractéres en minúscula
//.toUpperCase() : Transforma cadena de caractéres en mayúscula

//console.log( edad >= 18 || nombre === "mario")



//Condicional if
/*
let color = prompt("dime un color").toLowerCase()

if( color === "azul" ){
    console.log("Adivinaste el color! 😊")
}else if(color === "rojo"){
    console.log("Te ganaste una fresa")
}else if(color === "amarillo"){
    console.log("Te ganaste una piña")
}else{
    console.log("Perdiste :(")
}
*/
document.getElementById('evaluar').addEventListener('click',evaluar);

function evaluar(){
    let nota =document.querySelector(".calificacion").value;
    nota = parseFloat(nota);
    if(nota>=0 && nota<=100){
        const punto= document.getElementById('puntoextra').checked;
        const medioPunto= document.getElementById('puntoParticipacion').checked;
        if (punto && medioPunto) {
            nota+=15;
        }
        else if (punto){
            nota+=10
        }
        else if(medioPunto){
            nota+=5
        }
        console.log('Calificacion Total',nota)
        resultado(nota)
    }
    else{
        alert('Ingrese una Calificacion Valida Entre 0 y 100')
    }    
}
function resultado(nota){
    if (nota>=90){
        alert("El Estudiante Aprueba con Excelente");
    }
    else if(nota>=75 ){
        alert("El Estudiante Aprueba con Bien"); 
    }
    else if(nota>=60){
        alert("El Estudiante Aprueba con Suficiente"); 
    }
    else if(nota<60){
        alert("El Estudiante Reprobo"); 
    }
}
