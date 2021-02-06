function firstProblem(input) {
  let startingNumber = input[0];
  let slicedNumbers = '';
  let nextNumber = '';
  let index = 0;
  for (let i = 0; i < 100; i++) {
    const currentArray = [
      ...input.slice(index + 4, input.length),
      ...input.slice(0, index),
    ];
    slicedNumbers = input.slice(index + 1, index + 4);
    nextNumber = findTheNextSmallest(startingNumber, currentArray.slice());
    if (nextNumber == null) {
      nextNumber = Math.max(...currentArray);
      input = updateArray(
        nextNumber,
        slicedNumbers,
        startingNumber,
        currentArray
      );
    } else {
      input = updateArray(
        nextNumber,
        slicedNumbers,
        startingNumber,
        currentArray
      );
    }
    index = input.indexOf(startingNumber) + 1;
    startingNumber = input[index];
  }
  return input;
}

function findTheNextSmallest(num, arr) {
  return arr.sort((a, b) => b - a).find((n) => n < num);
}

function updateArray(num, slicedNumbers, currentNumber, arr) {
  const index = arr.indexOf(num);
  return [
    currentNumber,
    ...arr.slice(0, index + 1),
    ...slicedNumbers,
    ...arr.slice(index + 1),
  ];
}
