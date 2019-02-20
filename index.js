// add solution here
function theBeatlesPlay([musicians, instruments]) { // parameters
  var array = [];
  var musicians = ["John Lennon"];
  var instruments = ["guitar"]

  for (var i = 0; i < musicians.length; i++) { //for loops run for a specific number of times
  	array.push(musicians[i] + ' plays ' + instruments[i]);
  } // for loop will execute code multiple times
  // i is a common counter variable
  // for loops need a counter variable, a condition, something to do after each iteration
  return array;
  // "John Lennon plays guitar"
}
const facts =["He was the last Beatle to learn to drive", "He was never a vegetarian", "He was a choir boy and boy scout", "He hated the sound of his own voice"];
function johnLennonFacts(facts) {
  var results = [];
  var count = 0;
  while (count < facts.length) {
    results.push(facts[count] + "!!!");
    count++;
  }
  return results;
  // as long as facts > 0 it will continue to add !!!
} // while loop will continue until no longer true

function iLoveTheBeatles(num) {
  var array = [];
  do {
    array.push("I love the Beatles!")
    num++;
  } while (num < 15);
  return array;
}
// do will run the loop atleast once
// while will run if the condition is true and stops once false
