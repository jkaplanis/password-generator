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

  // prompt user for a password length
  var passLength = parseInt(prompt("How many characters should your password be?"));
  // Check if length provided is between 8 and 128
  if (passLength < 8 || passLength > 128 || isNaN(passLength)) {
    alert("Password must be between 8 and 128 characters");
    // return nothing, end execution. 
    return "";
  }
  // confirm if the user would like to use lower, upper, number, special
  var userLowerCase = confirm("Would you like to use lowercase letters?");
  var userUpperCase = confirm("Would you like to use uppercase letters?");
  var userNumeric = confirm("Would you like to use numbers?");
  var userSpecialChar = confirm("Would you like to use special characters?");

  // declare array containing the users boolean response.
  var charArray = [userLowerCase, userUpperCase, userNumeric, userSpecialChar];
  // use indexOf to check if the user chose at least one character type
  if (charArray.indexOf(true) === -1) {
    alert("You need to select at least one character type!");
    return "";
  }

  // Declare a variable to hold the string of available characters
  var availCharacterSets = "";

  // Check if each character type is true, if true then add string to availCharacterSets 
  if (userLowerCase) {
    availCharacterSets += lowerCaseValue;
  }

  if (userUpperCase) {
    availCharacterSets += upperCaseValue;
  }

  if (userNumeric) {
    availCharacterSets += numericValue;
  }

  if (userSpecialChar) {
    availCharacterSets += specialCharValue;
  }

  // Declare variable for final password
  var password = "";
  // In a For loop, use math.random to generate a random index number and save to randomIndex
  // Then use the number generated to select a character from the array availCharacterSets and save to randomCharacter
  // Add randomCharater to password and run the loop until the user entered length is reached. 
  for (var i = 0; i < passLength; i++) {
    var randomIndex = Math.floor(Math.random() * availCharacterSets.length);
    var randomCharacter = availCharacterSets[randomIndex];
    password += randomCharacter;

  }

  return password;
}
