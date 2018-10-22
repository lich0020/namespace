var LICH0020 = {
    init: function(){
    

    var e = document.createElement("div"); //set var e to create new div
    e.className = "box";                    //set class to box
    e.textContent = "lich0020";             //add text to div
    document.getElementById("boxes").appendChild(e); //get html from css file creating the box. and put it as a child of div

    e.addEventListener("click", mouseClick);  //listening for events
    e.addEventListener("mouseover", mouseOver);
    e.addEventListener("mouseout", mouseOut);

}

function mouseClick() {
    this.style.borderColor = "black"; //when clicked border turns black
    this.style.backgroundColor = "green"; //when clicked fill turns green
}

function mouseOver(e) {
    e.target.classList.toggle("highlight"); //toggles css highlight when moused over
}

function mouseOut(e) {
    e.target.classList.toggle("highlight"); //toggles css highlight when moused out
    e.target.removeAttribute('style'); //removes any styling to the box
}

