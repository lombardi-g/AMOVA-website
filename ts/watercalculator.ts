function calculateConsumption(input: number): string | number {

    if (isNaN(input)) {
      return 'Digitar um número';
    }
      else if(input<0){
        return 'Digitar número acima de 0';
      }
      else if (input>300) {
        return 'Valor muito alto';
      }
      else{
        return 'Erro';
      }
    
  
    // Calculate consumption based on the provided rules
    let consumption: number;
    if (input >= 0 && input <= 6) {
      consumption = 36.47;
    } else if (input > 6 && input <= 10) {
      consumption = (input - 6) * 1.44 + 36.47;
    } else if (input > 10 && input <= 15) {
      consumption = (input - 10) * 10.21 + 42.23;
    } else if (input > 15 && input <= 20) {
      consumption = (input - 15) * 10.93 + 93.28;
    } else if (input > 20 && input <= 25) {
      consumption = (input - 20) * 12.28 + 147.93;
    } else if (input > 25 && input <= 30) {
      consumption = (input - 25) * 13.70 + 209.33;
    } else if (input > 30 && input <= 40) {
      consumption = (input - 30) * 15.00 + 277.83;
    } else if (input > 40 && input <= 50) {
      consumption = (input - 40) * 16.52 + 427.83;
    } else {
      consumption = (input - 50) * 19.87 + 593.03;
    }
  
    return consumption.toFixed(2);
  }
  