const existingItemsJSON = localStorage.getItem('todo');

let toDoList=[];

if(existingItemsJSON){
    const existingItemsParsed=JSON.parse(existingItemsJSON)
 toDoList=[...existingItemsParsed];}
toDoList.forEach(Element=>showItemOnList(Element))


function clickhandler() {
    document.getElementById("todoinput").classList.remove("hidden");
    // document.getElementById("todoinput").classList.add("")   
    
}

function showItemOnList(value) {
    const todoListReference=document.getElementById("todo-items")
    const toDoItem=document.createElement("li");
    const delButton=document.createElement("button");
    
    delButton.addEventListener('click',()=>{
        todoListReference.removeChild(toDoItem);
        const index=toDoList.indexOf(value);
        toDoList.splice(index,1)
        localStorage.setItem("todo",JSON.stringify(toDoList))
        console.log(toDoList);
    });
    delButton.classList.add("outline-none")
    const deleteTodo=document.createElement("i");
    delButton.classList.add('hidden');
    toDoItem.addEventListener('mouseover',()=>{delButton.classList.remove('hidden')});
    toDoItem.addEventListener('mouseout',()=>{delButton.classList.add('hidden')});

    deleteTodo.classList.add("fa-times-circle");
    deleteTodo.classList.add("far");
    delButton.appendChild(deleteTodo);
    const textNode =document.createTextNode(value);
    toDoItem.appendChild(textNode);
    toDoItem.appendChild(delButton);
    todoListReference.appendChild(toDoItem);
    
}

function removefromlist(evt) {

    
}
var inputbox=document.getElementById("inputbox");
inputbox.addEventListener('keypress',AddList);
function AddList(evt) {
    if(evt.keyCode==13){
        toDoList.push(inputbox.value);
        console.log(toDoList);
        const todoContainer=document.getElementById("todoinput")
        todoContainer.classList.add("hidden");
        showItemOnList(inputbox.value)
        inputbox.value="";    
        
        localStorage.setItem("todo",JSON.stringify(toDoList))
    }
    
}
