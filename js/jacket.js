import { jacketList } from "./jacket-list.js";
import { jacketSpec } from "./functions.js";

const specContainer = document.querySelector(".jacket-spec");

const urlString = window.location.search;
const urlParams = new URLSearchParams(urlString);
const jacketId = parseInt(urlParams.get("id"));

jacketSpec(jacketList, specContainer, jacketId);
