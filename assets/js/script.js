// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  //Create Variable
  var up = false;
  var low = false;
  var n = false;
  var s = false;
  var pwLength = 0;
  var password = [];
  var pw;
  var i = 0;
  var passwordText = document.querySelector("#password");

  // While loops to check if questions get answer properly
  while (pwLength < 8 || pwLength > 128) {
    pwLength = prompt("Choose between 8 and 128 characters for the password?");
  }

  while (up == false && low == false && n == false && s == false) {
    alert("Please select at least one character type.");
    up = confirm("Do you want upper case characters?");
    low = confirm("Do you want lower case characters?");
    n = confirm("Do you want numerical characters?");
    s = confirm("Do you want special characters?");
  }

  // Create the password based on questions
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
    joinPassword(password);
    i = pw.length;
  }

  // Function to pick the characters
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

  // Function to put password together
  function joinPassword(password) {
    pw = password.join("");
    return pw;
  }

  // Send password back to html
  passwordText.value = pw;
  console.log(pw);
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
