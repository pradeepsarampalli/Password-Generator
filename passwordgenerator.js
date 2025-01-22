const resultPassword = document.getElementById("resultPassword")
const passwordLength = document.getElementById("passwordLen")
const passwordLengthDisplay =document.getElementById("passwordLenDisplay");
const numbers = document.getElementById("numbers")
const symbols = document.getElementById("symbols")
const Random = document.getElementById("Random")
const Pin = document.getElementById("Pin")
const Alphabets = document.getElementById("Alphabets")


let nums = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
let Capitals = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
let smalls = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
let specials = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[", "]", "{", "}", ";", ":", "'", "\"", ",", ".", "<", ">", "/", "?", "\\", "|", "`", "~"]

let selctionIndex;
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

let choice = "Random";
Random.addEventListener("click",event=>{
   choice = "Random";
   Random.style="border-bottom:1 px solid gray"
   Pin.style="border:none"
   Alphabets.style="border:none"
})
Pin.addEventListener("click",event=>{
    choice = "Pin";
    Pin.style="border-bottom:1 px solid gray"
    Random.style="border:none"
    Alphabets.style="border:none"
})
Alphabets.addEventListener("click",event=>{
    choice = "Alphabets"
    Alphabets.style="border-bottom:1 px solid gray"
    Pin.style="border:none"
    Random.style="border:none"
})

function generatePassword(){
    if(choice=="Random"){
    let password = Capitals[Math.floor(Math.random()*Capitals.length)];
    for(let i = 1;i<passwordLen;i++){
        selctionIndex = Math.floor(Math.random()*4)
        if(selctionIndex==0  && !numbers.checked)
            password+=nums[Math.floor(Math.random()*nums.length)]
        else if(selctionIndex==1)
            password+=Capitals[Math.floor(Math.random()*Capitals.length)]
        else if(selctionIndex==2 && !symbols.checked)
            password+=specials[Math.floor(Math.random()*specials.length)]
        else
            password+=smalls[Math.floor(Math.random()*smalls.length)]  
        if ((i + 1) % 20 === 0) {
            password += '\n';
        }
    }
    resultPassword.value=password;
}
else if(choice=="Pin"){
    let password="";
    for(let i = 1;i<passwordLen;i++){
        if(!numbers.checked)
            password+=nums[Math.floor(Math.random()*nums.length)] 
        if ((i + 1) % 20 === 0) {
            password += '\n';
        }
    }
    resultPassword.value=password;
}
else{
    let password = Capitals[Math.floor(Math.random()*Capitals.length)];
    for(let i = 1;i<passwordLen;i++){
        selctionIndex = Math.floor(Math.random()*2)
        if(selctionIndex==0)
            password+=Capitals[Math.floor(Math.random()*Capitals.length)]
        else
            password+=smalls[Math.floor(Math.random()*smalls.length)]  
        if ((i + 1) % 20 === 0) {
            password += '\n';
        }
    }
    resultPassword.value=password;
}
}
