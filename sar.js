let mode1=document.querySelector("#mode");
let body=document.querySelector("body")
let mode="light";
mode1.addEventListener("mouseover",()=>{
    if(mode==="light"){
        mode='dark';
        body.classList.add("dark");
        body.classList.remove("light");
    }
    else{
        mode='light';
        body.classList.add("light");
        body.classList.remove("dark");
    }
});
