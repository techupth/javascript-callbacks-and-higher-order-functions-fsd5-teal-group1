//Exercise #2: At Least Five Function

function atLeastFive(array, operation) {
  // Start coding here
  let counter = 0;
  for (let value of array) {
    if (value > 70) {
      counter++;
    }
  }
  return operation(counter);
}
function addResult(counter) {
  if (counter >= 5) {
    return true;
  } else return false;
}

const studentScoresRoom1 = [90, 40, 67, 80, 100, 15, 86, 12, 99, 67];
const studentScoresRoom2 = [78, 98, 23, 15, 40, 12, 40, 67, 80, 100];
const studentScoresRoom3 = [67, 80, 100, 15, 12, 40, 67, 80, 100, 67];

// Using `atLeastFive` function here

let scoreRoom1Result = atLeastFive(studentScoresRoom1, addResult);
let scoreRoom2Result = atLeastFive(studentScoresRoom2, addResult);
let scoreRoom3Result = atLeastFive(studentScoresRoom3, addResult);
console.log(scoreRoom1Result);
console.log(scoreRoom2Result);
console.log(scoreRoom3Result);
