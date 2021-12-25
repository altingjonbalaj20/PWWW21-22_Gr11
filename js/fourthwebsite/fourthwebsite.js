function onFocus(label){
    var l = document.getElementById(label);
    l.style.color = "#736be0";
    l.style.background = "#cac9c9"
}

function onBlur(input, label){
    var l = document.getElementById(label);
    var i = document.getElementById(input);
    if(i.value.length == 0){
        l.style.color = "transparent";
        l.style.background = "transparent";
    }
}