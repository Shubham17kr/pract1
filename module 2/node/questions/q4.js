let fss=require('fs')
let path=require('path')

let folderkapath=path.join(__dirname,"..","unorganised")
// console.log(folderkapath)

let content=fss.readdirSync(folderkapath)
// console.log(content)
let extarr=[]
for(let i=0;i<content.length;i++)
{
    let name=content[i]
    let ext=path.extname(name)
    extarr.push(ext)
}
console.log(extarr)
