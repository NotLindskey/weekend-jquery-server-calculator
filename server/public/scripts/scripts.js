$(document).ready(onReady);

function onReady() {
	console.log("in onReady");

	// operators
	$(".add").on("click", addition);
	$(".subtract").on("click", subtraction);
	$(".multiply").on("click", multiplication);
	$(".divide").on("click", division);

	// clear input fields
	$(".clear-inputs").on("click", clearInputs);
}
// selected operator
let operatorSelected;

function addition() {
	operatorSelected = "+";
}
function subtraction() {
	operatorSelected = "-";
}
function multiplication() {
	operatorSelected = "*";
}
function division() {
	operatorSelected = "/";
}

function clearInputs() {
	$(".user-input-first-number").val("");
	$(".user-input-second-number").val("");
}

let userInput;

function submitValues() {
	userInput = {
		firstNumber: $(".user-input-first-number"),
		secondNumber: $(".user-input-second-number"),
	};
	// postCalculation();
}
