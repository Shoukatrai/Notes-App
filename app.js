var inputNote = document.getElementById("input");
var parent = document.getElementById("parent");
// console.log("parent",parent, "inputNote",inputNote);

function noteApp(){

// validation
    if(inputNote.value.length <= 3){
        alert("Enter Correct Notes...")
        return;
    }
var UI = `<div class="p-3 alert alert-info d-flex  justify-content-between notes" role="alert" id="parent">
    ${inputNote.value}
        <div class="icons">
            <i class="fa-solid fa-pen-to-square me-3 btn" onclick = 'editIcon(this)'></i>
            <i class="fa-solid fa-delete-left btn" onclick = 'deleteIcon(this)'></i>
        </div>
      </div>`

    parent.innerHTML += UI;
      
    inputNote.value = "  "
}


function deleteIcon(ele){
    ele.parentNode.parentNode.remove()
}


function editIcon(ele){
    var editPrompt = prompt("Enter edit value...");
    var value = inputNote.value;
    ele.parentNode.parentNode.firstChild.textContent = editPrompt;
    if(editPrompt.length <=3){
        ele.parentNode.parentNode.firstChild.textContent = value;
        return;
    }
}

function deleteAllNotes(){
    parent.remove()
}