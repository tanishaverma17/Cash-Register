const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
const message = document.querySelector("#error-message");
const noOfNotes = document.querySelectorAll(".no-of-notes");

const avalaibleNotes =[2000,500,100,20,10,5,1];

checkButton.addEventListener("click",function validateBillAndCashAmount(){
    message.style.display = "none";
    if(billAmount.value>0){
        if(cashGiven.value>= billAmount.value){
            const AmountToReturned = cashGiven.value-billAmount.value;
            calculateChange(AmountToReturned);
        }
        else{
            showMessage("The cash Provided should atleast be equal to bill amount")
        }
    }
    else{
        showMessage("Bill Amount should be greater than 0");
    }
});

function calculateChange(AmountToReturned){
    for(let i=0; i<avalaibleNotes.length; i++){
        const numberOfNotes= Math.trunc(AmountToReturned/avalaibleNotes[i]);
        AmountToReturned %= avalaibleNotes[i]; 
        noOfNotes[i].innerText = numberOfNotes;
    }
}

function showMessage(msg){
    message.style.display = "block";
    message.innerText = msg;
}