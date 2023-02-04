const noteInput = document.getElementById("note-input");
const addNote = document.getElementById("add-note");
const notes = document.getElementById("notes");

addNote.onclick = function(){
    notes.innerHTML += "<li>" + noteInput.value + "</li>";
    const listItems = document.querySelectorAll("li");
    console.log(listItems);
    listItems.forEach(function(li){
        li.onclick = function(event){
            event.target.classList.toggle("checked-off")
        }
    })
        
}

