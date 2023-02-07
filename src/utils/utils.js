function generateRandom(min = 0, max = 12) {
  // find diff
  let difference = max - min;

  // generate random number
  let rand = Math.random();

  // multiply with difference
  rand = Math.floor(rand * difference);

  // add with min value
  rand = rand + min;

  return rand;
}

export function getArrayOfSix() {
  const someArray = [];
  for (let i = 0; i < 15; i++) {
    const randomNumber = generateRandom();
    if (!someArray.includes(randomNumber)) {
      someArray.push(randomNumber);
    }
  }

  return someArray.splice(0, 6);
}
