const divs = document.querySelectorAll(".container > div");
const display = document.querySelector(".display");

for(let i = 0; i < divs.length; i++) {
    divs[i].onmouseover = function() {
        
        const content = event.target.dataset.content;
        display.innerHTML = content;
        
    }
    
     divs[i].onmouseout = function() {
         display.innerHTML = i;
     }
}