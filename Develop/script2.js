// Arrays
var lowercase = "abcdefghijklmnopqrstuvwxyz"
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numbers = "0123456789"
var special = "!@#$%^&*()-_+=[{]}\|;:',<.>/?"

// global variable for password length
var length

function generatePassword() {
var length = Number(window.prompt("Please choose a number between 8 and 128 \nfor your password length."))
var includeLowercase = window.confirm("A good password should have different character types. \nLet's choose some character types for your password! \nWould you like to include lowercase characters? \nIf yes, press OK. If no, press cancel.")
var includeUppercase = window.confirm("Would you like to include uppercase characters? \nIf yes, press OK. If no, press cancel.")
var includeNumbers = window.confirm("Would you like to include numerical characters? \nIf yes, press OK. If no, press cancel.")
var includeSpecial = window.confirm("Would you like to include special characters? \nIf yes, press OK. If no, press cancel.")

if (length < 8 || length >128) {
    window.confirm("Please choose a number between 8 and 128.")
    generatePassword()
    return
    // else if statements that run different functions to generate a password based on what the user chose.
    // option where all characters were selected.
    } else if (includeLowercase && includeUppercase && includeNumbers && includeSpecial) {
        writeAllChar()
    // options where three characters were selected.
    } else if (includeLowercase && includeUppercase && includeNumbers) {
        writeGenLowerUpperNum()
    } else if (includeLowercase && includeUppercase && includeSpecial) {
        writeGenLowerUpperSpec()
    } else if (includeLowercase && includeNumbers && includeSpecial) {
        writeGenLowerNumSpec()
    } else if (includeUppercase && includeNumbers && includeSpecial) {
        writeGenUpperNumSpec()
    // options where two characters were selected.
    } else if (includeLowercase && includeUppercase) {
        writeGenLowerUpper()
    } else if (includeLowercase && includeNumbers) {
        writeGenLowerNum()
    } else if (includeLowercase && includeSpecial) {
        writeGenLowerSpec()
    } else if (includeUppercase && includeNumbers) {
        writeGenUpperNum()
    } else if (includeUppercase && includeSpecial) {
        writeGenUpperSpec()
    } else if (includeNumbers && includeSpecial) {
        writeGenNumSpec()
    // options where one character was selected
    } else if (includeLowercase) {
        writeGenLower()
    } else if (includeUppercase) {
        writeGenUpper()
    } else if (includeNumbers) {
        writeGenNum()
    } else if (includeSpecial) {
        writeGenSpec()
    // option where no characters were chosen
    } else if (!includeLowercase && !includeUppercase && !includeNumbers && !includeSpecial) {
        window.alert("Oops! It looks like no characters were chosen. Please try again.")
        generatePassword()
        return;
    }
    console.log("complete")
}



// make functions for all combos that can happen
function genAllChar(length) {
    var chosenChar = lowercase.concat(uppercase, numbers, special);
    var result = '';
    for (let i = 0; i < length; i++) {
        var random = Math.floor(Math.random() * chosenChar.length);
        result += chosenChar[random];
    }
    return result;
}

function  genLowerUpperNum(length) {
    var chosenChar = lowercase.concat(uppercase, numbers);
    var result = "";
    for (let i = 0; i < length; i++) {
        var random = Math.floor(Math.random() *chosenChar.length);
        result += chosenChar[random]
    }
    return result;
}

function genLowerUpperSpec(length) {
    var chosenChar = lowercase.concat(uppercase, special);
    var result = "";
    for (let i = 0; i < length; i++) {
        var random = Math.floor(Math.random() *chosenChar.length);
        result += chosenChar[random]
    }
    return result;
}

function genLowerNumSpec(length) {
    var chosenChar = lowercase.concat(numbers, special);
    var result = "";
    for (let i = 0; i < length; i++) {
        var random = Math.floor(Math.random() *chosenChar.length);
        result += chosenChar[random]
    }
    return result;
}

function genUpperNumSpec(length) {
    var chosenChar = uppercase.concat(numbers, special);
    var result = "";
    for (let i = 0; i < length; i++) {
        var random = Math.floor(Math.random() *chosenChar.length);
        result += chosenChar[random]
    }
    return result;
}

function genLowerUpper(length) {
    var chosenChar = lowercase.concat(uppercase);
    var result = "";
    for (let i = 0; i < length; i++) {
        var random = Math.floor(Math.random() *chosenChar.length);
        result += chosenChar[random]
    }
    return result;
}

function genLowerNum(length) {
    var chosenChar = lowercase.concat(numbers);
    var result = "";
    for (let i = 0; i < length; i++) {
        var random = Math.floor(Math.random() *chosenChar.length);
        result += chosenChar[random]
    }
    return result;
}

function genLowerSpec(length) {
    var chosenChar = lowercase.concat(special);
    var result = "";
    for (let i = 0; i < length; i++) {
        var random = Math.floor(Math.random() *chosenChar.length);
        result += chosenChar[random]
    }
    return result;
}

function genUpperNum(length) {
    var chosenChar = uppercase.concat(numbers);
    var result = "";
    for (let i = 0; i < length; i++) {
        var random = Math.floor(Math.random() *chosenChar.length);
        result += chosenChar[random]
    }
    return result;
}

function  genUpperSpec(length) {
    var chosenChar = uppercase.concat(special);
    var result = "";
    for (let i = 0; i < length; i++) {
        var random = Math.floor(Math.random() *chosenChar.length);
        result += chosenChar[random]
    }
    return result;
}

function genNumSpec(length) {
    var chosenChar = numbers.concat(special);
    var result = "";
    for (let i = 0; i < length; i++) {
        var random = Math.floor(Math.random() *chosenChar.length);
        result += chosenChar[random]
    }
    return result;
}

function genLower(length) {
    var chosenChar = lowercase;
    var result = "";
    for (let i = 0; i < length; i++) {
        var random = Math.floor(Math.random() *chosenChar.length);
        result += chosenChar[random]
    }
    return result;
}

function genUpper(length) {
    var chosenChar = uppercase;
    var result = "";
    for (let i = 0; i < length; i++) {
        var random = Math.floor(Math.random() *chosenChar.length);
        result += chosenChar[random]
    }
    return result;
}

function genNum(length) {
    var chosenChar = numbers;
    var result = "";
    for (let i = 0; i < length; i++) {
        var random = Math.floor(Math.random() *chosenChar.length);
        result += chosenChar[random]
    }
    return result;
}

function genSpec(length) {
    var chosenChar = special;
    var result = "";
    for (let i = 0; i < length; i++) {
        var random = Math.floor(Math.random() *chosenChar.length);
        result += chosenChar[random]
    }
    return result;
}

// functions that write all the passwords
function writeAllChar() {
    var password = genAllChar(length)
    var passwordText = document.querySelector('#password')

    passwordText.value = password;
}

function writeGenLowerUpperNum() {
    var password = genLowerUpperNum(length)
    var passwordText = document.querySelector('#password')

    passwordText.value = password;
}

function writeGenLowerUpperSpec() {
    var password = genLowerUpperSpec(length)
    var passwordText = document.querySelector('#password')

    passwordText.value = password;
}

function writeGenLowerNumSpec() {
    var password = genLowerNumSpec(length)
    var passwordText = document.querySelector('#password')

    passwordText.value = password;
}

function writeGenUpperNumSpec() {
    var password = genUpperNumSpec(length)
    var passwordText = document.querySelector('#password')

    passwordText.value = password;
}

function writeGenLowerUpper() {
    var password = genLowerUpper(length)
    var passwordText = document.querySelector('#password')

    passwordText.value = password;
}

function writeGenLowerNum() {
    var password = genLowerNum(length)
    var passwordText = document.querySelector('#password')

    passwordText.value = password;
}

function writeGenLowerSpec() {
    var password = genLowerSpec(length)
    var passwordText = document.querySelector('#password')

    passwordText.value = password;
}
function writeGenUpperNum() {
    var password = genUpperNum(length)
    var passwordText = document.querySelector('#password')

    passwordText.value = password;
}

function writeGenUpperSpec() {
    var password = genUpperSpec(length)
    var passwordText = document.querySelector('#password')

    passwordText.value = password;
}

function writeGenNumSpec() {
    var password = genNumSpec(length)
    var passwordText = document.querySelector('#password')

    passwordText.value = password;
}

function writeGenLower() {
    var password = genLower(length)
    var passwordText = document.querySelector('#password')

    passwordText.value = password;
}

function writeGenUpper() {
    var password = genUpper(length)
    var passwordText = document.querySelector('#password')

    passwordText.value = password;
}

function writeGenNum() {
    var password = genNum(length)
    var passwordText = document.querySelector('#password')

    passwordText.value = password;
}

function writeGenSpec() {
    var password = genSpec(length)
    var passwordText = document.querySelector('#password')

    passwordText.value = password;
}


// gets the button element
var generateBtn = document.querySelector("#generate");

// event listener on the button, when clicked, run the generate password function.
generateBtn.addEventListener("click", generatePassword)

