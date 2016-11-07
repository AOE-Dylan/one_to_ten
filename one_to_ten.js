create the following variables 
// hero with a string value 
// gender with a string value 
// age with a number value 
// weapon with a string value 
// pronoun with an empty value

var Hero = "Hulk";
var gender = "Male";
var age = 22;
var weapon = "Fists of Fury";
var pronoun;
var xp;

// Create a conditional that sets the pronoun variable depending on the gender

if (gender === "Male") {
  pronoun = "He";
} else if (gender === "Female"){
  pronoun = "She";
}else{
 pronoun = "their";
}


// Create a conditional that sets var xp =  "is just beginning" if age is less than 18. 
// If their age is between 21 and 40 out put "has seen a few battles" 
// If their age is greater than 40 out put "has lived through many epic battles"


if (age <= 18) {
  xp = "is just beginning";
}else if (age >=19 && age <=40){
  xp = "has seen a few battles";
}else{
  xp = "has lived through many epic battles";
}

// Create the following sentece using your newly created variables: 
// "[Hulk] is our lovable hero, who [has seen a few battles] with his trusty [sword]."

//var Hero = "Hulk";
//var age = 45;
//var weapon = "sword";

console.log(Hero +  " is our lovable hero, who " + xp + " with his trusty " + weapon)

//1 Fish 2 Fish 
// create a variable named count with no value 
// create a variable named animal and set the variable to any animal as a string 
// create a function name animalHouse that takes two parameters 
// set the count variable to equal the sum of the two parameters 
// console.log the count variable 
// invoke animalHouse

var count;
var animal = "any animal";

function animalHouse (a,b){
  count = a + b;
  console.log("Animal count:" + count);
}

//1 Fish 2 Many Fish (cont.) 
// create a conditional that checks the count variable 
// check if the count is greater than 2 
// console.log 'We have to many elephants' where the animal is the animal variable and an 's' added to the animal. 
// if the first condition is false console.log 'Welcome to the club'

if (count > 2) {
  console.log("We have to many " + animal + "s")
}else{
  console.log("Welcome to the club");
}

//Assemble the Avengers 
// create a variable named hero and set the value to any avenger as a string
var hero = "ironman";

// create a function named avengersAssemble that takes one parameter avenger 
// inside the function create a conditional to check the parameter. 
// console.log and concat the parameter with a different message based on which avenger assembles if the condition is true 
// create four conditions, one for ironman, captain america, black widow and a default to console.log('Sorry, you are not needed for this mission')

function avengersAssemble(avenger) {
  if (avenger === "ironman") {
    console.log(avenger + ": I iz a billionaire!!!");
  }else if(avenger === "captain america"){
    console.log(avenger + ": I haz a shield!!!");
  }else if(avenger === "black widow"){
    console.log(avenger + ": I iz a spy!!!");
  }else if(avenger === "thor"){
    console.log(avenger + ": For Asgard!!!");
  }else{
    console.log("Sorry, you are not needed for this mission")
  }
};

avengersAssemble(hero);

//Lights Out
  // create a variable named lights and set the value to a boolean 
  // create a conditional 
    // if the variable is true console.log('And then there was light')
    // else console.log('Lights out')
var lights = true
if (lights = true) {
  console.log("And then there was light")
}else{
  console.log("Lights out")
}

//Vroom Vroom
  // create a variable named carType and set the value to Toyota, Lamborghini, or Tesla as a string.
  // create a variable named color and set the value to red, blue, or black as a string
  // create a variable named num and set the value to an integer
  //create a conditional and check for the following: 
    // check for a blue Toyota
    // check for a red Lamborghini
    // check for a black Tesla 
  //console log "We have" and your variables. for each condition. 
    // if none of the conditions are true console log this sentence with your variables,"We don't have any blue Toyotas in stock"
var carType = "Toyota"
var color = "red"
var num = 500

if (carType === "Tesla" && color === "black" || carType === "Lamborghini" && color === "red" ||carType === "Toyota" && color === "blue") {
  console.log("We have " + num + " " + color + " " + carType + "s")
} else {
  console.log("We don't have any " + color + " " + carType + "s in stock...  :(")
}