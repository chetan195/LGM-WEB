let addtask=document.getElementsByClassName("add")[0]
let newtask=document.getElementsByClassName("newtask")[0]
let box=document.getElementById("todocontainer")
let itemsupdatedArray;
addtask.addEventListener('click',(event)=>{
    event.preventDefault()
   
    if(newtask.value.length!=0){
        let newItem=document.createElement("div")
        newItem.classList.add("item")
        let newItemcheck=document.createElement("input")
        newItemcheck.type="checkbox";
        // newItemcheck.classList.add("checkeer")
        let newItemName=document.createElement("p");
        newItemName.innerText=newtask.value;
        newItemName.style.overflowY="hidden"
        box.insertAdjacentElement("afterbegin",newItem)
        newItem.appendChild(newItemcheck);
        newItem.appendChild(newItemName)
        newtask.value=""
        reRender();
    }

})

function reRender(){
    itemsupdatedArray=document.querySelectorAll("div.item");
    if(itemsupdatedArray.length!=0){
        for(let i=0;i<itemsupdatedArray.length;i++){
            itemsupdatedArray[i].childNodes[0].addEventListener('change',()=>{
                if(itemsupdatedArray[i].childNodes[0].checked){
                    setTimeout(()=>{
                        itemsupdatedArray[i].remove()
                    },200)
                }
            })
        }
    }
}

        

   

   

