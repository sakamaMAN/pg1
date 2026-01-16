let addBtn = document.querySelector("#btn");

let listData = JSON.parse(localStorage.getItem("list"));
//Array.isArray(配列)...配列かどうか確認
if (!Array.isArray(listData)) {
    listData = [];
} 

//すでにあるlistを表示
    for(let v of listData) {
        let div = document.createElement("div");
        div.classList.add("li");

        let p = document.createElement("p");
        p.textContent = v.content + " (" + v.num + "分)";

        let button = document.createElement("button");
        button.textContent = "削除";
        button.classList.add("deleteBtn");

        document.querySelector("#addList").appendChild(div);
        div.appendChild(p);
        div.appendChild(button);
    }

addBtn.addEventListener("click", addList);

//追加クリック時の関数
function addList() {
    //input要素取得
    let text = document.querySelector("#text").value;
    let num = document.querySelector("#time").value;
    
    //未入力の場合
    if (!text || !num) {
        alert("今日やったこと、時間を入力してください。");
        return;
    }

    let div = document.createElement("div");
    div.classList.add("li");

    let p = document.createElement("p");
    p.textContent = text + " (" + num + "分)";

    let button = document.createElement("button");
    button.textContent = "削除";
    button.classList.add("deleteBtn");

    document.querySelector("#addList").appendChild(div);
    div.appendChild(p);
    div.appendChild(button);


    listData.push(
        {content: text, num: num}
    );
    localStorage.setItem("list", JSON.stringify(listData));
}


//削除ボタンクリック時の関数
document.querySelector("#addList").addEventListener("click", (event) => {   //event...クリック情報を受け取る引数
    let item = event.target.parentElement;  //target...クリックされた要素 parentElement...親要素
    let items =Array.from(document.querySelectorAll("#addList .li"));   //liの要素すべて取得して配列化
    let index = items.indexOf(item);    //itemがitemsの何番目にあるか
    listData.splice(index, 1);  //listDataからindex番目を1個削除
    localStorage.setItem("list", JSON.stringify(listData));
    item.remove();  //画面からitemを削除
});