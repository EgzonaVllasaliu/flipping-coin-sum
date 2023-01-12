# Flip Card Problem

Given two sets of cards, a set of "face-up" cards and a set of "face-down" cards, and a goal number of face-up cards, the task is to find the minimum number of flips required to achieve the goal number of face-up cards and also the sequence of operations that can convert the cards into the goal number of face-up cards.

## Solution

<div style="margin-left:20px">
    We use dynamic programming approach to solve the problem. we created two 2D arrays `num` and `from` to store the minimum number of moves needed to achieve a certain number of face-up cards and the state that led to the current state respectively.<br><br>
    First, we loop through all elements in the `faceUp` array and for each element, we loop through all possible number of face-up cards and calculate the minimum number of moves needed to achieve that number of face-up cards if the current card is flipped face-up or left face-down.<br><br>
    Then we use this information to update the `num` and `from` arrays.<br><br>
    In the final step, we use the information stored in the `from` array to reconstruct the sequence of moves that led to the final state by traversing the `from` array starting `from` the final state and going backwards.<br><br>
    We return the sequence of moves in the order that the minimum values come first. <br><br>
    By breaking down the problem into smaller sub-problems and avoiding redundant calculations, our solution is much more efficient. <br><br>
</div>

## Usage

<div style="margin-left:20px">
    You can use this function by providing the `faceUp` and `faceDown` arrays, and the `goal` number of face-up cards as inputs, and it will return an array of operations that can convert the cards into the goal number of face-up cards in the order that the minimum values are returned first in the resulting array.
    <br><br>
    You can use this function by providing the `faceUp` and `faceDown` arrays, and the `goal` number of face-up cards as inputs, and it will return an array of operations that can convert the cards into the goal number of face-up cards in the order that the minimum values are returned first in the resulting array.<br><br>
</div>

```javascript
console.log(flippingCoinSum([2, 2, 5], [1, 10], 9));
```

<div style="margin-left:20px">
    `faceUp` and `faceDown` are the input arrays of face-up and face-down cards respectively, and goal is the target number of face-up cards.
    `result` will be the output array that contains the sequence of operations that can convert the cards into the goal number of face-up cards in the order that the minimum values come first.
    <br><br>
</div>

```javascript
const faceUp = [1, 2, 3, 4, 5];
const faceDown = [6, 7, 8, 9, 10];
const goal = 8;

console.log(flip(faceUp, faceDown, goal));

// Output: [-1, -2, -3, 6, 7, 8]
```

## Note

The function returns an array [-123456789] if it's impossible to reach the goal number of face-up cards.
A negative number in the output array represents a face-up card, and a positive number represents a face-down card.
