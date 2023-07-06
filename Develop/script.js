// // Assignment code here


// // Get references to the #generate element
// var generateBtn = document.querySelector("#generate");

// // // Write password to the #password input
// function writePassword() 
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

// //   // This code is saying that the passwordText is equal to password,
// //   // So when we press the generate button, and generate a password, the password
// //   // Text area will display the password.
//   passwordText.value = password;

//   function generatePassword () {
//     var length = window.prompt("Please choose a number between 8 and 128 \nfor your password length.")
//     console.log(length)
//     var lengthNum = parseInt(length)
//     if (lengthNum < 8 || lengthNum >128) {
//       var invalidNum = parseInt(window.prompt("Please enter a number between 8 and 128."))
//       console.log(invalidNum)
//     } else if (lengthNum >= 8 && lengthNum <=128) {
//       var lowercase = window.confirm("A good password should have different character types. \nLet's choose some character types for your password! \nWould you like to include lowercase characters?")
//     } else if (lowercase) {
//       var uppercase = window.prompt("Would you like to include uppercase characters?")
//     } else if (uppercase == "yes" || uppercase == "no") {
//       var numeric = window.prompt("Would you like to include numeric characters?")
//     } else if (numeric == "yes" || numeric == "no") {
//       window.prompt("Would you like to include special characters?")
//     }
//   }
// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

// generatePassword () {
//   var length = window.prompt("Please choose a number between 8 and 128 \nfor your password length.")
//   var lengthNum = length.parseInt()
//   if (lengthNum < 8 || lengthNum >128) {
//     window.prompt("Please enter a number between 8 and 128.")
//   } else if (lengthNum >= 8 && lengthNum <=128) {
//     window.prompt("A good password should have different character types. \nLet's choose some character types for your password! \nWould you like to include lowercase characters?")
// }}

// generatePassword()

// Arrays

// concat all the variables
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











    // for (var i = 0; i <= lengthInt; i++) {
    //   i = randomLower
    //   lowercase[i]
    //   console.log()
    // }
    // } else if (includeUppercase) {
    //   for (var i = 0; i <= lengthInt/4; i++) {
    //     i = randomUpper
    //     uppercase[i]
    //   }
    // } else if (includeNumbers) {
    //     for (var i = 0; i <= lengthInt/4; i++) {
    //       i = randomNum
    //       numbers[i]
    //     }
    // } else if (includeSpecial) {
    //       for (var i = 0; i <= lengthInt/4; i++) {
    //         i = randomSpec
    //         special[i]
    //       }
    // } else {
    //       return;
    //     }
    //   }


// // Get references to the #generate element
var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", writePassword);




// }

// function generatePassword() {
//   var length = window.prompt("Please choose a number between 8 and 128 \nfor your password length.");
//   var lengthNum = parseInt(length);
//   if (lengthNum < 8 || lengthNum >128) {
//     var length = parseInt(window.prompt("Please enter a number between 8 and 128."))
//       } else if ((lengthNum || length >= 8) && (lengthNum || length <=128)) {
//         window.prompt("A good password should have different character types. \nLet's choose some character types for your password! \nWould you like to include lowercase characters?")