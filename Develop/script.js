// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  // This code is saying that the passwordText is equal to password,
  // So when we press the generate button, and generate a password, the password
  // Text area will display the password.
  passwordText.value = password;

  function generatePassword () {
    var length = window.prompt("Please choose a number between 8 and 128 \nfor your password length.")
    console.log(length)
    var lengthNum = parseInt(length)
    if (lengthNum < 8 || lengthNum >128) {
      var invalidNum = parseInt(window.prompt("Please enter a number between 8 and 128."))
      console.log(invalidNum)
    } else if (lengthNum >= 8 && lengthNum <=128) {
      var lowercase = window.prompt("A good password should have different character types. \nLet's choose some character types for your password! \nWould you like to include lowercase characters?")
    } else if (lowercase == "yes" || lowercase == "no") {
      var uppercase = window.prompt("Would you like to include uppercase characters?")
    } else if (uppercase == "yes" || uppercase == "no") {
      var numeric = window.prompt("Would you like to include numeric characters?")
    } else if (numeric == "yes" || numeric == "no") {
      window.prompt("Would you like to include special characters?")
    }
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// generatePassword () {
//   var length = window.prompt("Please choose a number between 8 and 128 \nfor your password length.")
//   var lengthNum = length.parseInt()
//   if (lengthNum < 8 || lengthNum >128) {
//     window.prompt("Please enter a number between 8 and 128.")
//   } else if (lengthNum >= 8 && lengthNum <=128) {
//     window.prompt("A good password should have different character types. \nLet's choose some character types for your password! \nWould you like to include lowercase characters?")
// }}

// generatePassword()
