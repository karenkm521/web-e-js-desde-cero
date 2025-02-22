let librosLeidos=[]
function agregarLibro(){
    let libro=prompt("Añade un Libro a la Lista")
    while (libro.toLowerCase() !== "salir"){
        librosLeidos.push(libro)
        libro= prompt ("Añade un libro a la Lista, escribe salir para terminar")
    }  
    function mostrarLibros(array){
        document.write(`<h1> Lista de libros</h1> `);
        for (let i = 0; i < array.length; i++) {
            document.write(`<h2>${i + 1}.- ${array[i]} </h2>`);
        }
    }
    mostrarLibros(librosLeidos);

    
}
agregarLibro()
