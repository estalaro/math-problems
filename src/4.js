const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  const problem = generateMathProblem();
  res.send(`${problem}`);
});

function generateMathProblem() {
  const number1 = getRandomInt(1, 10);
  const number2 = getRandomInt(1, 10);
  const operation = getRandomOperation();
  return `${number1} ${operation} ${number2}`;
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomOperation() {
  const operations = ['+', '-', '*', '/'];
  return operations[getRandomInt(0, operations.length)];
}

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
