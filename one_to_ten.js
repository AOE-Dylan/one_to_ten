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
    console.log("I am a billionaire!!!");
  }else if(avenger === "captain america"){
    console.log("Bucky, come back!!!");
  }else if(avenger === "black widow"){
    console.log("Zappppppp!!!");
  }else if(avenger === "thor"){
    console.log("For Asgard!!!");
  }else{
    console.log("Sorry, you are not needed for this mission")
  }
};

avengersAssemble(hero);