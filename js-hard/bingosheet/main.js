// 定義
const view = document.getElementById("view");
const hitNum = document.getElementById("hitNum");
let columnbArray = [];
let columniArray = [];
let columnnArray = [];
let columngArray = [];
let columnoArray = [];
let tempArray = [];
let tempArrayLen = [];



function createBingoColum(title, startNum) {
    let columnArray = [];
    // 1 ~ 15を持つ配列
    while (columnArray.length === 0) {
        const randomtempArray = [
            title,
            Math.floor(Math.random() * 15 + startNum),
            Math.floor(Math.random() * 15 + startNum),
            Math.floor(Math.random() * 15 + startNum),
            Math.floor(Math.random() * 15 + startNum),
            Math.floor(Math.random() * 15 + startNum)
        ];
        // console.log(columnArray);
        // console.log(randomtempArray);
        const setElements = new Set(randomtempArray);
        // console.log(setElements.size);
        if (setElements.size === randomtempArray.length) {
            columnArray = randomtempArray;
            break;
        }
    }
    // console.log(columnArray);
    return columnArray;
}


// ビンゴの数値を取得し各配列に入れる処理
columnbArray = createBingoColum("B", 1);
columniArray = createBingoColum("I", 16);
// 31 ~ 45を持つ配列 Free入れるために別処理
while (columnnArray.length === 0) {
    const randomtempArray = [
        "N",
        Math.floor(Math.random() * 15 + 31),
        Math.floor(Math.random() * 15 + 31),
        "free",
        Math.floor(Math.random() * 15 + 31),
        Math.floor(Math.random() * 15 + 31)
    ];
    // console.log(columnnArray);
    // console.log(randomtempArray);
    const setElements = new Set(randomtempArray);
    // console.log(setElements.size);
    if (setElements.size === randomtempArray.length) {
        columnnArray = randomtempArray;
        break;
    }
}
// console.log(columnnArray);
columngArray = createBingoColum("G", 46);
columnoArray = createBingoColum("O", 61);

// すべての配列を結合
const bingoArray = [...columnbArray, ...columniArray, ...columnnArray, ...columngArray, ...columnoArray]
// console.log(bingoArray);

// 1から75までの数値の配列を作成
for (i = 1; i <= 75; i++) {
    tempArray.push(i);
}

// 表示
for (let i = 0; i < 30; i++) {
    const newItem = document.createElement('td');
    newItem.setAttribute("id", i)
    view.appendChild(newItem);
    // Freeのパネルを反転させる
    if (i === 15) {
        newItem.setAttribute("class", "hit-num");
    }
    const newItemEle = document.createElement('p');
    newItem.appendChild(newItemEle);
    newItemEle.textContent = bingoArray[i];
}


// セットボタンを押したとき
hitNum.addEventListener("click", () => {
    console.log(tempArray);
    let tempArrayLen = Math.floor(Math.random() * tempArray.length);
    let answerNum = tempArray[tempArrayLen];
    tempArray.splice(tempArrayLen, 1);
    console.log(tempArray);

    // アラート
    if (tempArray.length === 0) {
        alert(`数字は${answerNum}番です！`);
        alert(`ビンゴ終了！`);
    }
    else {
        alert(`数字は${answerNum}番です！`);
    }

    // アラートした数値のパネルを反転させる
    let indexI = bingoArray.indexOf(answerNum);
    console.log(indexI);
    if (indexI !== -1) {
        // 既存のtdをとってくる
        const tdtag = document.getElementById(indexI);
        // console.log(tdtag);
        // tdのクラス名変更
        tdtag.setAttribute("class", "hit-num")

    }

})


