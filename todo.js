let btn=document.querySelector("button");
let ul=document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click",function() {
    let item=document.createElement("li");
    item.innerText=inp.value;
    ul.appendChild(item);
    inp.value=""


    let delbtn=document.createElement("button");
    delbtn.innerText="delete";
    delbtn.classList.add("delete");
    item.appendChild(delbtn);
 
});
ul.addEventListener("click",function(event)
{
    if(event.target.nodeName=="BUTTON")
    {
        let delitem= event.target.parentElement;
        delitem.remove();
    }
});