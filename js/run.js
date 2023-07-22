//object created to store constraints for password
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

  //new array no uppercase letters
  
  const noUppercase = [

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

  //new array no lowercase letters
  const noLowercase = [

    // Function to randomly select a numericCharacters
    function numericCharacters() {
      return types.numericCharacters[Math.floor(Math.random() * types.numericCharacters.length)];
    },

    // Function to randomly select a specialCharacters
    function specialCharacters() {
      return types.specialCharacters[Math.floor(Math.random() * types.specialCharacters.length)];
    }
  ];
 //no lower case but num sp upp 
 const withUppercase = [

      // Function to randomly select an uppercase letters
      function upperCasedCharacters() {
        return types.upperCasedCharacters[Math.floor(Math.random() * types.upperCasedCharacters.length)];
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

const withULS = [

  // Function to randomly select an uppercase letters
  function upperCasedCharacters() {
    return types.upperCasedCharacters[Math.floor(Math.random() * types.upperCasedCharacters.length)];
  },

  // Function to randomly select a specialCharacters
function specialCharacters() {
return types.specialCharacters[Math.floor(Math.random() * types.specialCharacters.length)];
},
// Function to randomly select an lowercase letters
function lowerCasedCharacters() {
  return types.lowerCasedCharacters[Math.floor(Math.random() * types.lowerCasedCharacters.length)];
}

];

//no numbers
const nonumeric = [

  // Function to randomly select a specialCharacters
  function specialCharacters() {
    return types.specialCharacters[Math.floor(Math.random() * types.specialCharacters.length)];
  }
];
//function call on button to generate button click
function generatePassword() 
{
  let storeValue = ""; // the generated password variable
  
      let userInput = prompt("Please enter a password length between 8 and 128 characters");
        
        //check user input   
        if (userInput>=8 && userInput<=128)
        {
          if(confirm("would you like to add uppercase letters?"))
          {
            if(confirm("would you like to add lowercase letters inside uppercase?"))
            {
              if(confirm("would you like to add numeric characters?"))
              {
                //generate password as per user input
                let i = 0;
                while(i<userInput)
                {
                    let repeatValue = printValues[Math.floor(Math.random() * printValues.length)];
                    storeValue += repeatValue();
                    i=i+1;
                }
              }
              else
              {
                let i = 0;
                while(i<userInput)
                {
                    let repeatValue = withULS[Math.floor(Math.random() * withULS.length)];
                    storeValue += repeatValue();
                    i=i+1;
                }
              }  
            }
            else if(confirm("would you like to add numeric characters?"))
            {
              let i = 0;
              while(i<userInput)
              {
                  let repeatValue = withUppercase[Math.floor(Math.random() * withUppercase.length)];
                  storeValue += repeatValue();
                  i=i+1;
              }
            }
            else
              {
                let i = 0;
                while(i<userInput)
                {
                    let repeatValue = nonumeric[Math.floor(Math.random() * nonumeric.length)];
                    storeValue += repeatValue();
                    i=i+1;
                }
              }
            
          }
          else if(confirm("would you like to add lower characters?"))
          {
            if(confirm("would you like to add numeric characters?"))
            {
              let i = 0;
              while(i<userInput)
              {
                  let repeatValue = noUppercase[Math.floor(Math.random() * noUppercase.length)];
                  storeValue += repeatValue();
                  i=i+1;
              }
            }
          }
          else if(confirm("would you like to add numeric characters?"))
          {
              let i = 0;
              while(i<userInput)
              {
                  let repeatValue = noLowercase[Math.floor(Math.random() * noLowercase.length)];
                  storeValue += repeatValue();
                  i=i+1;
              }
          }
          else 
          {
            let i = 0;
            while(i<userInput)
            {
                let repeatValue = nonumeric[Math.floor(Math.random() * nonumeric.length)];
                storeValue += repeatValue();
                i=i+1;
            }
          }      
        }
        else
        {
          alert("Please enter valid length between 8-128 "); 
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
//function to erase text
  function eraseText() 
  {
        //it will set the value to an empty string
      document.getElementById("password").value = "";
  }