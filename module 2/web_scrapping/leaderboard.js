const request=require('request')
const jsdom=require('jsdom')
const{JSDOM}=jsdom;

let link="https://www.espncricinfo.com/series/ipl-2021-1249214/match-schedule-fixtures-and-results"

request(link,cb)

function cb(error,response,html)
{
    if(error)
    {
        console.log("error",error)
    }
    else{
        const dom=new JSDOM(html)
        const document=dom.window.document;
        let allscoreboard=document.querySelectorAll(".ds-mb-2 a.ds-no-tap-higlight")
        console.log(allscoreboard.length)
    }
}