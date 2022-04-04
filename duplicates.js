



































function htmlInput() {

  let inputString = document.getElementById("input").value;

  stringCheck(inputString);

}

function stringCheck(inputString) {

  let lengthOfStr = inputString.length;

  let bool = true;

  if (lengthOfStr >= 2) {

    let arrOfInput = inputString.split('');

    arrOfInput.forEach(el => el !== ' ' ? bool = false : false);

  }

  if (lengthOfStr < 2 || bool) {
    document.getElementById("myForm").reset();

    return alert("Enter a word at least two character long, please!");

  } else {

    displayResult(inputString);

  }

}

function displayResult(inputString) {

  document.getElementById("myForm").reset();

  document.getElementById("wordDisplay").innerHTML = `In "${inputString}"`;

  document.getElementById("output").innerHTML = "";

  some(inputString);

}

function some(inputString) {

  let arrOfInpStr = inputString.split("").filter(chr => chr !== ' ');

  arrOfInpStr = arrOfInpStr.map(chr => chr.toLowerCase());

  let length = arrOfInpStr.length;

  let result = [];

  let object = {};

  arrOfInpStr.forEach(chr => {

    if (!object.hasOwnProperty(chr)) {

      object[chr] = 1;

    } else {

      object[chr] += 1;

    }

  });


  for (let chr in object) {

    if (object[chr] > 1) {

      result.push(`${chr} occurs ${object[chr]} times<br>`);

    }

  }

  console.log(result);

  document.getElementById("output").innerHTML = result.join('');

}


let submitElement = document.getElementById('submit');

submitElement.addEventListener('click', e => {

  e.preventDefault();

  htmlInput();

});
