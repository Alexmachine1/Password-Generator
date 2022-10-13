const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let firstDisplay = document.querySelector(".displayOne")
let secondDisplay = document.querySelector(".displayTwo")
let generatePassword = document.getElementById("generate-password")
let inputEd = document.getElementById("input-ed")

// const passwordLength = inputEd.value

function randomPassword() {
    let password=""   
    for(let i = 0; i < inputEd.value; i++){
        password += characters[ Math.floor(Math.random() * characters.length) ]
    }    
    return password
}
generatePassword.addEventListener("click", function (){
    firstDisplay.textContent = randomPassword()
    secondDisplay.textContent = randomPassword()

})
