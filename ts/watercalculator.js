function calculateConsumption(input) {
    var consumption;
    if (input >= 0 && input <= 6) {
        consumption = 36.47;
    }
    else if (input > 6 && input <= 10) {
        consumption = (input - 6) * 1.44 + 36.47;
    }
    else if (input > 10 && input <= 15) {
        consumption = (input - 10) * 10.21 + 42.23;
    }
    else if (input > 15 && input <= 20) {
        consumption = (input - 15) * 10.93 + 93.28;
    }
    else if (input > 20 && input <= 25) {
        consumption = (input - 20) * 12.28 + 147.93;
    }
    else if (input > 25 && input <= 30) {
        consumption = (input - 25) * 13.70 + 209.33;
    }
    else if (input > 30 && input <= 40) {
        consumption = (input - 30) * 15.00 + 277.83;
    }
    else if (input > 40 && input <= 50) {
        consumption = (input - 40) * 16.52 + 427.83;
    }
    else {
        consumption = (input - 50) * 19.87 + 593.03;
    }
    return consumption.toFixed(2);
}
var aguaInput = document.getElementById('aguaInput');
var result = document.getElementById('result');
aguaInput.addEventListener('input', function () {
    var inputValue = parseFloat(aguaInput.value.trim());
    if (!isNaN(inputValue) && inputValue >= 0) {
        var resultValue = calculateConsumption(inputValue);
        result.textContent = "Resultado: ".concat(resultValue, " R$");
    }
    else {
        result.textContent = "Inserir n\u00FAmero v\u00E1lido";
    }
    //   const numericValue = parseFloat(inputValue);
    //   if (isNaN(numericValue)) {
    //       result.textContent = 'Insira um número';
    //   } else if (numericValue < 0 || numericValue > 300) {
    //       result.textContent = 'Error: Value must be between 0 and 300';
    //   } else {
    //       result.textContent = ''; // Clear any previous error messages
    //       // Call your other function here with the valid numericValue
    //       yourOtherFunction(numericValue);
    //   }
    // });
});
