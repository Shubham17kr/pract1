let fss=require('fs')
let path=require('path')


let folderkapath=path.join(__dirname,"..","unorganised")

let content=fss.readdirSync(folderkapath)
// console.log(content)

for(let i=0;i<content.length;i++)
{
    let name=content[i];
    let ext=path.extname(name)

    if(ext==".mp3")
    {
        console.log("audio")
    }
    else if(ext==".mp4")
    {
        console.log("video")
    }
    else if(ext==".exe")
    {
        console.log("software")
    }
    else{
        console.log("document")
    }
}