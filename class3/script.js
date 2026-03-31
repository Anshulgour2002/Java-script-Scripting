//navbar
// let navDiv=document.getElementById("navbar")
// console.log(navDiv)

// let url = "https://fakestoreapi.com/products";

// let container = document.getElementById("product-container");


// fetch("https://fakestoreapi.com/product")



// let str = "bbacc"
// let rem=" "

// for (let i = str.length; i <= 1; i--) {
//     rem=rem+str[i]
//     console.log(str)
// }
let str = "bbacc"
let rem = ""

for (let i = str.length - 1; i >= 0; i--) {
    rem = rem + str[i]
}

console.log(rem)










// .then(res => res.json())
// .then(data => {

//     data.map((product)=>{

//         let card = document.createElement("div");
//         card.classList.add("card");

//         card.innerHTML = `

//             <img src="${product.image}" width="150">
//             <h3>${product.title}</h3>
//             <p>Price: $${product.price}</p>
//             <button class="view-btn">View Product</button>
//         `;


//         card.querySelector(".view-btn").addEventListener("click", ()=>{
//             window.location.href = "product.html?id=" + product.id;
//         });

//         container.appendChild(card);
//     });

// });