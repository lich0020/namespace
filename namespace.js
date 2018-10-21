
document.addEventListener("DOMContentLoaded", init);

function init() {


    var LICH0020 = document.createElement("section");
    LICH0020.className = "box";
    LICH0020.textContent = "lich0020";

    
    let boxes = document.getElementById("boxes");
    boxes.appendChild(LICH0020);


    LICH0020.addEventListener("click", mouseClick);
    LICH0020.addEventListener("mouseover", mouseOver);
    LICH0020.addEventListener("mouseout", mouseOut);

}

function mouseClick() {
    this.style.borderColor = "black";
    this.style.backgroundColor = "green";
}

function mouseOver(e) {
    e.target.classList.toggle("highlight");

}

function mouseOut(e) {
    e.target.classList.toggle("highlight");
    e.target.removeAttribute('style');
}
