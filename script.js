// Assignment Code
var generateBtn = document.getElementById("generate");
var characters = "abcdefghijkmnopqrstuvxyzABCDEFGHIJKLMNOPQRSTUVXYZ1234567890!@#$%^&*()_+}{"
var password = document.getElementById('password')
// Write password to the #password input

function generatepassword(){
  var newpassword = " "
    for (i = 0; i <35; i++) {
      newpassword += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    password.value = newpassword
   
  }



  // Add event listener to generate button
  generateBtn.addEventListener("click", function () {generatepassword()})
    
    
