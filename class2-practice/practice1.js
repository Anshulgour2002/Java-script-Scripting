//form handling
// let ip1 = document.getElementById("fname")
// let ip2 = document.getElementById("lname")
// console.log(ip1, ip2)

// let op = {};
// ip1.addEventListener("change", (event) => {
//     // console.log(event);
//     // console.log(event.target)
//     // console.log(event.target.value)
//     op.fName = event.target.value;
//     // console.log(op)
// })


// ip2.addEventListener("change", (event) => {
//     // console.log(event);
//     // console.log(event.target)
//     // console.log(event.target.value)
//     op.lName = event.target.value;
//     // console.log(op)
// })


//  we sumbit the form so we have to attach sumbit event on form tag
// const formC=document.getElementById("form");
// formC.addEventListener("submit",(event)=>{
//     event.preventDefault()
//     console.log(op)
//     ip1.value=""
//     ip2.value=""
// })


// Todo->
const inputField = document.getElementById("data");
const btn = document.getElementById("btn");
const bodyC = document.getElementsByTagName("body");

let op1 = {};
inputField.addEventListener("change", (event) => {
    op1.data = event.target.value
})

btn.addEventListener("click", () => {
    let para = document.createElement("p");
    para.innerText = op1.data;
    bodyC[0].append(para);


    // edit btn 
    let editBtn = document.createElement("button");
    editBtn.innerText = "Edit";
    bodyC[0].append(editBtn);


    // delete btn
    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "delete";
    bodyC[0].append(deleteBtn);
})