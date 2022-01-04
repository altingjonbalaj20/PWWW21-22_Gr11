let date = new Date();
let head = document.getElementById("head");
let light = date.getHours() >= 8 && date.getHours() <= 20;

if(light)
    head.innerHTML += "<link rel='stylesheet' href='\\styles\\fourthwebsite\\lightmode.css' />";
else
    head.innerHTML += "<link rel='stylesheet' href='\\styles\\fourthwebsite\\darkmode.css' />";
    
function onFocus(label){
    let l = document.getElementById(label);
    if(light){
        l.style.color = "#000000";//input border color
        l.style.backgroundColor = "#53918d";//form container background
    }
    else{
        l.style.color = "#5f8b86";//input border color
        l.style.backgroundColor = "#5f5f5f";//form container background
    }

}

function onBlur(input, label){
    let l = document.getElementById(label);
    let i = document.getElementById(input);
    if(i.value.length == 0){
        l.style.color = "transparent";
        l.style.background = "transparent";
    }
}