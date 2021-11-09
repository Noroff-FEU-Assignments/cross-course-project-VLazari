
//--> Change navigation for mobile size

let nav = document.querySelector('.navigation');
let menue = document.querySelector('.fa-bars');
const burger = document.querySelector('.mobile-menue');
burger.addEventListener('click', function()
{
  nav.classList.toggle('navigation-active');
  menue.classList.toggle('fa-times');
});


//--> Adding items to the products.html

import { jacketList } from "./jacket-list.js";
console.log(jacketList);
const products = document.querySelector(".box3");
// jacketList.forEach(jacket => {
//   products.innerHTML +=
//   `
//   <div class="product-container">
//             <div class="image-container">
//               <img
//                 class="product-image"
//                 src="${jacket.jacketImg}"
//                 alt="jacket nr. 3"
//               />
//             </div>
//             <div class="product-footer">
//               <p class="product-name">${jacket.name}</p>
//               <p class="product-price">${jacket.price} NOK</p>
//               <p class="product-add-bag">+ Add To Bag</p>
//             </div>
//           </div>
//   `
  
// });

//--> Pagination for the jacket list

// let nrOfPages = jacketList.length / 3;
// jacketList.forEach(jacket => {
//   if(jacket.id<=9, jacket.id>6){
//   products.innerHTML +=
//   `
//   <div class="product-container">
//             <div class="image-container">
//               <img
//                 class="product-image"
//                 src="${jacket.jacketImg}"
//                 alt="jacket nr. 3"
//               />
//             </div>
//             <div class="product-footer">
//               <p class="product-name">${jacket.name}</p>
//               <p class="product-price">${jacket.price} NOK</p>
//               <p class="product-add-bag">+ Add To Bag</p>
//             </div>
//           </div>
//   `}
  
// });
// console.log(jacketList.length);
// console.log(nrOfPages);

