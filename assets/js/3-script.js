function pintar(element, color = "green") {
    element.style.backgroundColor = color
}

ele = document.getElementById("ele1")
let color = "yellow"
ele.addEventListener("click", () => {
    pintar(ele, color)
})


