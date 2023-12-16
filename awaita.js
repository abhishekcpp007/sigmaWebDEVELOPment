//

async function gEtData(){
    let x=await fetch('https://jsonplaceholder.typicode.com/todos/1',{
        method : 'POST',
        body: JSON.stringify({
            title: 'POST REQ',
            body:'bar',
            userId:1,

    
   
    }),
    
    headers: {
        "Content-Type": "application/json",
        
      },
    })
    let data = await  x.json()
  //  console.log(data)
    return data;
}
      



async function main(){
    console.log("Radhey Radhey")
    console.log("do something else")
    console.log("Loading.................")
    let data=  gEtData()
    console.log(data)
    console.log("process data is here ......")
    console.log("task 2 is their")

}

main();

// settle means resolve or reject
// resolve means promise has settlee successfully 
// reject means not settles successfully 