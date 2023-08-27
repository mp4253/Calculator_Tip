const calculateTip = () => {
    const billAmount = parseFloat(document.getElementById('billAmount').value);
    const tipPercentage = parseFloat(document.getElementById('tipPercentage').value);

    if(isNaN(billAmount) || isNaN(tipPercentage)){
        alert("Please enter valid numbers");
        return;
    }

    const tipAmount = (billAmount * tipPercentage) / 100;
    const totalAmount = billAmount + tipAmount;

    var a = "only."

    document.getElementById('totalAmount').textContent = totalAmount.toFixed(2)  + "" + a;
}

document.getElementById('calculateBtn').addEventListener("click", calculateTip);
