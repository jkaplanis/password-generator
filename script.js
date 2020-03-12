// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// TODO: Write code so the generatePassword returns a string for a password
// which meets the requirements in the instructions.

// These are the characters I will choose from
var lowerCaseValue = "abcdefghijklmnopqrstuvwxyz";
var upperCaseValue = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numericValue = "0123456789";
var specialCharValue = "!@#$%^&*";

function generatePassword() {
    return "";
}