let allpost=document.querySelector(".allpost")
let name=document.querySelector(".name")
let caption=document.querySelector(".caption")
let postButton=document.querySelector(".postButton")
let updateButton=document.querySelector(".updateButton")
let error=document.querySelector(".error")
let arr=[];
let indexstore;

postButton.addEventListener("click",function(){
        if(!name.value){
              if(!caption.value){
                error.innerHTML="Please Enter something";
              } }else{
                error.innerHTML=" ";
                arr.push({
                    name:name.value,
                    caption:caption.value
                })
                name.value=" "
                caption.value=" "
            
                allpost.innerHTML=" "
                display()
              } 
    })

updateButton.addEventListener("click",function(){
    arr[indexstore].name=name.value
    arr[indexstore].caption=caption.value

    allpost.innerHTML=" "
    display()
    
updateButton.style.display="none"
postButton.style.display="inline-block"

name.value=" "
caption.value=" "
    })

function display(){
    arr.map(item=>{

        allpost.innerHTML+=` <div class="card" style="width: 21rem;">
                <div class="card-body">
                  <h5 class="card-title">${item.name}</h5>
                  <p class="card-text">${item.caption}</p>
                  <button href="#" class="btn btn-primary editButton">Edit</button>
                  <button href="#" class="btn btn-danger deleteButton">Delete</button>
                </div>
              </div>`
    });

    let deleteButton=document.querySelectorAll(".deleteButton")
let deleteButtonConvert=Array.from(deleteButton)
deleteButtonConvert.map((deleteButton,index)=>{
  deleteButton.addEventListener("click",function(){

    arr.splice(index,1)

    allpost.innerHTML=" "
    display()
  })
})

let editButton=document.querySelectorAll(".editButton")
let editButtonConvert=Array.from(editButton)
editButtonConvert.map((editButton,index)=>{
    
editButton.addEventListener("click",function(){
        name.value=arr[index].name
        caption.value=arr[index].caption

        updateButton.style.display="inline-block"
        postButton.style.display="none"

        indexstore=index;

    })
})


}

