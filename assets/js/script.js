// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", passwordCreate);

var passwordText = document.querySelector("#password");

//Slider
var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function () {
  output.innerHTML = this.value;
};

// Toggle Button
function showQuestions() {
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

// Def this

var toggleQs = document.querySelector("#showQs");
toggleQs.addEventListener("click", showQuestions);

var pwLength;

// Function to pick the characters
function letterRandom(password, isLowerCase) {
  var Letters = Math.floor(Math.random() * 26) + 65;
  if (isLowerCase) {
    return String.fromCharCode(Letters).toLowerCase();
  } else {
    return String.fromCharCode(Letters);
  }
}

function numRandom(password) {
  var number = Math.floor(Math.random() * 10) + 48;
  return String.fromCharCode(number);
}

function specRandom(password) {
  var n = Math.floor(Math.random() * 4);
  if (n === 0) {
    var num1 = Math.floor(Math.random() * 15) + 33;
    return String.fromCharCode(num1);
  } else if (n === 1) {
    var num1 = Math.floor(Math.random() * 7) + 58;
    return String.fromCharCode(num1);
  } else if (n === 2) {
    var num1 = Math.floor(Math.random() * 6) + 91;
    return String.fromCharCode(num1);
  } else {
    var num1 = Math.floor(Math.random() * 4) + 123;
    return String.fromCharCode(num1);
  }
}

// Ask Questions
function askPassword() {
  //Create Variable
  var upperCase = false;
  var lowerCase = false;
  var numbers = false;
  var special = false;
  var password = [];
  var pw;
  var i = 0;

  // While loops to check if questions get answer properly
  pwLength = parseInt(
    prompt("Choose between 8 and 128 characters for the password?")
  );
  while (isNaN(pwLength) == true) {
    pwLength = parseInt(prompt("Please enter a number"));
    while (pwLength < 8 && pwLength <= 128) {
      pwLength = parseInt(
        prompt("Choose between 8 and 128 characters for the password?")
      );
    }
  }

  while (
    upperCase == false &&
    lowerCase == false &&
    numbers == false &&
    special == false
  ) {
    alert("Please select at least one character type.");
    upperCase = confirm("Do you want upper case characters?");
    lowerCase = confirm("Do you want lower case characters?");
    numbers = confirm("Do you want numerical characters?");
    special = confirm("Do you want special characters?");
  }

  // Create the password based on questions
  while (i < pwLength) {
    var n = Math.floor(Math.random() * 4);
    if (n === 0 && upperCase) {
      password.push(letterRandom(password, false));
    } else if (n === 1 && lowerCase) {
      password.push(letterRandom(password, true));
    } else if (n === 2 && numbers) {
      password.push(numRandom(password));
    } else if (n == 3 && special) {
      password.push(specRandom(password));
    }
    joinPassword(password);
    i = pw.length;
  }

  // Function to put password together
  function joinPassword(password) {
    pw = password.join("");
    return pw;
  }

  // Send password back to html
  passwordText.value = pw;
}

// Check Box Questions
function checkboxQuestion() {
  var password = [];
  var pw;
  var j = 0;
  var selectedlist = [];
  var items = document.getElementsByName("characters");
  pwLength = slider.value;

  // Check box questions
  for (var i = 0; i < items.length; i++) {
    if (items[i].type == "checkbox" && items[i].checked == true) {
      selectedlist.push((items[i] = true));
    } else {
      selectedlist.push((items[i] = false));
    }
  }

  // Create the password based on questions
  while (j < pwLength) {
    var num = Math.floor(Math.random() * 4);
    if (num === 0 && selectedlist[0]) {
      password.push(letterRandom(password, false));
    } else if (num === 1 && selectedlist[1]) {
      password.push(letterRandom(password, true));
    } else if (num === 2 && selectedlist[2]) {
      password.push(numRandom(password));
    } else if (num == 3 && selectedlist[3]) {
      password.push(specRandom(password));
    } else if (
      selectedlist[0] == false &&
      selectedlist[1] == false &&
      selectedlist[2] == false &&
      selectedlist[3] == false
    ) {
      alert("Please fill in a checkbox");
      break;
    }
    joinPassword(password);
    j = pw.length;
  }

  // Function to put password together
  function joinPassword(password) {
    pw = password.join("");
    return pw;
  }

  passwordText.value = pw;
}

// Set Display
var x = document.getElementById("questions");
x.style.display = "none";

// Create Password Based on Display
function passwordCreate() {
  if (x.style.display === "none") {
    askPassword();
  } else {
    checkboxQuestion();
  }
}
