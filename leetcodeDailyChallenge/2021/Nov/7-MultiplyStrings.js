let multiply = function (num1, num2) {
  if (num1 === '0' || num2 === '0') {
    return '0';
  }

  let firstNumber = [...num1];
  let secondNumber = [...num2];

  firstNumber.reverse();
  secondNumber.reverse();

  let N = firstNumber.length + secondNumber.length;
  let answer = new Array(N).fill(0);

  for (let place2 = 0; place2 < secondNumber.length; place2++) {
    let digit2 = Number(secondNumber[place2]);

    for (let place1 = 0; place1 < firstNumber.length; place1++) {
      let digit1 = Number(firstNumber[place1]);

      let currentPos = place1 + place2;

      let carry = answer[currentPos];
      let multiplication = digit1 * digit2 + carry;

      answer[currentPos] = multiplication % 10;

      answer[currentPos + 1] += Math.floor(multiplication / 10);
    }
  }

  if (answer[answer.length - 1] == 0) {
    answer.pop();
  }

  answer.reverse();
  return answer.join('');
};
