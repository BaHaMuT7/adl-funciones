//Se inicializan variables globales a ocupar
let colorA = ""
let colorS = ""
let colorD = ""

//Se inicializa variable para color activo "on key press"
let activeColor = ""

//Se inicializan colores alternativos a ocupar
let color1 = "goldenrod"
let color2 = "purple"
let color3 = "black"

//Se trae cuadro que muestra color para cambiar valor de entrada
const cuadrado = document.getElementById("c-activo")
cuadrado.textContent = "--"

//Se inicializan boxes del DOM para posterior manipulación
const box1 = document.getElementById("box1")
const box2 = document.getElementById("box2")
const box3 = document.getElementById("box3")



//Se crea funcion para manejar colores activos
const asignarColorActivo = (tecla, nuevoColor) => {
    switch (tecla){
        case "a":
            colorA = nuevoColor
            activeColor = colorA
            cuadrado.textContent = ""
            cuadrado.style.backgroundColor = colorA
            break;
        case "s":
            colorS = nuevoColor
            activeColor = colorS
            cuadrado.textContent = ""
            cuadrado.style.backgroundColor = colorS
            break;
        case "d":
            colorD = nuevoColor
            activeColor = colorD
            cuadrado.textContent = ""
            cuadrado.style.backgroundColor = colorD
            break;
        default:
            break;
    }
}

document.addEventListener("keydown", (event) => {
    if (event.key === "a") {
        asignarColorActivo("a", color1)
    }
    else if (event.key === "s") {
        asignarColorActivo("s", color2)
    }
    else if (event.key === "d") {
        asignarColorActivo("d", color3)
    }
    else {
        cuadrado.textContent = "--"
        cuadrado.style.backgroundColor = "white"
        alert("No presionó una tecla válida. Si tecla válida es mayúscula, cámbiela a minúscula")
    }
})


//Se asignan colores activos a cuadrados segun evento onclick, validado el estado del cuadrado

box1.addEventListener("click", () => {
    if (cuadrado.textContent === "") {
        box1.style.backgroundColor = activeColor
    } else {
        alert("No tiene un color seleccionado")
    }
})

box2.addEventListener("click", () => {
    if (cuadrado.textContent === "") {
        box2.style.backgroundColor = activeColor
    } else {
        alert("No tiene un color seleccionado")
    }
})

box3.addEventListener("click", () => {
    if (cuadrado.textContent === "") {
        box3.style.backgroundColor = activeColor
    } else {
        alert("No tiene un color seleccionado")
    }
})
