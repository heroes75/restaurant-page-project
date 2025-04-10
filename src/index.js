import  backgroundImages from "./images/13312339_v755-toon-05.jpg"; 
import "./styles.css";
import { writingHomepage } from "./homePage";
import menuPage from "./menuPage.js";
import aboutPage from "./aboutPage.js"
 
document.body.style.backgroundImage = `url(${backgroundImages})`;

document.querySelector("#home-button").addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector("#content").textContent = "";
    writingHomepage()
});
document.querySelector("#menu-button").addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector("#content").textContent = "";
    menuPage()
});
document.querySelector("#about-button").addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector("#content").textContent = "";
    aboutPage()
});
writingHomepage()
