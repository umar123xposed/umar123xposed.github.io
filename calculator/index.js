document.addEventListener("DOMContentLoaded", function(event){
    var buttons = document.querySelectorAll("button");
    var screen = document.querySelector("#screen");

    var currentValue = "";

    buttons.forEach(function(button) {
        button.addEventListener("click", function(event){
            var value = this.value;

            if (value === "=") {
                currentValue= eval(currentValue);
                screen.innerHTML = currentValue;
            } else if (value === "C") {
                // Clear the screen and the accumulated value
                screen.innerHTML = "";
                currentValue = "";
            }
            else if(value==="DEL"){
                currentValue= currentValue.slice(0,-1);
                screen.innerHTML=currentValue;
            }
            else if(value==="%"){
                currentValue= currentValue*100/100;
            } else {
                // Append the clicked value to the accumulated value
                currentValue += value;
                screen.innerHTML = currentValue;
            }
        });
    });
});
