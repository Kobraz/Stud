const divs = document.querySelectorAll(".container > div");

for(let i = 0; i < divs.length; i++) {
    // console.log(divs[i].className);
    
    divs[i].onclick = function() {
        console.log(event.target.dataset.price);
    }
    
}