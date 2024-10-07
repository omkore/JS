let text = document.getElementById("task")
let btn = document.getElementById("btn")
let ul = document.getElementById("ul")
function addTodo(){
    let li = document.createElement('li');
    let textNode = document.createTextNode(text.value);
    let mark = document.createElement("i");
    mark.classList.add("fa-solid");
    mark.classList.add("fa-check");
    li.appendChild(textNode)
    li.appendChild(mark)
    ul.appendChild(li);
    
}


// btn.addEventListener("click",addTodo);




