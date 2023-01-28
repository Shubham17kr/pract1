let fss=require('fs')
let path=require('path')

if(!fss.existsSync("humaridirectory"))
fss.mkdirSync("humaridirectory")

let pth=path.join(__dirname,"humaridirectory","file1.txt")
fss.writeFileSync(pth,"hello this is a new directory")

// // let pt="E:\pract\module1"

// let sourcepath=path.join(_,"ptf.txt")
// let destpath=path.join(__dirname,"ptf.txt")

// fss.copyFileSync(sourcepath,destpath)
