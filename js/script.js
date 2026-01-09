let addBtn = document.querySelector("#btn");
let listData =[];
listData = JSON.parse(localStorage.getItem("list"));
window.onload = () => {
    if(!listData) {
        return;
    }

    for(let v of listData) {
        let div = document.createElement("div");
        div.classList.add("li");

        let p = document.createElement("p");
        p.textContent = v.content;

        let button = document.createElement("button");
        button.textContent = v.num;
        button.classList.add("deleteBtn");

        document.querySelector("#addList").appendChild(div);
        div.appendChild(p);
        div.appendChild(button);
    }
}

addBtn.addEventListener("click", addList);

function addList() {
    let text = document.querySelector("#text").value;
    let num = document.querySelector("#time").value;

    let div = document.createElement("div");
    div.classList.add("li");

    let p = document.createElement("p");
    p.textContent = text;

    let button = document.createElement("button");
    button.textContent = num;
    button.classList.add("deleteBtn");

    document.querySelector("#addList").appendChild(div);
    div.appendChild(p);
    div.appendChild(button);


    listData.push(
        {content: text, num: num}
    );
    localStorage.setItem("list", JSON.stringify(listData));
}