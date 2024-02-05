/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal = {};
// using dot notation give animal a property species
animal.species = 'lion';
// using bracket notation give anime a property name
animal['name'] = 'Leo';
// using either notation give animal a property called noises
animal.noises = [];
console.log(animal);


//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var noises = [];
// use bracket noatation to give your animal noises that it will make
noises[0] = 'roar';
// using a array function add another noises to the end of noises
noises.push("growl");
// add an element to noises using this function
noises.unshift('purr');
noises[noises.length] = 'snore'



//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
// 1. Using bracket syntax, assign the `noises` property on `animal` to our new `noises` array.
animal['noises'] = noises;

// 2. Using any syntax add another noise to the `noises` property on `animal`.
animal.noises.push('Snarl'); // Replace 'Snarl' with another sound your animal might make

// 3. `console.log` `animal`.
console.log(animal);


/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 *
 * 2. What are the different ways of accessing elements on arrays?
 *
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animals = [];
// 2. `push` our `animal` that we created to `animals`.
animals.push(animal);

// 3. `console.log` `animals`. What does it look like?
console.log(animals);

// 4. Create a variable called `duck` and assign it to the data:
var duck = { species: 'duck', name: 'Jerome', noises: ['quack', 'honk', 'sneeze', 'woosh'] };

// 5. `push` `duck` to `animals`.
animals.push(duck);

// 6. `console.log` `animals`. What does it look like?
console.log(animals);

// 7. Create two more animal objects each with a species, a name, and at least two sounds and add each one of them to `animals`.
var cat = { species: 'cat', name: 'Whiskers', noises: ['meow', 'purr'] };
var dog = { species: 'dog', name: 'Buddy', noises: ['bark', 'growl'] };

animals.push(cat, dog);



//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//I'll choose an array to store the list of friends because it provides an ordered collection of elements, and it's easy to add, remove, and access elements.
var friends = [];
function getRandom(array) {
  return Math.floor(Math.random() * array.length);
}

// 6. Using a random index from this function that you just created, get a random animal and add its `name` to `friends`.
var randomIndex = getRandom(animals);
var randomAnimal = animals[randomIndex];
friends.push(randomAnimal.name);

// 7. `console.log` `friends`.
console.log('Friends:', friends);

// 8. Using bracket notation, add the `friends` list as a property also named `friends` on one of the animals in the `animals` array.
var chosenAnimalIndex = getRandom(animals);
animals[chosenAnimalIndex]['friends'] = friends;

// 9. `console.log` your work.
console.log('Updated Animal with Friends:', animals[chosenAnimalIndex]);


/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}