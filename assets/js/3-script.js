function pintar(element, color = "green") {
    element.style.backgroundColor = color
}


ele = document.getElementById("ele1")
color = "yellow"
ele.addEventListener("click", pintar(ele, color))



