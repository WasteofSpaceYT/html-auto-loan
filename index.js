function calculate() {
    amnt = El("loanAmount").value
    term = El("loanTerm").value
    rate = El("interestRate").value

    El("calcAmnt").textContent = "$" + parseInt(amnt).toLocaleString("en-US")
    El("calcTerm").textContent = term + " months"
    El("calcRate").textContent = rate + "%"
    El("monthly").textContent = "$" + ((amnt*(1+rate/12)^(12*(term/12)))/term).toLocaleString("en-US")

    El("loandat").hidden = false;
}

function El(name) {
    return document.getElementById(name);
}