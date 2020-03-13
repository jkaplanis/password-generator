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
  var passLength = parseInt(prompt("How many characters should your password be? \n(must be between 8 and 128 characters)"));
  // check if the value entered is a number
  if (isNaN(passLength)){
    alert("You can only enter numbers for password length!");
    return "";
  }
  // Check if length provided is between 8 and 128
  else if (passLength < 8 || passLength > 128) {
    alert("Password must be between 8 and 128 characters");
    return "";
  }
  
  // confirm if the user would like to use lower, upper, number, special characters
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

  // Declare an array to hold each selected character varable 
  var availCharacterSets = [];
  // Declare a variable to hold the string of all characters available based on users choice
  var availCharacterSetsString = "";

  // Check if each character type is true, if true then add string to availCharacterSetsString
  // and use push function to add variable to availCharacterSets array.
  if (userLowerCase) {
    availCharacterSets.push(lowerCaseValue);
    availCharacterSetsString += lowerCaseValue
  }

  if (userUpperCase) {
    availCharacterSets.push(upperCaseValue);
    availCharacterSetsString += upperCaseValue
  }

  if (userNumeric) {
    availCharacterSets.push(numericValue);
    availCharacterSetsString += numericValue
  }

  if (userSpecialChar) {
    availCharacterSets.push(specialCharValue);
    availCharacterSetsString += specialCharValue
  }

  // Declare variable for final password
  var password = "";

  // for loop to draw one random character from each of the user's perferred lists.
  for (var i = 0; i < availCharacterSets.length; i++) {
    var chosenArray = availCharacterSets[i];
    var chosenArrayIndex = Math.floor(Math.random() * chosenArray.length);
    var randomCharacter = chosenArray[chosenArrayIndex];
    password += randomCharacter;
  }
  // for loop to generate random characters from the string of all available characters. 
  for (var j = password.length; j < passLength; j++) {
    var randomIndex = Math.floor(Math.random() * availCharacterSetsString.length);
    var randomCharacter = availCharacterSetsString[randomIndex];
    password += randomCharacter;
   }
  return password;
}