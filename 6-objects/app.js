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
    capitulos:["La Carta del Palacio","Un Nuevo Destino","Entre Sedas y Diamantes","El Primer Encuentro","Susurros en el Jardín"],
    describirLibro:function (){
        return `Libro titulado ${this.titulo}, escrito por ${this.autor} en el año ${this.anio}, el Estado es: ${this.estado}. 
        Capitulos: ${this.capitulos}`
    }, 
    agregarCapitulo:function(capitulo){
        this.capitulos.push(capitulo)
    },
    eliminarCapitulo:function(a){
        this.capitulos.splice(a-1,1)
    }
}
libro.agregarCapitulo("");
libro.eliminarCapitulo(2);
console.log(libro.describirLibro())
const cajatTexto =document.getElementById ("infoLibro")
function imprimir (){
    cajatTexto.innerText=libro.describirLibro()
}
