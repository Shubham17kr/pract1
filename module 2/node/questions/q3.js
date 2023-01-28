let fss=require('fs')
let path=require('path')

let source=path.join(__dirname,"..","..","..","module1","index.html")
let destpath=path.join(__dirname,"..","..","indext.html")

fss.copyFileSync(source,destpath)