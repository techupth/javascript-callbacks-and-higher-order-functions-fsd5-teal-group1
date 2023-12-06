//Exercise #2: At Least Five Function

function atLeastFive(array, operation) {
  // Start coding here
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 70) {
      count += 1;
    }
  }
  return operation(count);
}

function isFive(count) {
  return count >= 5 ? true : false;
}

const studentScoresRoom1 = [90, 40, 67, 80, 100, 15, 86, 12, 99, 67];
const studentScoresRoom2 = [78, 98, 23, 15, 40, 12, 40, 67, 80, 100];
const studentScoresRoom3 = [67, 80, 100, 15, 12, 40, 67, 80, 100, 67];

// Using `atLeastFive` function here

let scoreRoom1Result;
let scoreRoom2Result;
let scoreRoom3Result;
scoreRoom1Result = atLeastFive(studentScoresRoom1, isFive);
scoreRoom2Result = atLeastFive(studentScoresRoom2, isFive);
scoreRoom3Result = atLeastFive(studentScoresRoom3, isFive);

console.log(scoreRoom1Result);
console.log(scoreRoom2Result);
console.log(scoreRoom3Result);
