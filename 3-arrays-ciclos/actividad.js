let frutas= [
    {
        nombre:"fresa",
        precio:22
    },
    {
        nombre:"mora",
        precio:25
    },
    {
        nombre:"kiwi",
        precio:56
    },
    {
        nombre:"fresa",
        precio:28
    },
    {
        nombre:"kiwi",
        precio:66
    },
    {
        nombre:"zarzamora",
        precio:58
    },
    {
        nombre:"fresa",
        precio:22
    },
    {
        nombre:"frambuesa",
        precio:72,
    }
]
let tiposDeFrutas = [];
let contador = 0;

while (contador < frutas.length) {
    let frutaNombre = frutas[contador].nombre;
    let frutaEncontrada = false;

    for (let i = 0; i < tiposDeFrutas.length; i++) {
        if (tiposDeFrutas[i].nombre === frutaNombre) {
            tiposDeFrutas[i].cantidad++; 
            frutaEncontrada = true;
            break; 
        }
        
    }

    if (frutaEncontrada===false) {
        tiposDeFrutas.push({ nombre: frutaNombre, cantidad: 1 });
    }

    contador++;
}

console.log(tiposDeFrutas);