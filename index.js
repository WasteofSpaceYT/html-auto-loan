// Calculates the loan amount and monthly payments
function calculate() {
    // Get the values from the input fields
    amnt = El("loanAmount").value
    tax = El("tax").value
    term = El("loanTerm").value
    rate = El("interestRate").value

    // Show information about the loan
    El("calcAmnt").textContent = "$" + parseInt(amnt).toLocaleString("en-US")
    El("calcTax").textContent = "$" + ((tax/100)*amnt).toLocaleString()
    El("calcTerm").textContent = term + " months"
    El("calcRate").textContent = rate + "%"

    // p*(1/n)^rt
    El("monthly").textContent = "$" + (((amnt*(1+rate/12)^(12*(term/12)))/term)+((tax/100)*amnt)).toLocaleString("en-US")

    El("loandat").hidden = false;
}

// QOL function to get elements by ID
function El(name) {
    return document.getElementById(name);
}
