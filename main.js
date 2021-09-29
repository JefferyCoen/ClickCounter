// Without web storage
var total = document.getElementById("number");
var countVal = 0; 

function add() {
    console.log("added");
    countVal += 1; 
    total.innerHTML = countVal;
};

function minus() {
    console.log("subtracted");
    countVal -=1; 
    total.innerHTML = countVal;
};

function refresh() {
    console.log("refreshed");
    countVal = 0; 
    total.innerHTML = countVal;
}