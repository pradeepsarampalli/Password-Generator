const passwordType = document.querySelectorAll(".password-type-buttons input")
const resultPassword = document.getElementById("resultPassword")
const passwordLength = document.getElementById("passwordLen")
const passwordLengthDisplay = document.getElementById("passwordLenDisplay")

let typeArray = ['0123456789','`!@#$%^&*()_+=-','ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz']
let numbers = '0123456789'
let capitals = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
let smalls = 'abcdefghijklmnopqrstuvwxyz'
let symbols = '`!@#$%^&*()_+=-'

console.log(passwordType)
let passwordLen = Number(passwordLength.value)
passwordLengthDisplay.textContent = passwordLen

passwordLength.addEventListener("mousemove",event=>{
    passwordLengthDisplay.textContent = passwordLength.value
    passwordLen=passwordLength.value
})
passwordLength.addEventListener("click",event=>{
    passwordLengthDisplay.textContent = passwordLength.value
    passwordLen=passwordLength.value
})
function generatePassword() {
    let choice = "";
    if (passwordType[0].checked)
        choice = capitals + smalls + numbers + symbols;
    else {
        for (let i = 1; i < 4; i++) {
            if (passwordType[i].checked) {
                choice += typeArray[i - 1];
            }
        }
    }
    console.log(choice);
    let password = '';
    for (let i = 0; i < passwordLen; i++) {
        password += choice[Math.floor(Math.random() * choice.length)];
    }
    console.log(password);
    resultPassword.value = password;
}

function copyPassword(){
    navigator.clipboard.writeText(resultPassword.textContent).then(()=>{
        alert("Password copied")
    }).catch(error=>{
        alert("failed to copy",error)
    })
}



