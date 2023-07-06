// Arrays
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var special = "#$%&'()*+,-./:;<=>?@[^_`{|}";

// these generate random numbers to be used in the index of the future variables.
var randomLower = Math.floor(Math.random() * lowercase.length);
var randomUpper = Math.floor(Math.random() * uppercase.length);
var randomNum = Math.floor(Math.random() * numbers.length);
var randomSpec = Math.floor(Math.random() * special.length);

// these these will pick a random index from the above arrays.
var lowerChar = lowercase[randomLower]
var upperChar = uppercase[randomUpper]
var numChar = numbers[randomNum]
var specChar = special[randomSpec]

// console.log(lowerChar);
// console.log(upperChar);
// console.log(numChar);
// console.log(specChar);

// console.log(window)

function writePassword () {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}


function generatePassword() {
  var length = window.prompt("Please choose a number between 8 and 128 \nfor your password length.")
  var lengthInt = parseInt(length)
  var includeLowercase = window.confirm("A good password should have different character types. \nLet's choose some character types for your password! \nWould you like to include lowercase characters? \nIf yes, press OK. If no, press cancel.")
  var includeUppercase = window.confirm("Would you like to include uppercase characters? \nIf yes, press OK. If no, press cancel.")
  var includeNumbers = window.confirm("Would you like to include numerical characters? \nIf yes, press OK. If no, press cancel.")
  var includeSpecial = window.confirm("Would you like to include special characters? \nIf yes, press OK. If no, press cancel.")
  
  var chosenChar = []
  
  if (includeLowercase) {
    chosenChar.push(lowercase[randomLower])
  } 

  if (includeUppercase) {
    chosenChar.push(uppercase[randomUpper])
  } 

  if (includeNumbers) {
    chosenChar.push(numbers[randomNum])
  }

  if (includeSpecial) {
    chosenChar.push(special[randomSpec])
  }

  var password = ""

    // combine all characters into a single string
  var allChar = lowercase + uppercase + numbers + special


  
  // for loop for as long as i is less then lengthInt,
  for (i = 0; i <= lengthInt; i++){
      // password + pull random letter from the combined character string 
  password.pull(allChar[Math.floor(Math.random() * allChar.length)])
      // use substring on password to remove chosenChar.length charcters
      var subPassord = password.substring(0, chosenChar.length)
  } 
  // for loop while i is less than chosenChar.length add chosenChar i to password string (refer to line above)
  for (i = 0; i <= chosenChar.length; i++) {
    subPassord + chosenChar[i]
  }
}

// // Get references to the #generate element
var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", writePassword);