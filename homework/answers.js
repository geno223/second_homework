
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


/// Where is Waldo answered


const whereIsWaldo = 
[["Timmy", "Frank"],

"Eggbert",
                    
["Lucinda", "Jacc", "Neff", "Snoop"],
                  
["Petunia", 

  ["Baked Goods", "Waldo"]]];

console.log(whereIsWaldo[1])

whereIsWaldo.splice(1, 1)
console.log(whereIsWaldo)

//changing neff to no one

whereIsWaldo[1][2] = "No One"

console.log(whereIsWaldo)

//Access and console.log "Waldo"
whereIsWaldo[2][1][1]

console.log(whereIsWaldo[2][1][1])


//Methods, Revisited


const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];
// logging titanic index
 console.log(favMovies[8])
//  use the .sort method Thought question: what did this do to the array? Did it permanently alter it?
 favMovies.sort()

 console.log(favMovies)

 //use the methhod pop

 favMovies.pop()

 console.log(favMovies)
//push "Guardians of the Galaxy"

favMovies.push("Guardians of The Galaxy")

console.log(favMovies)

//Reverse the array

favMovies.reverse()

console.log(favMovies)

//Use the shift method

console.log(favMovies.shift())

console.log(favMovies)

//unshift - what does it return?
//returns lentgh of array
favMovies.unshift()

console.log(favMovies.unshift())

//splice "Django Unchained" and add "Avatar" 
//(try finding the index of "Django Unchained", instead of counting it yourself) 
//Thought question: did this permanently alter our array?

favMovies.indexOf("Django Unchained")

console.log(favMovies.indexOf("Django Unchained"))

favMovies.splice(14,1,"Avatar")

console.log(favMovies)
