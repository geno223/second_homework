
// Easy Going Answered

for (let i = 1; i <= 20; i++) {
    console.log(i)
  }

  //Get Even answered

  for (let i = 0; i <= 200; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }

  //Fizz Buzz answered

  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else
   
  if (i % 3 === 0) {
      console.log("Fizz");
    } else
   
  if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }

  //Find the median Answered

  const nums = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12];
const sortedNums = nums.sort();
const median = sortedNums[Math.floor(nums.length / 2)];
console.log(median);




