let fss=require('fs')
// console.log(fss)

let path=require('path')

// // create file
// let filepath=path.join(__dirname,"file.txt")
// fss.writeFileSync(filepath,"hello i am a text file")

// // read file
// let content=fss.readFileSync(filepath,'utf-8')
// console.log(content)

// // update file
// fss.appendFileSync(filepath,"\nnew statement")

// delete file
// // // fss.unlinkSync(filepath)

// // make directory,read,removedir
// if(!fss.existsSync("humaridirectory"))
// fss.mkdirSync("humaridirectory")

//  let fpath=__dirname   // you can also use the other directory "E:\pract\module 1" at the place of __dirname.
// let content=fss.readdirSync(fpath)
// console.log(content)

// fss.rmdirSync("humaridirectory")



//  copy file
// let sourcepath=path.join(__dirname,"file.txt")
// let destpath=path.join(__dirname,"module","file.txt")

// fss.copyFileSync(sourcepath,destpath)

fss.rmdirSync("project")
