let Button = () => {
    let div = document.createElement("div");
    div.className = "button";

    let divImage = document.createElement("div");
    divImage.className = "button-image";

    let imgIcon = document.createElement("img");
    imgIcon.src = `./assets/icons/${img}`;
    divImage.appendChild(imgIcon);

    let p = document.createElement("p");
    p.className = "button-text";
    p.textContent = title;

    div.appendChild(divImage);
    div.appendChild(p);

    return (div);

}

export {Button};