async function sleep(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res(45)
        },1000)
    })
}
(async function main(){
   // let a = await sleep()
   // console.log(a)
   // let b = await sleep()
  //  console.log(b)
  let [x, y, ...rest] =[1,5,0,9,8,7,2]
  console.log(x,y,rest)
    
})()
