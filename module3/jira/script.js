let addbtn=document.querySelector(".add-btn")
let modal=document.querySelector(".modal-cont")
let taskArea=document.querySelector(".textarea-cont")
let mainCont=document.querySelector(".main-cont")
let flag=true;
addbtn.addEventListener("click",function(){

    if(flag)
    {     
        // show modal
        modal.style.display="flex";
    }else{
        //  hide model
        modal.style.display="none";
    }
    flag=!flag;
})

modal.addEventListener("keydown",function(e){

    let key=e.key;
    if(key=='Enter')
    {
        createTicket(taskArea.value)
        taskArea.value=""
        modal.style.display="none"
        flag=!flag

    }
})

function createTicket(task)
{
    let ticketCont=document.createElement('div')
    ticketCont.setAttribute('class','ticket-cont')
    ticketCont.innerHTML=`<div class="ticket-color lightblue"></div>
                          <div class="ticket-id">#er456</div>
                          <div class="ticket-area">${task}</div>`
    mainCont.append(ticketCont)
}