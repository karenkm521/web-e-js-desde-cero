//Variable globales
let nombreSeleccionado="Anonimo";
const boxUsuarios= document.getElementById ("cajaUsuariosDesplegable")
let nombreUsuarios=[
    "Verónica","Erick","Jorge", "Irene","Anonimo"
]
// 1.Funcion que llena el menu desplegable con los nombres de usuario
function imprimirUsuarios(){
    for(let i=0; i<= nombreUsuarios.length-1; i++){
        boxUsuarios.innerHTML += `
        <a class="dropdown-item nombreSelecionado"> ${nombreUsuarios[i]}</a>`
    }
}
imprimirUsuarios()
const usuarioSelect=document.getElementsByClassName("nombreSelecionado")
// 2.Seccion Cambiar el h3 al nombre seleccionado 

// Recorre cada elemento que contenga la clase y se le agrega un evento de clic
for (let usuario of usuarioSelect) {
    usuario.addEventListener("click", cambiarNombre);
}
//Esta funcion se activa cuando el usuario hace clic
function cambiarNombre(event) {
    nombreSeleccionado = event.target.innerText; // Se obtiene el nombre del usuario que hizo clic
    document.getElementById("nombreSelect").innerText = nombreSeleccionado; // Se cambia el nombre
    document.getElementById("fotoPerfil").src = "imagenes/"+nombreSeleccionado+".png";
}

const inputComment = document.getElementById("inputComentario")
const btnComment = document.getElementsByTagName("button")[0]
const boxComments = document.getElementsByClassName("comentarios")[0]
const comments=[]
let i=0
let comentar = (event) => {
    event.preventDefault() //Previene que se actualice el sitio al dar click en comentar
    // 1. Crear instancia de Date y guardarla en variable
    const fecha = new Date();
    // 2. Ejecutar método toDateString () para obtener formato de fecha
    let hoy = fecha.toLocaleDateString("es-ES", { year: "numeric", month: "long", day: "numeric" });
    const hora= fecha.toLocaleTimeString()
    // 3.Creamos el objeto con la info del comentario
    const comment={
            id:1+i++,
            date:hoy,
            hora:hora,
            comment:inputComment.value,
            user:nombreSeleccionado 
    }
    //Añadir objeto comment al array comments
    comments.push(comment)
      //6. llamar a funcion printComment y pasar array comments como argumento
      printComent(comments)
/*

    console.log(inputComment.value)
    boxComments.innerHTML += `<li>${inputComment.value}</li>`
    */inputComment.value = ""
}
let printComent=(array) => {
    boxComments.innerHTML=""
    array.forEach(item => {
        const{ id,date, comment, user,hora}= item
        console.log(comment,date,user)
        boxComments.innerHTML += `
        <div class="tarjetaComentarios"> 
            <div class="datosComentarios">
                <h3>${user} </h3>
                <p>${comment}</p>
                <h4># ${id}   </h4>
                <h5> Publicado: ${date} a las ${hora}  </h4>
            </div>
            <img class="fotoComentario" src="imagenes/${user}.png" alt="">
        </div>
    `
    });
}
btnComment.addEventListener("click",comentar)


