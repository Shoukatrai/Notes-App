var inputNote = document.getElementById("input");
var parent = document.getElementById("parent");

var notesArray = [];
function noteApp(){
// validation
    if(inputNote.value.length < 3){
        alert("Enter Correct Notes...");
        return;
    }
    var getNotes = localStorage.getItem("notes")
    if(getNotes == null){
        var tempArray = [inputNote.value]
        localStorage.setItem("notes" , JSON.stringify(tempArray));
    }else{
        var tempArray = JSON.parse(getNotes);
        tempArray.unshift(inputNote.value);
        localStorage.setItem("notes" , JSON.stringify(tempArray))
    }
    
    // notesArray.unshift(inputNote.value)
    // localStorage.setItem("notes", JSON.stringify(notesArray));


    
    
    
    
    renderUI();
    inputNote.value = "  "
}

function renderUI(){
    var notesArray  = JSON.parse(localStorage.getItem("notes"));
    var  UI = "";
    for(var i = 0; i < notesArray.length; i++){
        UI += `<div class="p-3 alert alert-info d-flex  justify-content-between notes" role="alert" id="parent">
        ${notesArray[i]}
        <div class="icons">
        <i id = "${i}" class="fa-solid fa-pen-to-square me-3 btn" onclick = 'editIcon(this)'></i>
        <i id = "${i}" class="fa-solid fa-delete-left btn" onclick = 'deleteIcon(this)'></i>
        </div>
    </div>`

    }
        
    
    parent.innerHTML = UI;

}

function deleteIcon(ele){
    var notesArray = JSON.parse(localStorage.getItem("notes"));
    var index = ele.id;
    notesArray.splice(index , 1);
    localStorage.setItem("notes" , JSON.stringify(notesArray));
    renderUI();
}


function editIcon(ele){
    var notesArray = JSON.parse(localStorage.getItem("notes"));
    var editPrompt = prompt("Enter edit value...");
    var index = ele.id;
    notesArray.splice(index , 1 , editPrompt);
    localStorage.setItem("notes" , JSON.stringify(notesArray));
    renderUI(); 
}

function deleteAllNotes(){
    parent.remove()
}