const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let firstDisplay = document.querySelector(".displayOne")
let secondDisplay = document.querySelector(".displayTwo")
// let passwordLength = document.getElementById("inputed").value

let passwordLength = 4

function generatePassword() {
    let pass="";    
    for(let i = 0; i < passwordLength; i++){
        pass += characters[ Math.floor(Math.random() * characters.length) ]
    }    
    return pass;
}
function passwords() {
    firstDisplay.textContent = generatePassword()
    secondDisplay.textContent = generatePassword()

}
