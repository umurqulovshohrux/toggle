let toggleBtn = document.querySelector(".ball");
let Body = document.getElementById("box");
let Toggle = document.getElementById("toggle-box");

function Function(){
    if(Toggle.style.justifyContent == "right"){
        Toggle.style.justifyContent = "left";
        Body.style.background = "#F7F7FE";
    }else{
        Toggle.style.justifyContent = "right";
        Body.style.background = "#262626";
    }

    
    
  
}