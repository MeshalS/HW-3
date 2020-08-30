// Constants
const generateBtn = document.querySelector("#generate");

// Functions

/**
 * writes a generated password to the #password
 */
function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;
}

/**
 * generate a password based on certain criteria
 */
let passObjc = {}
let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let specialCharacters = ["`", "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[", "{", "]", "}", "|", ";", ":", "'", "<", ",", ".", ">", "/", "?"]
function generatePassword() {
  // Password is currently blank! We need to make a better one
  // Password is currently blank! We need to make a better one
  // Randomly chooses a choice from the options array. This is the Computer's guess.
  let password = +prompt(" the lenglth of the password  ")
  if (isNaN(password) === true) {
    alert("it should be a number not Word")
    return
    // +'7'>> 7
    // JSON.parse('7') >> 7
    //Number('7') >> 7
  }
  if (password < 8) {
    alert("it should be 8 or more ")
    return
  }
  if (password > 128) {
    alert("it should not be more than 128 ")
    return
  }

  let special = confirm("Do you want to have speaicl charter ")

  let lowercase = confirm("Do you want to  lowercase ")
  let uppercase = confirm("Do you want to  uppercase ")

  let numeric = confirm("Do you want to lower numeric ")
  if (special === false && lowercase === false && uppercase === false && numeric === false) {
    alert("Must select one char type")
    return
  }
  passObjc = {
    password: password,
    special: special,
    lowercase: lowercase,
    uppercase: uppercase,
    numeric: numeric
  }
  return randomNum();

}

function randomNum() {

  let finalPass = '';

  // for (let i = 0; i <8; ++i) {


  // }
  while (finalPass.length < passObjc.password) {

    if (passObjc.special && ValdaitLength(finalPass)) {
      const rand = Math.floor(Math.random() * specialCharacters.length);
      finalPass += specialCharacters[rand];

    }
    if (passObjc.lowercase && ValdaitLength(finalPass)) {
      const rand = Math.floor(Math.random() * lowerCase.length);
      finalPass += lowerCase[rand];
    }

    if (passObjc.uppercase && ValdaitLength(finalPass)) {
      const rand = Math.floor(Math.random() * upperCase.length);
      finalPass += upperCase[rand];
    }
    if (passObjc.numeric && ValdaitLength(finalPass)) {
      const rand = Math.floor(Math.random() * numbers.length);
      finalPass += numbers[rand];

    }

  }
  return finalPass;
  // math.flo


}
function ValdaitLength(final) {
  if (final.length <= passObjc.password) {
    return true
  }
  return false
}




// Main Process

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
