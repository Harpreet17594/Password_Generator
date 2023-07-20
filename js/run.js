const types = {
    upperCasedCharacters: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    lowerCasedCharacters: "abcdefghijklmnopqrstuvwxyz",
    numericCharacters: "0123456789",
    specialCharacters: "!@#$%^&*()_+~\`|}{'[]:;?><,./-="
  }
  const printValues = [

    // Function to randomly select an uppercase letters
    function upperCasedCharacters() {
      return types.upperCasedCharacters[Math.floor(Math.random() * types.upperCasedCharacters.length)];
    },

    // Function to randomly select an lowercase letters
    function lowerCasedCharacters() {
      return types.lowerCasedCharacters[Math.floor(Math.random() * types.lowerCasedCharacters.length)];
    },

    // Function to randomly select a numericCharacters
    function numericCharacters() {
      return types.numericCharacters[Math.floor(Math.random() * types.numericCharacters.length)];
    },

    // Function to randomly select a specialCharacters
    function specialCharacters() {
      return types.specialCharacters[Math.floor(Math.random() * types.specialCharacters.length)];
    }
  ];


  
//function call on button to generatepassword click
  function generatePassword() 
  {
    let storeValue = "%dV142**0"; // the generated password variable

    while(storeValue.length>8 && storeValue.length<128)
    {
        
        let repeatValue = printValues[Math.floor(Math.random() * printValues.length)];


        storeValue += repeatValue();
        
    }
    return storeValue;
  }


// Write password to the textarea
function writePassword() 
{
    var password = generatePassword();
    var passwordText = document.querySelector('#password');
    passwordText.value = password;
}


  
// Add event listener to generate button to call writePassword() function which the button is clicked
  document.getElementById("generate").addEventListener("click", writePassword);

//clear button
  document.getElementById("clear").addEventListener("click", eraseText);
  function eraseText() 
  {
      document.getElementById("password").value = "";
  }