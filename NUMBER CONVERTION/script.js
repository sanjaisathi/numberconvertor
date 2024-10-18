function convertNumber() {
    const number = document.getElementById('numberInput').value;
    const fromBase = document.getElementById('fromBase').value;
    const toBase = document.getElementById('toBase').value;

    // If input is empty, display error
    if (number === "") {
        alert("Please enter a valid number.");
        return;
    }

    let decimalNumber;

    // Convert the number to decimal (base 10)
    try {
        decimalNumber = parseInt(number, fromBase);
        if (isNaN(decimalNumber)) throw new Error();
    } catch (e) {
        alert("Invalid input for the selected base.");
        return;
    }

    // Convert from decimal to the target base
    let convertedNumber = decimalNumber.toString(toBase).toUpperCase();

    // Display the result
    document.getElementById('result').textContent = convertedNumber;
}
