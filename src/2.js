
const getRandomNumber = () => {
  return Math.floor(Math.random() * 10) + 1;
};

const getSumOfTwoNumbers = (num1, num2) => {
  return num1 + num2;
};

const getProductOfTwoNumbers = (num1, num2) => {
  return num1 * num2;
};

const getAverageOfTwoNumbers = (num1, num2) => {
  return (num1 + num2) / 2;
};

const getMedianOfThreeNumbers = (num1, num2, num3) => {
  const sortedNumbers = [num1, num2, num3].sort((a, b) => a - b);
  return sortedNumbers[1];
};

const getModeOfThreeNumbers = (num1, num2, num3) => {
  const counts = {
    [num1]: 0,
    [num2]: 0,
    [num3]: 0,
  };
  let maxCount = 0;
  let mode = null;
  for (const number of [num1, num2, num3]) {
    counts[number]++;
    if (counts[number] > maxCount) {
      maxCount = counts[number];
      mode = number;
    }
  }
  return mode;
};