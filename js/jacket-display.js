//--> Display function for jackets

export function displayJackets(jacketArray, productContainer) {
	jacketArray.forEach((jacket) => {
		productContainer.innerHTML += `
      <div class="product-container">
                <a href="jacket.html">
                  <div class="image-container" style="background-image: url(${jacket.jacketImg});">
                  </div>
                </a>
                <div class="product-footer">
                  <p class="product-name">${jacket.name} - ${jacket.gender}</p>
                  <p class="product-price">Price: ${jacket.price} NOK</p>
                  <p class="product-add-bag">Add To Bag</p>
                </div>
        </div>
      `;
	});
}
