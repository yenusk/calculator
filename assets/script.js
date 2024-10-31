

// Function that clear all screen elements 
function toReset() { 
    document.getElementById("screen").value = "" ;
}

// Function that deletes screen elements one by one
function toClear() { 
    let x = document.getElementById("screen").value;
    document.getElementById("screen").value=x.substr(0,x.length-1);
}

// Function to display elements to screen
function toDisplay(val){

    document.getElementById('screen').value += val;

    return val;
}

// Function to evaluate or calculate values
function toEvaluate(){

    let x = document.getElementById('screen').value;

    let y = eval(x);

    document.getElementById('screen').value = y;

    return y;

}