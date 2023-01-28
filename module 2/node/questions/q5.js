//  move the file

let fss=require('fs')
let path =require('path')

let sourcepath=path.join(__dirname,"..","ptf.txt")
let destpath=path.join(__dirname,"..","..","..","module1","ptf.txt")

fss.copyFileSync(sourcepath,destpath)

fss.unlinkSync(sourcepath)