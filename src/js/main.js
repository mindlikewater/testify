function fizz (number) {
  if (number % 3 === 0 && number % 5 === 0) {
    return "FizzBuzz";
  } else if (number % 3 === 0) {
    return "Fizz";
  } else if (number % 5 === 0) {
    return "Buzz";
  }  else {
    return number;
  }
};

// Write fizzBuzz here once fizz is finished.
function fizzBuzz (start, end) {
  var results = [];
  for (var count = start; count <= end; count++) {
    results.push(fizz(count));
  }
  console.log(results);
};

fizzBuzz(1,100);

export { fizz };
