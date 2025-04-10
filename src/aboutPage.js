import jisoo from "./images/jisoo.jpg";
import selenaGomez from "./images/selena.webp";
import lisa from "./images/lisa.jpg"
import jennie from "./images/jennie.webp"
import rose from "./images/rose.jpg"

export default function () {
    const imagesMembers = [
        jisoo,
        selenaGomez,
        lisa,
        jennie,
        rose
    ];
    const description = [
        "<span>Jisoo CEO</span><span>most beautiful, sexiest, charismatic woman in the world(and i don't say it because she's my mastermind). Since her childhood she's always love Ice Cream so aldult she opened her Ice Cream Shop so everyone can enjoy her love and passion... for the Ice Cream. she's a part-time the chief of a gang (a.k.a girl group) Blackpink. she's also a very great actress. She have a flower shop</span>",
        "<span>Selena Gomez</span><span>former princess Disney she's now the vice CEO. she's become more and more beautiful with time</span>",
        "<span>Lisa</span><span>Very very Good Rapper. she's your very fast delivery driver</span>",
        "<span>Jennie</span><span>this beautiful and sexy is with CEO Jisoo our amzing waitress </span>",
        "<span>Rosé</span><span>with her beautiful voice she's a singer. she's our wonderful cashier</span>"
    ];
    const frameAbout = document.createElement("div");
    const aboutTittle = document.createElement("div");
    frameAbout.setAttribute("id", "frame-about");
    aboutTittle.setAttribute("id", "about-tittle");
    aboutTittle.innerHTML = "<h1>Meet the Crew!</h1>"
    document.querySelector("#content").appendChild(frameAbout);
    frameAbout.appendChild(aboutTittle);
    for (let i = 0; i < 5; i++) {
        const member = document.createElement("div");
        const membersImageContainer = document.createElement("div");
        const membersImage = document.createElement("img");
        const membersDescription = document.createElement("div");
        const membersTextDescription = document.createElement("p");
        member.classList.add("member");
        membersImageContainer.classList.add("members-image-container");
        membersImage.classList.add("img");
        membersImage.setAttribute("id", `members-image${i}`);
        membersImage.src = imagesMembers[i];
        membersDescription.classList.add("members-description");
        membersTextDescription.innerHTML = description[i];
        membersTextDescription.classList.add("members-text-description")
        frameAbout.appendChild(member);
        member.appendChild(membersImageContainer);
        membersImageContainer.appendChild(membersImage);
        member.appendChild(membersDescription);
        membersDescription.appendChild(membersTextDescription);

    }
}