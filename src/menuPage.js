import iceCream1 from "./images/nig-ice-cream32.JPG";
import iceCream2 from "./images/big-ice-cream4.jpg"
import iceCream3 from "./images/ice-cream3.webp"
import iceCream4 from "./images/ice-cream4.png"

export default function () {
    const frameMenu = document.createElement("div");
    const menuTittle = document.createElement("div");
    const h1 = document.createElement("h2");
    const product1 = document.createElement("div");
    const imgProduct1 = document.createElement("div");
    const img1 = document.createElement("img");
    const descriptionProduct1 = document.createElement("div");
    const descriptionTextProduct1 = document.createElement("p");
    const product2 = document.createElement("div");
    const imgProduct2 = document.createElement("div");
    const img2 = document.createElement("img");
    const descriptionProduct2 = document.createElement("div");
    const descriptionTextProduct2 = document.createElement("p");
    const product3 = document.createElement("div");
    const imgProduct3 = document.createElement("div");
    const img3 = document.createElement("img");
    const descriptionProduct3 = document.createElement("div");
    const descriptionTextProduct3 = document.createElement("p");
    const product4 = document.createElement("div");
    const img4 = document.createElement("img");
    const imgProduct4 = document.createElement("div");
    const descriptionProduct4 = document.createElement("div");
    const descriptionTextProduct4 = document.createElement("p");
    menuTittle.setAttribute("id", "menu-tittle");
    frameMenu.setAttribute("id", "frame-menu");
    product1.setAttribute("id", "product1");
    product2.setAttribute("id", "product2");
    product3.setAttribute("id", "product3");
    product4.setAttribute("id", "product4");
    product1.classList.add("product");
    product2.classList.add("product");
    product3.classList.add("product");
    product4.classList.add("product");
    imgProduct1.classList.add("img-product");
    imgProduct2.classList.add("img-product");
    imgProduct3.classList.add("img-product");
    imgProduct4.classList.add("img-product");
    descriptionProduct1.classList.add("description-product");
    descriptionProduct2.classList.add("description-product");
    descriptionProduct3.classList.add("description-product");
    descriptionProduct4.classList.add("description-product");
    img1.classList.add("img");
    img2.classList.add("img");
    img3.classList.add("img");
    img4.classList.add("img");
    descriptionTextProduct1.classList.add("description-text");
    descriptionTextProduct2.classList.add("description-text");
    descriptionTextProduct3.classList.add("description-text");
    descriptionTextProduct3.classList.add("description-text");
    h1.textContent = "OUR MENU"
    img1.src = iceCream1;
    img2.src = iceCream2;
    img3.src = iceCream3;
    img4.src = iceCream4;
    descriptionTextProduct1.innerHTML = "<span>Ice cream chillin'</span><span>A big Jisoo's Ice Cream made by Jisoo's Godness, for Jisoo's Queen. 'cause Jisoo loves big things, like big car, big house and ultra big man. Like Jisoo herself this ice cream can enjoy you. his sweet and delicious ice is made for you</span>"
    descriptionTextProduct2.innerHTML = "<span>Second Ice cream chillin'</span><span>This second Ice Cream is made by Jisoo Godness 'cause she's love long thing also. this ice cream is made to to satisfy all your sensibility of your tongue and to have a filled full mouth long story short this Ice cream can never ever disapoint you</span>"
    descriptionTextProduct3.innerHTML = "<span>Ice Cream Cone with Cherry</span><span>Like Jisoo likes cherry she always dreams to make cherry above something so she do it then Ice Cream Cone with Cherry appears. Jisoo get always she wants so she wants make you a pleasure with a ice cream you taste the 7th sky </span>"
    descriptionTextProduct4.innerHTML = "<span>Fantasy Ice Cream</span><span>this ice cream is made to give a taste of imagination of Jisoo for you. you find  deep love, sincerity and deep love. his smothered cream and good swwet chocolate feel you a wonder world</span>"
    document.querySelector("#content").appendChild(frameMenu);
    frameMenu.appendChild(menuTittle);
    menuTittle.appendChild(h1);
    frameMenu.appendChild(product1);
    product1.appendChild(imgProduct1);
    imgProduct1.appendChild(img1);
    product1.appendChild(descriptionProduct1);
    descriptionProduct1.appendChild(descriptionTextProduct1);
    frameMenu.appendChild(product2);
    product2.appendChild(imgProduct2);
    imgProduct2.appendChild(img2);
    product2.appendChild(descriptionProduct2);
    descriptionProduct2.appendChild(descriptionTextProduct2);
    frameMenu.appendChild(product3);
    product3.appendChild(imgProduct3);
    imgProduct3.appendChild(img3);
    product3.appendChild(descriptionProduct3);
    descriptionProduct3.appendChild(descriptionTextProduct3);
    frameMenu.appendChild(product4);
    product4.appendChild(imgProduct4);
    imgProduct4.appendChild(img4);
    product4.appendChild(descriptionProduct4);
    descriptionProduct4.appendChild(descriptionTextProduct4);


}