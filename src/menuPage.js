export default function () {
    const frameMenu = document.createElement("div");
    const menuTittle = document.createElement("div");
    const h1 = document.createElement("h2");
    menuTittle.setAttribute("id", "menu-tittle");
    frameMenu.setAttribute("id", "frame-menu");
    h1.textContent = "OUR MENU"
    document.querySelector("#content").appendChild(frameMenu);
    frameMenu.appendChild(menuTittle);
    menuTittle.appendChild(h1);

}