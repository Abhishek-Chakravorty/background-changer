let first=document.getElementById("first");
let second=document.getElementById("second");
let third=document.getElementById("third");
let forth=document.getElementById("forth");
first.addEventListener("click",function(){
    document.body.style.background="white";
})
second.addEventListener("click",function(){
    document.body.style.background="rgb(158, 182, 209)";
})
third.addEventListener("click",function(){
    document.body.style.background="hotpink";
})
forth.addEventListener("click",function(){
    document.body.style.background="lawngreen";
})