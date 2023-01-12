const flippingCoinSum = (faceUp, faceDown, goal) => {
  const num = Array(faceUp.length + faceDown.length + 1)
    .fill()
    .map(() => Array(goal + 1).fill(Infinity));
  const from = Array(faceUp.length + faceDown.length + 1)
    .fill()
    .map(() => Array(goal + 1).fill());

  num[0][0] = 0;
  faceUp.forEach((f, i) => {
    Array.from({ length: goal + 1 }, (_, j) => j).forEach((j) => {
      if (num[i][j] < Infinity) {
        if (num[i + 1][j] > num[i][j] + 1) {
          num[i + 1][j] = num[i][j] + 1;
          from[i + 1][j] = j;
        }
        if (j + f <= goal && num[i + 1][j + f] > num[i][j]) {
          num[i + 1][j + f] = num[i][j];
          from[i + 1][j + f] = j;
        }
      }
    });
  });
  faceDown.forEach((f, k) => {
    const i = faceUp.length + k;
    Array.from({ length: goal + 1 }, (_, j) => j).forEach((j) => {
      if (num[i][j] < Infinity) {
        if (num[i + 1][j] > num[i][j]) {
          num[i + 1][j] = num[i][j];
          from[i + 1][j] = j;
        }
        if (j + f <= goal && num[i + 1][j + f] > num[i][j] + 1) {
          num[i + 1][j + f] = num[i][j] + 1;
          from[i + 1][j + f] = j;
        }
      }
    });
  });

  if (num[faceUp.length + faceDown.length][goal] >= Infinity)
    return [-123456789];
  return Array.from(
    { length: faceUp.length + faceDown.length },
    (_, i) => i + 1
  ).reduceRight((result, i) => {
    if (i <= faceUp.length && from[i][goal] === goal)
      result.unshift(-faceUp[i - 1]);
    if (i > faceUp.length && from[i][goal] !== goal)
      result.unshift(faceDown[i - faceUp.length - 1]);
    goal = from[i][goal];
    return result;
  }, []);
};

console.log(flippingCoinSum([2, 2, 5], [1, 10], 9)); // Expected output: [].
console.log(flippingCoinSum([2, 2, 5], [1, 10], 14)); // Expected output: [-5, 10].
console.log(flippingCoinSum([2, 2, 5], [2, 10], 3)); // Expected output: [-123456789].
console.log(flippingCoinSum([1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1], 10)); // Expected output: [1, 1, 1].
console.log(
  flippingCoinSum([1, 1, 2, 2, 2, 3, 3, 3, 3], [1, 2, 3, 4, 5, 6, 7], 0)
); // Expected output: [-1, -1, -2, -2, -2, -3, -3, -3, -3 ].
console.log(flippingCoinSum([5, 5, 5, 5, 47, 100], [42, 80, 174], 147)); // Expected output: [-100, 80].
