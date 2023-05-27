var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.getElementsByTagName("button");

color1.addEventListener("input", function() {
	body.style.background = "linear-gradient(to right, red , yellow)";

})

button.addEventListener("click", function() {
	
})


function winBattle(bool) {
	return bool;
}

var experiencePoints = winBattle(true) ? 10 : 1;

function buttoncommand(buttonname) {
	var whatHappens;
	switch(buttonname) {
	case "w":
		whatHappens = "The player plays a through pass";
		break;
	case"x":
		whatHappens = "The player plays a shot pass"
		break;
	case"a":
		whatHappens = "The player shoots the ball";
		break;
	case"d":
		whatHappens = "The player crossses or hits a more powerful shoot";
		break;
	case"e":
		whatHappens = "The player accerelates";
		break;
	default:
		whatHappens = "Nothing is working";
	}
	return whatHappens;
}

const name = "sally";
const age = 34;
const pet = "horse"

const greetingBest = `Hello ${name} you seem to be ${age-10} years, you really have a nice Dog and ${pet}`

let sym1 = Symbol();
let sym2 = Symbol('foo');
let sym3 = Symbol('foo');

function add(a, b) {
	return a + b;
}

const add2 = (a, b) => a + b;

const a = "test";
const b = true;
let c = 789;

var person = {
	firstName: "John",
	lastName: "Doe",
	years: "50",
	eyeColor: "blue",
	city: "New york"
};

const firstName = person.firstName;
const lastName = person.lastName;
const years = person.age;
const eyeColor = person.eyeColor;
const city = person.city;

var okObj = {
	a,
	b,
	d,
};
var message = `Hello ${firstName} have I met you before? I think we met in ${city} last summer`;

const isValidAge = (age) => 10;

var myfirstsymbol = Symbol("This is my first Symbol");

const whereAmI = (Chisom, california) => "I am not lost";

var whereAmI2 = whereAmI(chisom, california) ? "I am not lost" : "I'm totally lost";

const first = () => {
	const greet = "Hi";
	const second = () => {
		alert(greet);
	}
	return second;
}

const newFunc = first();

const curriedMultiply = (a) => (b) => a * b;
const multiplyBy5 = curriedMultiply(5);

const compose = (f, g) => (a) => f(g(a));
const sum = (num) => num + 1;
compose(sum, sum)(5);

const addTo = (x) => (y) => x + y;
var addToTen = addTo(10);
addToTen(3). //The return here will be 13

const sum = (a, b) => a + b;
const curriedSum = (a) => (b) => a + b;
curriedSum(30)(1); // The return here is 31

const sum = (a, b) => a + b;
const curriedSum = (a) => (b) => a + b;
const add5 = curriedSum(5);
add5(12); //The answer here is 17

const compose = (f, g) => (a) => f(g(a));
const add1 = (num) => num + 1;
const add5 = (num) => num + 5;
compose(add1, add5)(10); // The return here is 16

const array = [1, 2, 10, 16];

const mapArray = array.map((num) => {
	return num * 2;
});

console.log(mapArray);

const name = "Arimzmendi";
































