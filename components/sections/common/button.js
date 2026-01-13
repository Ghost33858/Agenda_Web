let Button = (text, name, img) => {
    let div = document.createElement("div");
    div.className = "button";
    div.dataset.name = name;

    let divImage = document.createElement("div");
    divImage.className = "button-image";

    let imgIcon = document.createElement("img");
    imgIcon.src = `./assets/icons/${img}`;
    imgIcon.alt = text;

    let p = document.createElement("p");
    p.className = "button-text";
    p.textContent = text;

    divImage.appendChild(imgIcon);
    div.appendChild(divImage);
    div.appendChild(p);

    return div;
};

export { Button };
