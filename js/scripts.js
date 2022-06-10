
// Business Logic

function subtract(number1, number2) {
	return number1 - number2; 
}

function multiply(number1, number2) {
	return number1 * number2; 
}

// v-1

function ccValidator(ccNum) {
  let creditCard = ccNum.split("");
  let doubledNumbers = [];
  for (let index = 0; index < creditCard.length; index +=2) {
    doubledNumbers.push(parseInt(creditCard[index]) * 2);
  }
  return doubledNumbers;
}

// v-2

function ccValidator(ccNum) {
  let creditCard = ccNum.split(" ");
  console.log(creditCard);
  let doubledNumbers = [];
  for (let index = 0; index <= parseInt(creditCard).length; index +=2) {
    doubledNumbers.push([index] * 2);
  }
  return doubledNumbers;
}



// let total = 0;
// const summands = [1, 2, 3, 4, 5];
// for (let index = 0; index < summands.length; index += 1) {
//   total += summands[index];
// }
// total;
