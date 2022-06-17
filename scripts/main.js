// Importing all website divs
import nav from "./html_builders/nav.js";
import header from "./html_builders/header.js";
import footer from "./html_builders/footer.js";

let nav_elm = document.querySelector("nav");
let header_elm = document.querySelector("header");
let footer_elm = document.querySelector("footer");

nav_elm.innerHTML = nav.innerHTML;
header_elm.innerHTML = header.innerHTML;
footer_elm.innerHTML = footer.innerHTML;