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

let alltoolboxcolor=document.querySelectorAll(".color")

var uid = new ShortUniqueId();

let ticketArr=[];

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

// filter

for(let i=0;i<alltoolboxcolor.length;i++)
{
    alltoolboxcolor[i].addEventListener("click",function(){
        let currentcolor=alltoolboxcolor[i].classList[1];
        let filterArr=[]
        for(let j=0;j<ticketArr.length;j++)
        {
            if(ticketArr[j].color==currentcolor)
            {
                filterArr.push(ticketArr[j])
            }
        }
        let allticket=document.querySelectorAll(".ticket-cont")
        for(let i=0;i<allticket.length;i++)
        {
            allticket[i].remove();
        }

        for(let i=0;i<filterArr.length;i++)
        {
            let ticket=filterArr[i];
            let color=ticket.color;
            let task=ticket.task;
            let id=ticket.id;
            createTicket(color,task,id)
        }
    })

    alltoolboxcolor[i].addEventListener("dblclick",function(){

        let allticket=document.querySelectorAll(".ticket-cont")
        for(let i=0;i<allticket.length;i++)
        {
            allticket[i].remove();
        }

        for(let i=0;i<ticketArr.length;i++)
        {
            let ticket=ticketArr[i];
            let color=ticket.color;
            let task=ticket.task;
            let id=ticket.id;
            createTicket(color,task,id)
        }
    })
}




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


function createTicket(ticketColor,task,ticketId)
{

    let id;
    if(ticketId==undefined)
    {
        id=uid();
    }
    else{
        id=ticketId;
    }
    let ticketCont=document.createElement('div')
    ticketCont.setAttribute('class','ticket-cont')
    ticketCont.innerHTML=`<div class="ticket-color ${ticketColor}"></div>
                          <div class="ticket-id">#${id}</div>
                          <div class="ticket-area">${task}</div>
                          <div class="lock-unlock"><i class="fa fa-lock"></i></div>`
    mainCont.append(ticketCont)

    // lock-unlock
      
    // update UI
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
        // update ticketArr

        let ticketidx=getticketIdx(id);
        
        ticketArr[ticketidx].task=text_area.textContent;
    })

    ticketCont.addEventListener("click",function(){
        if(removeflag){
            // delete from ui
            ticketCont.remove();

            //  delete from ticketArr

            let ticketidx=getticketIdx(id);
            ticketArr.splice(ticketidx,1)    // remove a ticket
        }
    })

    // update UI
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

    // update ticketArr
    let ticketArridx=getticketIdx(id);
    
    ticketArr[ticketArridx].color=nextticketcolor;
    })
    

    if(ticketId==undefined){
        ticketArr.push({"color":ticketColor,"task":task,"id":id})
    }
    // console.log(ticketArr)

 
}
function getticketIdx(id)
{
    for(let i=0;i<ticketArr.length;i++)
    {
        if(ticketArr[i].id==id)
        {
            return i;
        }
    }
}