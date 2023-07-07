// Arrays
var lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var numbers = [0,1,2,3,4,5,6,7,8,9]
var special = ["#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","^","_","`","{","|","}"]

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

console.log(lowerChar);
console.log(upperChar);
console.log(numChar);
console.log(specChar);

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

  console.log(chosenChar)

  var passwordArray = []
  // var passwordString = subPassword.toString();

    // combine all characters into a single string
  var allChar = lowercase + uppercase + numbers + special
  console.log(allChar)


  // for loop for as long as i is less then lengthInt,
  for (i = 0; i <= lengthInt; i++){
      // password + pull random letter from the combined character string 
  passwordArray.push(allChar[Math.floor(Math.random() * allChar.length)])
  var newPass = passwordArray.toString()
  } 

  console.log(newPass)
}


// // Get references to the #generate element
var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", writePassword);

  // var passwordPop = passwordArray.pop()

  // use substring on password to remove chosenChar.length charcters
  // var subPassword = passwordArray.slice(-chosenChar.length)
  
  // for loop while i is less than chosenChar.length add chosenChar i to password string (refer to line above)
  // while (i = 0; i <= chosenChar.length; i++) {
  //   subPassword + chosenChar[i]
  // }
  // console.log(passwordArray)
  // console.log(subPassword)