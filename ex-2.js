// Exercise #2: At Least Five Function
function atLeastFive(array, operation) {
  // Start coding here
  return operation(array);
}

const studentScoresRoom1 = [90, 40, 67, 80, 100, 15, 86, 12, 99, 67];
const studentScoresRoom2 = [78, 98, 23, 15, 40, 12, 40, 67, 80, 100];
const studentScoresRoom3 = [67, 80, 100, 15, 12, 40, 67, 80, 100, 67];

// Using `atLeastFive` function here

const checkScore = (array) => {
  let checked = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 70) {
      checked.push(array[i]);
    }
  }
  if (checked.length >= 5) {
    return true;
  } else {
    return false;
  }
};

let scoreRoom1Result;
let scoreRoom2Result;
let scoreRoom3Result;

scoreRoom1Result = atLeastFive(studentScoresRoom1, checkScore);
scoreRoom2Result = atLeastFive(studentScoresRoom2, checkScore);
scoreRoom3Result = atLeastFive(studentScoresRoom3, checkScore);

console.log(scoreRoom1Result);
console.log(scoreRoom2Result);
console.log(scoreRoom3Result);
