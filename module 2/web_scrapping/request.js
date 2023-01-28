const request=require('request')
const jsdom=require("jsdom")
const{JSDOM}=jsdom



const dom=new JSDOM("<!DOCTYPE html><body><p>hello guys khanna kha lo...</p></body></html>")
console.log(dom.window.document.querySelector("p").textContent)


// request("http://www.google.com", function(error,response,body)
// {
//     if(error)
//     {
//         console.error("error" ,error)
//     }
//     else{
//         console.log("body" ,body)
//     }
// });

// const link="https://www.espncricinfo.com/series/ipl-2021-1249214/royal-challengers-bangalore-vs-kolkata-knight-riders-eliminator-1254115/full-scorecard"

// request(link,cb)

// function cb(error,response,html)
// {
//     if(error)
//     {
//         console.error('error:',error)
//     }
//     else{
//         const dom= new JSDOM(html)
//         const document=dom.window.document;
//         let teamname=document.querySelectorAll("#main-container > div.ds-relative > div.lg\:ds-container.lg\:ds-mx-auto.lg\:ds-px-5.lg\:ds-pt-4 > div > div.ds-flex.ds-space-x-5 > div.ds-grow > div.ds-w-full.ds-bg-fill-content-prime.ds-overflow-hidden.ds-rounded-xl.ds-border.ds-border-line > div > div:nth-child(1) > div.ds-flex > div.ds-w-2\/3 > div > div > p > span")
//         console.log(teamname[0].textContent)
//         // console.log(teamname[1].textContent)
//     }
// }