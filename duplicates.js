function htmlInput() {
  // This function gets the user input.

  let inputString = document.getElementById("input").value;

  stringCheck(inputString);
}

function stringCheck(inputString) {
  // This function checks if the input string meets the requirements.

  let lengthOfStr = inputString.length;

  let bool = true;

  if (lengthOfStr >= 2) {
    let arrOfInput = inputString.split("");

    arrOfInput.forEach((el) => (el !== " " ? (bool = false) : false));
  }

  if (lengthOfStr < 2 || bool) {
    document.getElementById("myForm").reset();

    return alert("Enter a word at least two character long, please!");
  } else {
    displayInputString(inputString);
  }
}

function displayInputString(inputString) {
  // This function displays the string that the user inputted.

  document.getElementById("myForm").reset();

  document.getElementById("wordDisplay").innerHTML = `In "${inputString}"`;

  document.getElementById("output").innerHTML = "";

  arrayCreation(inputString);
}

function arrayCreation(inputString) {
  // This function transforms the input string into an array.
  // And turns all characters into lowercase.

  let arrOfInpStr = inputString.split("").filter((chr) => chr !== " ");

  arrOfInpStr = arrOfInpStr.map((chr) => chr.toLowerCase());

  objectCreation(arrOfInpStr);
}

function objectCreation(arrOfInpStr) {
  // This function creates object from the characters of the input string.
  // The characters are properties of the object and the values are how many times they are present in the input string.

  let object = {};

  arrOfInpStr.forEach((chr) => {
    if (!object.hasOwnProperty(chr)) {
      object[chr] = 1;
    } else {
      object[chr] += 1;
    }
  });

  fillingResult(object);
}

function fillingResult(object) {
  // This function fills the result array with the strings to be displayed.

  let result = [];

  for (let chr in object) {
    if (object[chr] > 1) {
      result.push(`${chr} occurs ${object[chr]} times<br>`);
    }
  }

  displayResult(result);
}

function displayResult(result) {
  // This function either displays the content of the result array or that there are no duplicates in the input string.

  if (result.length > 0) {
    document.getElementById("output").innerHTML = result.join("");
  } else {
    document.getElementById("output").innerHTML = `No duplicates`;
  }
}

// The code below gets the submit button element and attach an event listener to it.

let submitElement = document.getElementById("submit");

submitElement.addEventListener("click", (e) => {
  e.preventDefault();

  htmlInput();
});
