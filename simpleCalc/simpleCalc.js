const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function calc(question) {
  const pattern =
    /^What is (-?\d+) (plus|minus|multiplied by|divided by) (-?\d+)\?$/i;
  const matches = pattern.exec(question);

  if (!matches) {
    return null;
  }

  const operand1 = parseInt(matches[1]);
  const operator = matches[2];
  const operand2 = parseInt(matches[3]);

  switch (operator.toLowerCase()) {
    case "plus":
      return `${operand1} plus ${operand2} is ${operand1 + operand2}`;
    case "minus":
      return `${operand1} minus ${operand2} is ${operand1 - operand2}`;
    case "multiplied by":
      return `${operand1} multiplied by ${operand2} is ${operand1 * operand2}`;
    case "divided by":
      return `${operand1} divided by ${operand2} is ${operand1 / operand2}`;
    default:
      return null;
  }
}
rl.question(
  'Enter a math question (e.g. "What is 5 plus 7?"): ',
  (question) => {
    const result = calc(question);

    if (result) {
      console.log(result);
    } else {
      console.log("Invalid input.");
    }
    rl.close();
  }
);
