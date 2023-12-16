
console.log("This is Promises")
let prom1 = new Promise((res,rej)=>{
    let a = Math.random();
    if(a<0.5){
        rej("no random number is not supporitng you")
    }
    else{
        setTimeout(() => {
            console.log("yes i am done")
            res("Abhishek")
            
        },3000);

    }
   

})
let prom2 = new Promise((res,rej)=>{
    let a = Math.random();
    if(a<0.5){
        rej("no random number is hhhhnot supporitng you2")
    }
    else{
        setTimeout(() => {
            console.log("yes i am done2")
            res("Abhishek2")
            
        },3000);

    }
   

})
let p3 = Promise.any([prom1,prom2])
p3.then((a)=>{
    console.log(a)
}).catch(e=>{
    console.log(err)
})

/*let prom1.then((a)=>{
    console.log(a)
}).catch((err)=>{
    console.log(err);
})*/