console.log("This is promise Homework")
let prom1 = new Promise((res,rej)=>{
    let a = Math.random()
    if(a<0.2){
        rej("no random number is generated")
    }
    else{
        setTimeout(()=>{
            console.log("yes I am generating Random number")
            res("YES Baba Abhishek ")
        },3000)
        
    }
})

let prom2 = new Promise((res,rej)=>{
    let a =Math.random()
    if(a<0.5){
        rej("NO Random number is generated")

    }
    else{
        setTimeout(()=>{
            console.log("yes you can do it")},3000)

        }
    })

    let p3=Promise.allSettled([prom1,prom2])
    p3.then((a)=>{
        console.log(a)
    }).catch(e=>{
        console.log(err)
    })