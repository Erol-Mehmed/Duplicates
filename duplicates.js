



































function duplicates() {
  let str = document.getElementById("string").value;

  let lengthOfStr = str.length;

  let bool = true;

  if (lengthOfStr >= 2) {

    let arrOfInput = str.split('');

    arrOfInput.forEach(el => el !== ' ' ? bool = false : false);

  }

  if (lengthOfStr < 2 || bool) {
    document.getElementById("string").value = '';

    alert("Enter a word at least two character long, please!");

    return;
  }

  document.getElementById("myForm").reset();

  document.getElementById("string2").innerHTML = `In "${str}"`;

  document.getElementById("output").innerHTML = "";

  let arr = str.split(""); // Creating array from the input str using the split() method.

  let lengthOfArr = arr.length;

  let arr2 = [];

  let object = {};

  let duplicatesAndCount = {};

  let result = [];

  for (let i = 0; i < lengthOfArr; i++) {
    if (object[arr[i]] && arr[i] !== " ") {
      // If the str, which is in arr[i] is already a key in object it has the value of true.
      // And then the code in this block is executed.

      arr2.push(arr[i]); // In this array we push only the strs, which we encounter again in our looping through the array arr.
    }

    object[arr[i]] = true; // In every iteration of the loop a new key-value pair is created in object.
    // The keys are the elements of the input str and the value is always 'true'.
    // If we want to put a key name, which already exist in the object we don't create a new key with the same value.
    // Instead we overwrite the existent key name and give the new value to it.
  }

  // console.log(arr2);

  arr2.forEach(
    (i) => (duplicatesAndCount[i] = (duplicatesAndCount[i] || 0) + 1)
  );
  // duplicatesAndCount is an object. We create key-value pairs with the arrow function.
  // i is the parameter of the function, which holds each value of array arr2
  // duplicatesAndCount[i] creates key and the right side of the equation gives value to that key
  // If we already have that key we add 1 to its value, if we don't have it we create new key and give it the value of 1.
  // (duplicatesAndCount[i] || 0) - this conditional means that if duplicatesAndCount[i] is an existent key we add 1 to this key's value,
  // if duplicatesAndCount[i] is undefined we add 1 to 0 and 1 is the value of the new key.
  // We already have the duplicates in arr2 and now we have the count of each duplicate in duplicatesAndCount object.

  // console.log(duplicatesAndCount);

  for (let i = 0; i < Object.keys(duplicatesAndCount).length; i++) {
    result.push(
      Object.keys(duplicatesAndCount)[i],
      Object.values(duplicatesAndCount)[i]
    );
  }

  let index = 0;

  while (true) {
    document.getElementById("output").innerHTML +=
      `${result[index]} occurs ${result[index + 1] + 1} times` + "<br>";

    index = index + 2;

    if (result[index + 1] === undefined) {
      break;
    }
  }
}


let submitElement = document.getElementById('submit');

submitElement.addEventListener('click', e => {

  e.preventDefault();

  duplicates();

});
