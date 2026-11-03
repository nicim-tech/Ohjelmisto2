function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

console.log(getRandomInt(4));
// Expected output: 0, 1, 2, 3 or 4

console.log(getRandomInt(1));
// Expected output: 0

console.log(Math.random());
// Expected output: a number from 0 to <1