//Calculate tip
function calculateTip() {
    var billAmt = document.getElementById("BILLAMT").value;
    var serviceQual = document.getElementById("serviceQual").value;
    var numOfPeople = document.getElementById("PEOPLEAMT").value;
    var tip = document.getElementById("tip");
    

    //validadte input
    if(billAmt === "" || serviceQual == 0) {
        alert("please enter values");
        return;
    }

    // check to see if this input is empty or less than or equal to 1

    if(numOfPeople === "" || numOfPeople <=1) {
        numOfPeople = 1;
        document.getElementById("each").style.display = "none";
    
    } else {
        document.getElementById("each").style.display = "block";
    }

    //calculate tip
    var total = (billAmt * serviceQual)/ numOfPeople;
    //Round to tow decimal places
    total = Math.round(total * 100) / 100;
    //next line allow us to always have two digits after decimal point

    total = total.toFixed(2);

    tip.innerHTML = total;
}

var calculateBill = document.getElementById("calculate");
calculateBill.addEventListener('click', calculateTip);