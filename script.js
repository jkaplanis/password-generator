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
    // WHEN prompted for the length of the password
  // THEN I choose a length of at least 8 characters and no more than 128 characters
  var passLength = parseInt(prompt("How long should your password be?"));
  // Check if length provided is between 8 and 128
  if (passLength < 8 || passLength > 128 || isNaN(passLength)) {
    alert("Password must be between 8 and 128 characters");
    // return nothing, end execution. 
    return "";
  }

  // confirm if the user would like to use
  var userLowerCase = confirm("Would you like to use lowercase letters?");
  var userUpperCase = confirm("Would you like to use uppercase letters?");
  var userNumeric = confirm("Would you like to use numbers?");
  var userSpecialChar = confirm("Would you like to use special characters?");

  var charArray = [userLowerCase, userUpperCase, userNumeric, userSpecialChar];
  if (charArray.indexOf(true) === -1) {
    alert("You need to select at least one character type!");
    return "";
  }

  // Now that we have at least one character type selection, compile a list
  // which types we can use to generate our password.
  var availCharacterSets = "";
  // Do this by checking IF the boolean for each confirm is true, if it is
  // then concatanate that string to availCharacterSets
  
  if (userLowerCase){
    availCharacterSets += lowerCaseValue;
  }

  if (userUpperCase){
    availCharacterSets += upperCaseValue;
  }

  if (userNumeric){
    availCharacterSets += numericValue;
  }

  if (userSpecialChar){
    availCharacterSets += specialCharValue;
  }

  // Use math.floor/math.random to make selections from each array at the random 
  // index positions of each. 
  var password = "";
  for (var i = 0; i < passLength; i++){
    // addCharacter Use math.floor/math.random to make selections from availCharacterSets
      var randomIndex = Math.floor(Math.random() * availCharacterSets.length);
      var randomCharacter = availCharacterSets[randomIndex];
      password += randomCharacter;
    // var password += addCharacter

   
  }

  return password;
}