let inputs =document.getElementById("input");
let text=document.querySelector(".text");


function Add(){
    if(inputs.value==""){
        alert("enter your task ")

        
    }else{
        let newElement=document.createElement("ul");
        newElement.innerHTML=`${inputs.value}`; 
        text.appendChild(newElement);
        inputs.value="";
       
         let newElement2=document.createElement("l");
        newElement2.innerHTML="delete";

        
        newElement2.addEventListener("click", function () {
      newElement.remove();  
        });
         newElement2.addEventListener("click", function () {
      newElement2.remove();  
        });
        text.appendChild(newElement2);
        inputs.value="";
        
        }
    }