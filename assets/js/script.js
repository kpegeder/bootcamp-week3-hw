// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;
// }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function writePassword() {
  var pwLength = prompt("How many characters for the password?");
  var up = confirm("Do you want upper case characters?");
  var low = confirm("Do you want lower case characters?");
  var n = confirm("Do you want numerical characters?");
  var s = confirm("Do you want special characters?");

  var password = [];
  var pw;
  var i = 0;

  while (i < pwLength) {
    var num = Math.floor(Math.random() * 4);
    if (num === 0 && up) {
      upperRandom(password);
    } else if (num === 1 && low) {
      lowerRandom(password);
    } else if (num === 2 && n) {
      numRandom(password);
    } else if (num == 3 && s) {
      specRandom(password);
    }
    // else {
    //   alert("Must select a character");
    // }
    joinPassword(password);
    i = pw.length;
  }

  function upperRandom(password) {
    var Letters = Math.floor(Math.random() * 26) + 65;
    password.push(String.fromCharCode(Letters));
    return password;
  }

  function lowerRandom(password) {
    var letters = Math.floor(Math.random() * 26) + 97;
    password.push(String.fromCharCode(letters));
    return password;
  }

  function numRandom(password) {
    var number = Math.floor(Math.random() * 10) + 48;
    password.push(String.fromCharCode(number));
    return password;
  }

  function specRandom(password) {
    var num = Math.floor(Math.random() * 4);
    if (num === 0) {
      var num1 = Math.floor(Math.random() * 15) + 33;
      password.push(String.fromCharCode(num1));
    } else if (num === 1) {
      var num1 = Math.floor(Math.random() * 7) + 58;
      password.push(String.fromCharCode(num1));
    } else if (num === 2) {
      var num1 = Math.floor(Math.random() * 6) + 91;
      password.push(String.fromCharCode(num1));
    } else {
      var num1 = Math.floor(Math.random() * 4) + 123;
      password.push(String.fromCharCode(num1));
    }
    return password;
  }

  function joinPassword(password) {
    pw = password.join("");
    return pw;
  }
  var passwordText = document.querySelector("#password");
  passwordText.value = pw;
}
// //Slider
// var slider = document.getElementById("myRange");
// var output = document.getElementById("demo");
// output.innerHTML = slider.value;

// slider.oninput = function () {
//   output.innerHTML = this.value;
// };

//Checkbox
// function getSelectedCheckboxValues(name) {
//   const checkboxes = document.querySelectorAll(`input[name="${name}"]:checked`);
//   let values = [];
//   checkboxes.forEach((checkbox) => {
//     values.push(checkbox.value);
//   });
//   return values;
// }

// const btn = document.querySelector("#btn");
// btn.addEventListener("click", (event) => {
//   alert(getSelectedCheckboxValues("color"));
// });
