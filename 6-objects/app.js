/**let auto={
    nombre:"kia",
    color:"Azul",
    llantas:"4"
}
//Se  recomienda usar const en lugar de let para evitar la modificacion 
const {nombre,color,llantas}=auto
console.log(llantas)**/
const libro={
    titulo:"la seleccion",
    autor:"kiera cass",
    anio:2012,
    estado:"prestado",
    //this a
    describirLibro:function (){
        return `Libro titulado ${this.titulo}, escrito por ${this.autor} en el año ${this.anio}, el estado es: ${this.estado}.`
    } 
}
console.log(libro.describirLibro())
const cajatTexto =document.getElementById ("infoLibro")
function imprimir (){
    cajatTexto.innerText=libro.describirLibro()
}