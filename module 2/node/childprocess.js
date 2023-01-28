let cp=require('child_process')
//  console.log(cp)

// cp.execFileSync("calc");
// cp.execSync("code")

let content=cp.execSync("node test.js")
console.log("content " +content)

