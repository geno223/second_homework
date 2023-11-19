
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

//Wild Wild Life Answered



// Increment the age by 1
const plantee = ["Plantee", "plant", 5000, "Mordor"];

plantee[2] = plantee[2] + 1;

console.log(plantee); // Output: ["Plantee", "plant", 5001, "Mordor"]

// Change Wolfy's hometown to "Gotham City"
const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"];

wolfy[3] = "Gotham City";

console.log(wolfy); // Output: ["Wolfy", "wolf", 16, "Gotham City"]

// Add a second hometown to D'Art's array
const dart = ["D'Art", "Demogorgan Dog", 2, "Upside Down"];

dart.push("Hawkins");

console.log(dart); // Output: ["D'Art", "Demogorgan Dog", 2, "Upside Down", "Hawkins"]

//I got stuck changing wolfy name to "gameboy"



//Yell At The Ninja Turtles


// Create an array with the members of the ninja turtles
const ninjaTurtles = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"];

// Use a for...of loop to call toUpperCase() on each of them and print out the result
for (const turtle of ninjaTurtles) {
  console.log(turtle.toUpperCase());
}

//Excited Kitten Answered

for (let i = 1; i <= 20; i++) {
  console.log("Love me, pet me! HSSSSSS!");

  if (i % 2 === 0) {
    const randomMessage = Math.floor(Math.random() * 3);

    switch (randomMessage) {
      case 0:
        console.log("...human...why you taking pictures of me?...");
        break;
      case 1:
        console.log("...the catnip made me do it...");
        break;
      case 2:
        console.log("...why does the red dot always get away...");
        break;
    }
  }
}

