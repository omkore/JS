let count =0;
function addPara(){
    let p = document.createElement("p");
    let text = document.createTextNode(`This is Paragraph ${++count}`)
    p.appendChild(text)
    // p.setAttribute("class","p")
    document.body.appendChild(p)

}