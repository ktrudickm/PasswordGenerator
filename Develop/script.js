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
    var length = parseInt(prompt("How many characters would you like your password (between 8 and 128 characters)?"));
    if (!length) {
    alert("You must enter a number.");
    length = parseInt(prompt("How many characters would you like your password (between 8 and 128 characters)?"));
  }
    else if (length < 8 || length > 128 || length === 0) {
    alert("Value must be between 8 and 128.");
    length = parseInt(prompt("How many characters would you like your password (between 8 and 128 characters)?"));
  }
    else {
    passLength = true;
  }
}




  numbConfirm = confirm("Will this contain numbers?");
  charConfirm = confirm("Will this contain special characters?");
  upperConfirm = confirm("Will this contain uppercase letters?");
  lowerConfirm = confirm("Will this contain lowercase letters?");


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
