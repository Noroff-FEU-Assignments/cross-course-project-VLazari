//--> Adding items to the products.html

import { jacketList } from "./jacket-list.js";
const products = document.querySelector('.products-list');

const urlString = window.location.search;
const urlParams = new URLSearchParams(urlString);
const gen = urlParams.get('gender');
console.log(gen);

if(gen==="male"){
  const maleJacket = jacketList.filter(jacket => jacket.gender === "male")
  maleJacket.forEach(jacket => {
    products.innerHTML +=
    `
    <div class="product-container">
             <a href="jacket.html"><div class="image-container">
                <img
                  class="product-image"
                  src="${jacket.jacketImg}"
                  alt="jacket nr. 3"
                />
              </div></a>
              <div class="product-footer">
                <p class="product-name">${jacket.name} - ${jacket.gender}</p>
                <p class="product-price">Price: ${jacket.price} NOK</p>
                <p class="product-add-bag">Add To Bag</p>
              </div>
      </div>
    `
    
  });
}
else if(gen==="female"){
  const femaleJacket = jacketList.filter(jacket => jacket.gender === "female")
  femaleJacket.forEach(jacket => {
    products.innerHTML +=
    `
    <div class="product-container">
              <a href="jacket.html"><div class="image-container">
                <img
                  class="product-image"
                  src="${jacket.jacketImg}"
                  alt="jacket nr. 3"
                />
              </div></a>
              <div class="product-footer">
                <p class="product-name">${jacket.name} - ${jacket.gender}</p>
                <p class="product-price">Price: ${jacket.price} NOK</p>
                <p class="product-add-bag">Add To Bag</p>
              </div>
      </div>
    `
    
  });
}
else{


jacketList.forEach(jacket => {
  products.innerHTML +=
  `
  <div class="product-container">
            <a href="jacket.html"><div class="image-container">
              <img
                class="product-image"
                src="${jacket.jacketImg}"
                alt="jacket nr. 3"
              />
            </div></a>
            <div class="product-footer">
              <p class="product-name">${jacket.name} - ${jacket.gender}</p>
              <p class="product-price">Price: ${jacket.price} NOK</p>
              <p class="product-add-bag">Add To Bag</p>
            </div>
    </div>
  `
  
});
}
