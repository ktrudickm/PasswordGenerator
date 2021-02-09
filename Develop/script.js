// Assignment Code
var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", Prompt);

function Prompt () {
  var passwordPrompt = prompt("Would you like to create a password? Enter yes or no.");
  passwordPrompt = passwordPrompt.toLowerCase();
  if (passwordPrompt === "yes") {
    generatePassword();
  }
}

function generatePassword() {

  var passLength = false;

  while (!passLength) {
    var passwordLength = parseInt(prompt("How many characters would you like your password (between 8 and 128 characters)?"));
    if (!passwordLength) {
    alert("You must enter a number.");
    passwordLength = parseInt(prompt("How many characters would you like your password (between 8 and 128 characters)?"));
  }
    else if (passwordLength < 8 || passwordLength > 128 || passwordLength === 0) {
    alert("Value must be between 8 and 128.");
    passwordLength = parseInt(prompt("How many characters would you like your password (between 8 and 128 characters)?"));
  }
    else {
    passLength = true;
  }
}

  // Creating the array for the numbers
  var Numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
  numbConfirm = confirm("Will this contain numbers?");

  // Creating array for the characters
  var characters = ["!", "@", "#", "$", "%", "^", "&", "*", "?", "+", "="];
  charConfirm = confirm("Will this contain special characters?");

  //Creating the array for the Uppercase Letters
  upperConfirm = confirm("Will this contain uppercase letters?");
  var uppercase = ["A", "B", "C", "D", "E", "F","G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

  //Creating array for lowercase letters
  lowerConfirm = confirm("Will this contain lowercase letters?");
  var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

  // Adding to the array output using a while loop to add to array until the length of the array matches how long the user wants the password to be
  var output = [];

  while (output.length < passwordLength) {

    if (numbConfirm === true && output.length < passwordLength) {
      output.push(Numbers[Math.floor(Math.random() * Numbers.length)]);
    }

    if (charConfirm === true && output.length < passwordLength) {
      output.push(characters[Math.floor(Math.random() * characters.length)]);
    }

    if (upperConfirm === true && output.length < passwordLength) {
      output.push(uppercase[Math.floor(Math.random() * uppercase.length)]);
    }

    if (lowerConfirm === true && output.length < passwordLength) {
      output.push(lowercase[Math.floor(Math.random() * lowercase.length)]);
    }
  }
  
  // Turning the output array into a string to become the password
  var passwordOutput = output.join("");
  console.log(passwordOutput);
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

console.log(passwordText);

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
