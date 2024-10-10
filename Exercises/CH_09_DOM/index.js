let div;
function createBox(){
    div = document.createElement("div");
    div.setAttribute("class" ,"outer-box")
     document.body.append(div)
}

function removeBox(){
     document.body.removeChild(div)
}

function replaceBox(){
    div.style.width="400px"
}

let child;
function apendChildBox(){
    child = document.createElement("div")
    child.setAttribute("class","inner-box")
    div.appendChild(child)
}
let newChild ;

function insertBeforeChildBox(){
    newChild = document.createElement("div")
    newChild.setAttribute("class","inner-box")
    newChild.style.backgroundColor="red";
    div.insertBefore(newChild,child)
}