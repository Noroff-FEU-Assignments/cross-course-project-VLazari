import { jacketList } from "./jacket-list.js";
import { displayJackets } from "./jacket-display.js";

const prod = document.querySelector(".products-list");

const urlString = window.location.search;
const urlParams = new URLSearchParams(urlString);
const gen = urlParams.get("gender");

if (gen === "male") {
	const maleJacket = jacketList.filter((jacket) => jacket.gender === "male");
	displayJackets(maleJacket, products);
} else if (gen === "female") {
	const femaleJacket = jacketList.filter((jacket) => jacket.gender === "female");
	displayJackets(femaleJacket, products);
} else {
	displayJackets(jacketList, prod);
}
