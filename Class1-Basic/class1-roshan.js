let btn1use=document.getElementById("btn1")
btn1use.addEventListener("click",addition)
// let bgc=document.getElementsByTagName("body")
// console.log(bgc)


let count=0;
function addition(){
    count++
    divuse.innerText=`${count}`
    // bgc[0].style.backgroundColor="black"
    
}

let btn2use=document.getElementById("btn2")
btn2use.addEventListener("click",sub)
function sub(){
    count--
    divuse.innerText=`${count}`

}

let divuse=document.getElementById("number")

