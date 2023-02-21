let addbtn=document.querySelector(".add-btn")
let modal=document.querySelector(".modal-cont")
let taskArea=document.querySelector(".textarea-cont")
let mainCont=document.querySelector(".main-cont")
let allColorcont=document.querySelectorAll(".priority-color")
let rmvbtn=document.querySelector(".remove-btn")
let removeflag=false;
let flag=true;
let color=["lightpink","lightblue","lightgreen","black"]
let modalpriorityColor=color[color.length-1]

var uid = new ShortUniqueId();

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
                          <div class="ticket-id">#${uid()}</div>
                          <div class="ticket-area">${task}</div>
                          <div class="lock-unlock"><i class="fa fa-lock"></i></div>`
    mainCont.append(ticketCont)

    // lock-unlock

    let lockunlockbtn=ticketCont.querySelector(".lock-unlock i")
    let text_area=ticketCont.querySelector(".ticket-area")
    lockunlockbtn.addEventListener("click",function(){
        if(lockunlockbtn.classList.contains("fa-lock"))
        {
            lockunlockbtn.classList.remove("fa-lock")
            lockunlockbtn.classList.add("fa-unlock")
            text_area.setAttribute("contentEditable","true")

        }
        else{
            lockunlockbtn.classList.remove("fa-unlock")
            lockunlockbtn.classList.add("fa-lock")
            text_area.setAttribute("contentEditable","false")
        }
    })

    ticketCont.addEventListener("click",function(){
        if(removeflag){
            ticketCont.remove();
        }
    })

    let ticketcolorBand=ticketCont.querySelector(".ticket-color")
    ticketcolorBand.addEventListener("click",function(){

        let prevticketcolor=ticketcolorBand.classList[1]
    let prevticketcolorIndex=-1;

    for(let i=0;i<color.length;i++)
    {
        if(prevticketcolor==color[i])
        {
            prevticketcolorIndex=i;
            break;
        }
    }
    let nextticketcolorIndex=(prevticketcolorIndex+1)%color.length
    let nextticketcolor=color[nextticketcolorIndex]
      
    ticketcolorBand.classList.remove(prevticketcolor)
    ticketcolorBand.classList.add(nextticketcolor) 
    })
    



}