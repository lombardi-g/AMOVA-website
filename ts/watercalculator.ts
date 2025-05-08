function calculateConsumption(input: number): string | number {

    let consumption: number;
    if (input >= 0 && input <= 6) {
      consumption = 41.18;
  } else if (input > 6 && input <= 10) {
      consumption = (input - 6) * 1.63 + 41.18;
  } else if (input > 10 && input <= 15) {
      consumption = (input - 10) * 11.53 + 47.70;
  } else if (input > 15 && input <= 20) {
      consumption = (input - 15) * 12.34 + 105.35;
  } else if (input > 20 && input <= 25) {
      consumption = (input - 20) * 13.87 + 167.05;
  } else if (input > 25 && input <= 30) {
      consumption = (input - 25) * 15.47 + 236.40;
  } else if (input > 30 && input <= 40) {
      consumption = (input - 30) * 17.00 + 313.75;
  } else if (input > 40 && input <= 50) {
      consumption = (input - 40) * 18.65 + 483.75;
  } else {
      consumption = (input - 50) * 22.44 + 670.25;
  } 
    return consumption.toFixed(2);
}

let aguaInput = document.getElementById('aguaInput') as HTMLInputElement;
let result = document.getElementById('result') as HTMLSpanElement;

aguaInput.addEventListener('input', () => {
  const inputValue = parseFloat(aguaInput.value.trim());

  if (!isNaN(inputValue) && inputValue >= 0) {
    let resultValue = calculateConsumption(inputValue);
    result.textContent = `Resultado: ${resultValue} R$`;
  } else{
    result.textContent = `Inserir número válido`  
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
})
