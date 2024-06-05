"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let discriminant = b ** 2 - 4 * a * c;

  if (discriminant < 0) {
    return arr;
  } else if (discriminant === 0) {
    let root = -b / (2 * a);
    arr.push(root);
  } else {
    let root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    let root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    arr.push(root1, root2);
  }
  
  return arr;
}


function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  
  let monthlyInterestRate = (percent / 100) / 12;
  
  let loanPrincipal = amount - contribution;
  
  let monthlyPayment = loanPrincipal * (monthlyInterestRate + (monthlyInterestRate / (Math.pow(1 + monthlyInterestRate, countMonths) - 1)));
  
  let totalAmount = monthlyPayment * countMonths;
  
  totalAmount = Math.round(totalAmount * 100) / 100;
  
  return totalAmount;
}
