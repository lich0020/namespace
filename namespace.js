
document.addEventListener("DOMContentLoaded", init);

function init() {


    var LICH0020 = document.createElement("div"); //creates div
    LICH0020.className = "box";                     // gives div class name box
    LICH0020.textContent = "lich0020";              // text lich0020 is inserted into div
    

    let boxes = document.getElementById("boxes"); //create id boxes
    boxes.appendChild(LICH0020);                  //sets boxes within the div named LICH0020


    
    
    
    
    
    LICH0020.addEventListener("click", mouseClick);
    LICH0020.addEventListener("mouseover", mouseOver);
    LICH0020.addEventListener("mouseout", mouseOut);

}

function mouseClick() {
    this.style.borderColor = "black";      //when clicked border turns black
    this.style.backgroundColor = "green"; //when clicked fill turns green
}

function mouseOver(e) {
    e.target.classList.toggle("highlight");   //toggles css highlight when moused over
}

function mouseOut(e) {
    e.target.classList.toggle("highlight"); //toggles css highlight when moused out
    e.target.removeAttribute('style'); //removes any styling to the box
}
