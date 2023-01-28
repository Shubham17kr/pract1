let fss=require('fs')
let path=require('path')

let arr=['audio','video','software','documents','application']
let filename=['abc','xyz','pqr','def','asd']
let fileext=['.mp3','.mp4','.exe','.pdf','.apk']

let folpath=path.join(__dirname,"organise")
if(!fss.existsSync(folpath))
fss.mkdirSync(folpath)


for(let i=0;i<arr.length;i++)
{
   let pth=path.join(folpath,arr[i])

    if(!fss.existsSync(pth))
    {
        fss.mkdirSync(pth)
    }
    
    for(let j=0;j<arr.length;j++)
    {
        let str1=filename[j]+fileext[i];
        let filepath=path.join(pth,str1)
        fss.writeFileSync(filepath,"this is a "+arr[i]+"file")
    }





}