const cups = {};
const max = Math.max(...input);
const min = Math.min(...input);

function createListOfInput() {
  input.forEach((number, index) => {
    cups[number] = {
      prev: input[(index + (input.length - 1)) % input.length],
      next: input[(index + 1) % input.length],
    };
  });
}

function createListOfNums() {
  for (let i = max + 1; i <= 1000000; i++) {
    cups[i] = {
      prev: i - 1,
      next: i + 1,
    };
  }
}

function isKeepGoing(t, f, s, l) {
  return t === f || t === s || t === l || t < min;
}

function finishCreatingList() {
  cups[input[0]].prev = 1000000;
  cups[input[input.length - 1]].next = max + 1;
  cups[max + 1].prev = input[input.length - 1];
  cups[1000000].next = input[0];
}

function secondProblem(cups, count) {
  let current = input[0];
  const numCups = Object.keys(cups).length;

  for (let i = 0; i < count; i++) {
    let target = current - 1;
    const firstCup = cups[current].next;
    const secondCup = cups[firstCup].next;
    const thirdCup = cups[secondCup].next;
    const fourthCup = cups[thirdCup].next;
    cups[current].next = fourthCup;

    while (isKeepGoing(target, firstCup, secondCup, thirdCup, fourthCup)) {
      target--;
      if (target < min) {
        target = numCups;
      }
    }
    const aftertarget = cups[target].next;
    cups[target].next = firstCup;
    cups[thirdCup].next = aftertarget;
    current = cups[current].next;
  }
  return cups[1].next * cups[cups[1].next].next;
}

createListOfInput();
createListOfNums();
finishCreatingList();
secondProblem(cups, 10000000);
