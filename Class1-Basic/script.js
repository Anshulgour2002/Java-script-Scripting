console.log('first')
let h1use=document.getElementById("headingid")
console.log(h1use)

h1use.style.color="red"

let btnuse=document.getElementById("btn")
console.log(btnuse)

btnuse.addEventListener("click",anshulkamsz)

function anshulkamsz(){
    console.log("Roshan ki jai ho")
    console.log(h1use.innerText)
    h1use.style.backgroundColor="green"
}


