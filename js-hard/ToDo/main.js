// 定義
const add_area = document.getElementById("add-area");
// ByClassNameは配列が取得される
const add_btn = document.getElementsByClassName("add-btn");
const list = document.querySelector('.lists');

// 追加するボタンを押す
add_btn[0].addEventListener("click", () => {
    // ul内にタスクを表示させる
    // const newItem_wrap = document.createElement('div');
    const newItem = document.createElement('li');
    const newBtn = document.createElement('button');

    newBtn.textContent = "完了";
    newItem.textContent = add_area.value;
    // 完了ボタンを押したらタスクを消す
    newBtn.addEventListener("click", function () {
        newItem.remove();
    });
    // タグによってデータの参照方法が違う　input value その他 textContent
    // https://www.javadrive.jp/javascript/form/index1.html#section2
    // console.log(newItem.textContent);
    // console.log(add_area.value);
    if (newItem.textContent === "") {
        alert("空欄です！");
    }
    else {
        // list.appendChild(newItem_wrap);
        list.appendChild(newItem);
        newItem.appendChild(newBtn);
    }
});
