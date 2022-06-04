//characters object that stores different types of characters.
var characters = {
  lowercase: 'abcdefghijklmnopqrstuvqxyz',
  uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  numerics: '123456789',
  special: '!@#$%^&*()_',
}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var passwordLength = prompt("Submit your password length between 8 and 128 characters.");
  if(passwordLength < 8 || passwordLength > 128) {
    alert("You must enter a length between 8 and 128 characters.");
    return writePassword();
  } 
  var rawPassword = "";
  var passwordText = document.querySelector("#password");
  //confirming that the user wants to use this type of character.
  var lowercaseConfirm = confirm("Do you want lowercase letters?");
  if (lowercaseConfirm) {
    rawPassword += characters.lowercase;
    confirm("You selected lowercase letters");
  } 
  else {
    alert("You did not select lowercase letters");
  }
  //confirming that the user wants to use this type of character.
  var uppercaseConfirm = confirm("Do you want uppercase letters?");
  if (uppercaseConfirm) {
    rawPassword += characters.uppercase;
    alert("You selected uppercase letters");
  }
  else {
    alert("You did not select uppercase letters");
  }
  //confirming that the user wants to use this type of character.
  var numericsConfirm = confirm("Do you want numerical characters?");
  if (numericsConfirm) {
    rawPassword += characters.numerics;
    alert("You selected numerical characters");
  }
  else {
    alert("You did not select numerical characters");
  }
  //confirming that the user wants to use this type of character.
  var specialConfirm = confirm("Do you want special characters?");
  if (specialConfirm) {
    rawPassword += characters.special;
    alert("You selected special characters");
  }
  else {
    alert("You did not select special characters");
  }
  if (!specialConfirm && !numericsConfirm && !uppercaseConfirm && !lowercaseConfirm) {
    alert("You must select at least one of the options. Let's restart!");
    return writePassword();
  }

  var password = "";

  //randomly generate characters for the password.
  for (let i = 0; i < passwordLength; i++) {
  password += rawPassword[Math.floor(Math.random() * rawPassword.length)];
  }

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//             
//        .__(.)< (MEOW)
//         \___)   
//  ~~~~~~~~~~~~~~~~~~ 
