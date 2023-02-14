// const request=require("request")
// const fss=require('fs')

// console.log("before")
// fss.readFileSync("file.txt",cb)

// function cb(error,data)
// {
//     if(error)
//     {
//         console.log("error",error)
//     }
//     else{
//         console.log("data",data)
//     }
// }

// console.log("after")

const request = require('request');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const link = "https://www.espncricinfo.com/series/ipl-2021-1249214/mumbai-indians-vs-royal-challengers-bangalore-1st-match-1254058/full-scorecard";

request(link, cb);

function cb(error, response, html) {
    if(error)
        console.error('error:', error); // Print the error if one occurred
    else{
        // console.log(html)
        const dom = new JSDOM(html);
        const document = dom.window.document
        let batsman=document.querySelectorAll("tbody .ds-table-row-compact-bottom");
        console.log(batsman.length)
        // let teamsName = document.querySelectorAll("ds-text-tight-m ds-font-regular ds-truncate ds-text-typo");
        // console.log(document[0].textContent);
        // console.log(document[1].textContent);
        // console.log(document)
    }
}