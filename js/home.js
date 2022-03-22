import { jacketList } from "./jacket-list.js";
import { displayJackets } from "./jacket-display.js";

const bestSellerProducts = document.querySelector(".box3");

const bestSellerJacket = jacketList.filter((jacket) => jacket.bestSeller === true);
displayJackets(bestSellerJacket, bestSellerProducts);
