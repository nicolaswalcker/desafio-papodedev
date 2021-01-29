function changeBlue() {
    document.getElementById("tenis").classList.add('animation');setTimeout(function() {
        document.getElementById("tenis").src = "/assets/img/tenis-azul.svg";
        
    }, 200);
    setTimeout(function(){
        document.getElementById("tenis").classList.remove('animation');
    }, 700)
    
}
function changeRed() {
    document.getElementById("tenis").classList.add('animation');setTimeout(function() {
        document.getElementById("tenis").src = "/assets/img/tenis-vermelho.svg";
    }, 200);
    setTimeout(function(){
        document.getElementById("tenis").classList.remove('animation');
    }, 700)
    
}
function changeGreen() {
    document.getElementById("tenis").classList.add('animation');setTimeout(function() {
        document.getElementById("tenis").src = "/assets/img/tenis-verde.svg";
    }, 200);
    setTimeout(function(){
        document.getElementById("tenis").classList.remove('animation');
    }, 700)
    
}




