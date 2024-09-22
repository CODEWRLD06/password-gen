const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz';
const upperCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numbers = '0123456789';
const symbols = '!@#$%^&*()_+[]{}|;:,.<>?';


function generatePassword() {
    let characterPool = '';
    let password = '';


    const includeUpperCase = document.getElementById('uppercase').checked;
    const includeNumbers = document.getElementById('number').checked;
    const includeSymbols = document.getElementById('symbol').checked;
    const includeLowerCase = document.getElementById('lowercase').checked;
    const passwordLength = parseInt(document.getElementById('passwordLength').value);


    if (includeUpperCase) {
        characterPool += upperCaseLetters;
    }
    if (includeNumbers) {
        characterPool += numbers;
    }
    if (includeSymbols) {
        characterPool += symbols;
    }
    if(includeLowerCase) {
        characterPool += lowerCaseLetters;
    }
    if (characterPool === '') {
        alert('Please select at least one character type.');
        return;
    }


    for (let i = 0; i < passwordLength; i++) {
        const randomIndex = Math.floor(Math.random() * characterPool.length);
        password += characterPool[randomIndex];
    }


    const generatedPassWord = document.getElementById('password');
    generatedPassWord.value = password;
    generatedPassWord.style.textAlign = 'center';
    generatedPassWord.style.padding = '10px';

    
}


function copyToClipboard() {
    const passwordField = document.getElementById('password');
    passwordField.select();
    document.execCommand('copy');
    alert('Password copied to clipboard!');
}


document.getElementById('generateBtn').addEventListener('click', generatePassword);

document.getElementById('copy').addEventListener('click', copyToClipboard);

