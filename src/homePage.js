import cremeGlacee1bg from "./images/creme-glacee1.png";
import cremeGlacee2bg from "./images/creme-glacee2.png";
import logo from "./images/logo-removebg-preview.png"
export const writingHomepage = () => {
    const frameHome = document.createElement("div");
    const tittleContainer = document.createElement("div");
    const img1 = document.createElement("img");
    const img2 = document.createElement("img");
    const img3 = document.createElement("img");
    const presentationContainer = document.createElement("div");
    const tittlePresentation = document.createElement("h3");
    const textPresentation = document.createElement("div");
    const locationContainer = document.createElement("div");
    const locationText = document.createElement("div");
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
    presentationContainer.setAttribute("id", "presentation-container");
    tittlePresentation.setAttribute("id", "tittle-presentation");
    textPresentation.setAttribute("id", "text-presentation");
    locationContainer.setAttribute("id", "location-container");
    locationText.setAttribute("id", "location-text");
    h1tittle.textContent = "Jisoo's Ice Cream Shop";
    tittlePresentation.textContent = "About Jisoo's Ice Cream Shop";
    locationText.innerHTML = "<span>Location</span><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu cursus sapien, in mollis orci. Integer a aliquam magna, nec convallis diam. Vivamus in rutrum nulla. Praesent ac rutrum dolor. Aliquam finibus ut dui semper elementum. Suspendisse potenti. Sed in massa hendrerit, fringilla nisi nec, cursus felis. Donec eget risus non nisl blandit venenatis.</span>";
    textPresentation.innerHTML = "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed maximus sagittis luctus. Integer pharetra dui ut turpis mollis consequat. Vivamus sed mauris facilisis, blandit nulla ut, venenatis tellus.<p> Suspendisse et pharetra odio. Vivamus quam ante, tincidunt ut venenatis eget, laoreet in lectus. In varius accumsan convallis. Aliquam vehicula, ex non semper vehicula, neque ex facilisis augue, quis commodo diam urna ac odio. </p><p>Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas commodo justo vel sapien tristique congue.</p>";
    document.querySelector("#content").appendChild(frameHome);
    frameHome.appendChild(tittleContainer);
    tittleContainer.appendChild(img1);
    tittleContainer.appendChild(h1tittle);
    tittleContainer.appendChild(img2);
    frameHome.appendChild(img3);
    frameHome.appendChild(presentationContainer);
    frameHome.appendChild(locationContainer);
    presentationContainer.appendChild(tittlePresentation);
    presentationContainer.appendChild(textPresentation);
    locationContainer.appendChild(locationText);

}