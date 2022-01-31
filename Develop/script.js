// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

getCriteria();

function getCriteria()
{
  includeLowerCase = window.prompt("Would you like to include lowercase letters in your password? type 1 for yes or 2 for no. ");
  while (includeLowerCase != 1 && includeLowerCase != 2)
  {
  if (includeLowerCase == 1 || includeLowerCase == 2)
  {break;}
  includeLowerCase = window.prompt("Invalid input - try again. type 1 for yes or 2 for no. ");
  }

  includeUpperCase = window.prompt("Would you like to include uppercase letters in your password? type 1 for yes or 2 for no. ");
  while (includeUpperCase != 1 && includeUpperCase != 2)
  {
  if (includeUpperCase == 1 || includeUpperCase == 2)
  {break;}
  includeUpperCase = window.prompt("Invalid input - try again. type 1 for yes or 2 for no. ");
  }

  includeNumeric = window.prompt("Would you like to include numbers in your password? type 1 for yes or 2 for no. ");
  while (includeNumeric != 1 && includeNumeric != 2)
  {
  if (includeNumeric == 1 || includeNumeric == 2)
  {break;}
  includeNumeric = window.prompt("Invalid input - try again. type 1 for yes or 2 for no. ");
  }

  includeSpecial = window.prompt("Would you like to include special characters in your password? type 1 for yes or 2 for no. ");
  while (includeSpecial != 1 && includeSpecial != 2)
  {
  if (includeSpecial == 1 || includeSpecial == 2)
  {break;}
  includeSpecial = window.prompt("Invalid input - try again. type 1 for yes or 2 for no. ");
  }

 if (includeLowerCase==2 && includeUpperCase ==2 && includeNumeric==2 && includeSpecial==2)
 {
  window.alert("Password must contain at least one character type. Please start over");
  getCriteria();
 } 

}
length = window.prompt("How many characters should be in your password. Please select a number from 8-124");
while (length < 8 || length > 124)
{
if (length > 7 && length < 125)
{break;}
length = window.prompt("Invalid input - try again. Must be 8-124 ");
}

buildCharSet();
function buildCharSet()
{
  var charset = "";
  if (includeLowerCase == 1)
  {charset = charset.concat('abcdefghijklmnopqrstuvwxyz');}
  if (includeUpperCase == 1)
  {charset = charset.concat('ABCDEFGHIJKLMNOPQRSTUVWXYZ');}
  if (includeNumeric == 1)
  {charset = charset.concat('0123456789');}
  if (includeSpecial == 1)
  {charset = charset.concat('!"#$%&()*+,-./:;<=>?@[\]^_`{|}~');}
  generateBtn.addEventListener("click", writePassword(charset));
}

// Add event listener to generate button


// Write password to the #password input
function writePassword(charset) 
{
var password = "";
var nextLetter = "a";
var rando = 0;
var setSize = charset.length;
for (var i = 0; i<length; i++)
  {
    rando =Math.floor(Math.random() * setSize);
    nextLetter = charset.charAt(rando);
    password = password.concat(nextLetter);
  }
  
window.alert(password);
}




