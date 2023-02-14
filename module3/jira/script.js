let addbtn=document.querySelector(".add-btn")
let modal=document.querySelector(".modal-cont")
let taskArea=document.querySelector(".textarea-cont")
let mainCont=document.querySelector(".main-cont")
let allColorcont=document.querySelectorAll(".priority-color")
let rmvbtn=document.querySelector(".remove-btn")
let removeflag=false;
let flag=true;
let modalpriorityColor="black"

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
        createTicket(modalpriorityColor,taskArea.value)
        taskArea.value=""
        modal.style.display="none"
        flag=!flag

    }
})

for(let i=0;i<allColorcont.length;i++)
{
    let priorityDivOneColor=allColorcont[i];
    priorityDivOneColor.addEventListener("click",function()
    {
        for(let j=0;j<allColorcont.length;j++)
        {
           allColorcont[j].classList.remove("active");
        }
        priorityDivOneColor.classList.add("active")
        modalpriorityColor=priorityDivOneColor.classList[1];
    })
   
}

rmvbtn.addEventListener("click",function(){
    if(removeflag)
    {
        rmvbtn.style.color='black'
    }
    else
    {
        rmvbtn.style.color='red'
    }
    removeflag=!removeflag
})


function createTicket(ticketColor,task)
{
    let ticketCont=document.createElement('div')
    ticketCont.setAttribute('class','ticket-cont')
    ticketCont.innerHTML=`<div class="ticket-color ${ticketColor}"></div>
                          <div class="ticket-id">#er456</div>
                          <div class="ticket-area">${task}</div>`
    mainCont.append(ticketCont)

    ticketCont.addEventListener("click",function(){
        if(removeflag){
            ticketCont.remove();
        }
    })
}