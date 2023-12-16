let button = document.getElementById("btn")
button.addEventListener("dblclick",()=>{
    document.querySelector(".box").innerHTML = "<B> Yayy you were clicked </B>Enoy your  click"
})
button.addEventListener("contextmenu",()=>{
    alert("DobRight click Please")
})
document.addEventListener("keydown",(e)=>{
   // alert("DobRight click Please")
   console.log(e);
})