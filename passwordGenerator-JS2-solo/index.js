let upperCaseLetter = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let lowerCaseLetter = 'abcdefghijklmnopqrstuvwxyz';
let numbers = '0123456789';
let symbols = '!@#$%^';
let extraCharacters = '^&*()_-+=,|:;<>.?/';

let passwordEl1 = document.getElementById('password-el1');
let passwordEl2 = document.getElementById('password-el2');
let upperCaseCheckbox = document.getElementById('upperCase');
let lowerCaseCheckbox = document.getElementById('lowerCase');
let numbersCheckbox = document.getElementById('numbers');
let symbolsCheckbox = document.getElementById('symbols');
let extraCharactersCheckbox = document.getElementById('extraCharacters');

function generatePassword() {
  let passwordLength = parseInt(document.getElementById('length').value);

  // determines if the element with an id "upperCase" is checked or not

  let useUpperCase = upperCaseCheckbox.checked;
  let useLowerCase = lowerCaseCheckbox.checked;
  let useNumbers = numbersCheckbox.checked;
  let useSymbols = symbolsCheckbox.checked;
  let useExtraCharacters = extraCharactersCheckbox.checked;

  // created another variable to use later that will help us modify the password generator

  let characterSet = '';

  if (useUpperCase) {
    characterSet += upperCaseLetter;
  }

  if (useLowerCase) {
    characterSet += lowerCaseLetter;
  }

  if (useNumbers) {
    characterSet += numbers;
  }

  if (useSymbols) {
    characterSet += symbols;
  }

  if (useExtraCharacters) {
    characterSet += extraCharacters;
  }

  //this is the variable where all the functions I created is combined together

  let newPassword1 = generateRandomPassword(passwordLength, characterSet);
  let newPassword2 = generateRandomPassword(passwordLength, characterSet);

  passwordEl1.value = newPassword1;
  passwordEl2.value = newPassword2;
}

//this helps us completely randomize our variables for passwords

function generateRandomPassword(length, characterSet) {
  let newPassword = '';
  for (let i = 0; i < length; i++) {
    let randomIndex = Math.floor(Math.random() * characterSet.length);
    newPassword += characterSet[randomIndex];
  }
  return newPassword;
}

// I can do better here, but this is the hardest part so far that i created. This is for copy function and copy-message

function showMessage(message) {
  const messageContainer = document.getElementById('messageContainer1');
  messageContainer.textContent = message;
  messageContainer.style.display = 'block';

  setTimeout(() => {
    messageContainer.style.display = 'none';
  }, 3000);
}

function copyText1() {
  const input = document.getElementById('password-el1');
  input.select();

  try {
    const successful = document.execCommand('copy');
    if (successful) {
      showMessage('Password copied to clipboard!');
    } else {
      showMessage('Copy to clipboard failed.');
    }
  } catch (err) {
    showMessage('Copy to clipboard is not supported in this browser.');
  }
}

function showMessage(message) {
  const messageContainer = document.getElementById('messageContainer2');
  messageContainer.textContent = message;
  messageContainer.style.display = 'block';

  setTimeout(() => {
    messageContainer.style.display = 'none';
  }, 3000); // Hide the message after 3 seconds
}

function copyText2() {
  const input = document.getElementById('password-el2');
  input.select();

  try {
    const successful = document.execCommand('copy');
    if (successful) {
      showMessage('Password copied to clipboard!');
    } else {
      showMessage('Copy to clipboard failed.');
    }
  } catch (err) {
    showMessage('Copy to clipboard is not supported in this browser.');
  }
}

// Initialize with default values
generatePassword();
