// Assignment Code
var generateBtn = document.querySelector("#generate");

// password character type options
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = [" ", "!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ";", ":", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];
// password special char according to OWASP Foundation

// prompt user for password length
function generatePassword() {
  var askLength = prompt("How long would you like your password to be? Input a number of characters between 8-128");

  // if user input does not fit bounds for password length,
  // number of characters must be between 8 & 128
  while(askLength < 8 || askLength > 128) {
    if(askLength < 0){
      alert("It is impossible to have a password of negative length! Please try again.");
      var askLength = (prompt("How long would you like your password to be? Input a number of characters between 8-128"));
    }
    if(askLength == 0){
      alert("A password without a length is invalid. Please try again.");
      var askLength = (prompt("How long would you like your password to be? Input a number of characters between 8-128"));
    }
    if(0 < askLength < 8){
      alert("Your input contains too few characters. Please try again.");
      var askLength = (prompt("How long would you like your password to be? Input a number of characters between 8-128"));
    }
    if(askLength > 128){
      alert("Your input contains too many characters. Please try again.");
      var askLength = (prompt("How long would you like your password to be? Input a number of characters between 8-128"));
    }
  }

  // confirm character length
  alert(`You chose to have ${askLength} characters`);

  // user input determine which character types to include
  var askLowerCase = confirm("Would you like to include lowercase letters in your password?");
  var askUpperCase = confirm("Would you like to include uppercase letters in your password?");
  var askNumeric = confirm("Would you like to include numbers in your password?");
  var askSpecialChar = confirm("Would you like to include special characters in your password?");

  // must include at least one character type
  if (!askLowerCase && !askUpperCase && !askNumeric && !askSpecialChar) {
    alert("At least one character type must be selected. Please try again.");
    // try character type again if all were previously selected false
    var askLowerCase = confirm("Would you like to include lowercase letters in your password?");
    var askUpperCase = confirm("Would you like to include uppercase letters in your password?");
    var askNumeric = confirm("Would you like to include numbers in your password?");
    var askSpecialChar = confirm("Would you like to include special characters in your password?");
  }
  
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
