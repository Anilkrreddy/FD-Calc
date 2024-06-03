function calculateMaturityAmount() {
    const principleInput = document.getElementById('principle');
    const interestRateInput = document.getElementById('interestRate');
    const tenureInput = document.getElementById('tenure');
    const resultElement = document.getElementById('result');
  
    // Clear any previous error message
    resultElement.textContent = 'Maturity Amount: ';
  
  
    // Calculate maturity amount (corrected formula for simple interest)
    const principle = parseFloat(principleInput.value);
    const interestRate = parseFloat(interestRateInput.value) / 100; // Convert to decimal
    const tenure = parseFloat(tenureInput.value);
    const maturityAmount = principle * (1 + interestRate * tenure);
  
    resultElement.textContent += maturityAmount.toFixed(2);
  }
  
  document.getElementById('calculateBtn').addEventListener('click', calculateMaturityAmount);
  