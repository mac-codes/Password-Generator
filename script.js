// When the "Generate Password" button is clicked the user is presented with a series of prompts requesting password criteria.

var generateBtn = document.querySelector("#generate");


// Initialize prompt sequence
function generatePassword() {
   

  // Select password length prompt
  var passLength = (prompt("Please write how long you want your password. It must be between 8 and 128 characters long."));

  while (isNaN(passLength) || passLength < 8 || passLength > 128) {
    alert("Oops! password must be between 8 and 128 characters. Please try again");
    var passLength = (prompt("Please write how long you want your password. It must be between 8 and 128 characters long."));
  }

  // Confirm password length 
  alert('Thank you, your password will contain ' + passLength + 'characters');


  var charTypes = [];

  // Confirm character type prompts
  var lowerCase = confirm("Please click 'OK' to include lowercase letters, otherwise click 'CANCEL'");
  if (lowerCase === true) {
    charTypes.push(0);
  }
  console.log(lowerCase);

  var upperCase = confirm("Please click 'OK' to include uppercase letters, otherwise click 'CANCEL'");
  if (upperCase === true) {
    charTypes.push(1);
  }
  console.log(upperCase);

  var number = confirm("Please click OK to include numbers, otherwise click CANCEL");
  if (number === true) {
    charTypes.push(2);
  }
  console.log(number);

  var special = confirm("Please click 'OK' to include special characters, otherwise click 'CANCEL'");
  if (special === true) {
    charTypes.push(3);
  }
  console.log(special);

  console.log(charTypes);

  var getPassword = "";

  // Initiate variable array production sequence
    for (var i = 0; i < passLength; i++) {
    var passType =
      charTypes[Math.floor(Math.random() * charTypes.length)];
    console.log(passType);

    
    if (passType === 0) {
      console.log("Random lowercase letter");
     //math for calculating the number of letter/numbers or special characters when compared to ascii table.
      var charCode = Math.floor(Math.random() * 25) + 97;
      console.log(charCode);
      var asciiCode = String.fromCharCode(charCode);
      console.log(asciiCode);
      getPassword = getPassword.concat(asciiCode);
    }

    else if (passType === 1) {
      console.log("Random uppercase letter");
      var charCode = Math.floor(Math.random() * 25) + 65;
      console.log(charCode);
      var asciiCode = String.fromCharCode(charCode);
      console.log(asciiCode);
      getPassword = getPassword.concat(asciiCode);
    }

    else if (passType === 2) {
      console.log("Random number");
      var charCode = Math.floor(Math.random() * 9) + 48;
      console.log(charCode);
      var asciiCode = String.fromCharCode(charCode);
      console.log(asciiCode);
      getPassword = getPassword.concat(asciiCode);
    }

    else if (passType === 3) {
      console.log("Random special character");
      var charCode = Math.floor(Math.random() * 5) + 33;
      var asciiCode = String.fromCharCode(charCode);
      getPassword = getPassword.concat(asciiCode);
    }
    // If user presses cancel for all options, they are sent back to first prompt sequence after seeing these messsages
    else {
      alert("Please select at least one character type.");
      return "Oh no! no password can be generated."
    }

    console.log("Your password is " + getPassword);
    }

  return getPassword;
  }

function writePassword() {
  // Write password to the #password input
  console.log("Button click");
  var password = generatePassword();
  console.log("Display Password " + password);
  var passwordText = document.querySelector("#password");
passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
