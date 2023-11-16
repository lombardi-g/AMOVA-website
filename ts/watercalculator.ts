function calculateConsumption(input: number): string | number {

    let consumption: number;
    if (input >= 0 && input <= 6) {
      consumption = 38.92;
  } else if (input > 6 && input <= 10) {
      consumption = (input - 6) * 1.54 + 38.92;
  } else if (input > 10 && input <= 15) {
      consumption = (input - 10) * 10.90 + 45.08;
  } else if (input > 15 && input <= 20) {
      consumption = (input - 15) * 11.66 + 99.58;
  } else if (input > 20 && input <= 25) {
      consumption = (input - 20) * 13.11 + 157.88;
  } else if (input > 25 && input <= 30) {
      consumption = (input - 25) * 14.62 + 223.43;
  } else if (input > 30 && input <= 40) {
      consumption = (input - 30) * 16.07 + 296.53;
  } else if (input > 40 && input <= 50) {
      consumption = (input - 40) * 17.63 + 457.23;
  } else {
      consumption = (input - 50) * 21.21 + 633.53;
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
