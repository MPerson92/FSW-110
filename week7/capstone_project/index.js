let titles = document.getElementById("title");
let descriptions = document.getElementById("description");
let buttons = document.getElementById("button");
buttons.addEventListener("click", e => {
    e.preventDefault();
    let paragraph = document.createElement("p");
    let paragraph2 = document.createElement("p2");
    paragraph.textContent = titles.value;
    paragraph2.textContent = descriptions.value;
    paragraph.id = "p";
    paragraph2.id = "p2";
    document.body.appendChild(paragraph);
    document.body.appendChild(paragraph2);
    let deleteButton = document.createElement("button");
    deleteButton.textContent = "delete";
    deleteButton.id = "button2";
    deleteButton.addEventListener("click", e => {
        e.preventDefault();
        document.body.removeChild(paragraph);
        document.body.removeChild(paragraph2);
        document.body.removeChild(deleteButton);
    })
    document.body.appendChild(deleteButton);
    titles.value = "";
    descriptions.value = "";
})
