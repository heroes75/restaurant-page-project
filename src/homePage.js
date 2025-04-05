import cremeGlacee1bg from "./images/creme-glacee1.png";
import cremeGlacee2bg from "./images/creme-glacee2.png";
import logo from "./images/logo-removebg-preview.png"
export const writingHomepage = () => {
    const frameHome = document.createElement("div");
    const tittleContainer = document.createElement("div");
    const img1 = document.createElement("img");
    const img2 = document.createElement("img");
    const img3 = document.createElement("img")
    img1.src = cremeGlacee1bg;
    img1.style.width = "70px";
    img1.style.height = "70px";
    img2.style.width = "70px";
    img2.style.height = "70px";
    img3.style.width = "300px";
    img3.style.height = "300px";
    img2.src = cremeGlacee2bg;
    img3.src = logo;
    const h1tittle = document.createElement("h1")
    tittleContainer.setAttribute("id", "tittle-container");
    frameHome.setAttribute("id", "frame-home");
    h1tittle.textContent = "Ice Cream Shop";
    document.querySelector("#content").appendChild(frameHome);
    frameHome.appendChild(tittleContainer);
    tittleContainer.appendChild(img1);
    tittleContainer.appendChild(h1tittle);
    tittleContainer.appendChild(img2);
    frameHome.appendChild(img3);


}