/**
 * Escriba un programa de JavaScript para enumerar las propiedades de un objeto de JavaScript.
    Objeto de muestra:
    var student = {
        name: "David Rayy",
        sclass: "VI",
        rollno: 12
    };
 */
/*** metodo con entries
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
};

let arrayStudent = [Object.entries(student)]
console.log(arrayStudent.length) */
var student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
};
const propiedades = Object.keys(student);

console.log(propiedades)
/**
 * Verifica si la propiedad name se encuentra dentro del siguiente objeto:
    var student = {
        name: "David Rayy",
        sclass: "VI",
        rollno: 12
    };
*/
