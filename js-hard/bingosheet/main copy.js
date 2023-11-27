// 定義
const view = document.getElementById("view");
const hitNum = document.getElementById("hitNum");

// 1 ~ 15を持つ配列
let columnbArray = [];
while (columnbArray.length === 0) {
    const randomtempArray = [
        "B",
        Math.floor(Math.random() * 15 + 1),
        Math.floor(Math.random() * 15 + 1),
        Math.floor(Math.random() * 15 + 1),
        Math.floor(Math.random() * 15 + 1),
        Math.floor(Math.random() * 15 + 1)
    ];
    console.log(columnbArray);
    console.log(randomtempArray);
    const setElements = new Set(randomtempArray);
    console.log(setElements.size);
    if (setElements.size === randomtempArray.length) {
        columnbArray = randomtempArray;
        break;
    }
}
console.log(columnbArray);

// 16 ~ 30を持つ配列

let columniArray = [];
while (columniArray.length === 0) {
    const randomtempArray = [
        "I",
        Math.floor(Math.random() * 15 + 16),
        Math.floor(Math.random() * 15 + 16),
        Math.floor(Math.random() * 15 + 16),
        Math.floor(Math.random() * 15 + 16),
        Math.floor(Math.random() * 15 + 16)
    ];
    console.log(columniArray);
    console.log(randomtempArray);
    const setElements = new Set(randomtempArray);
    console.log(setElements.size);
    if (setElements.size === randomtempArray.length) {
        columniArray = randomtempArray;
        break;
    }
}
console.log(columniArray);

// 31 ~ 45を持つ配列

let columnnArray = [];
while (columnnArray.length === 0) {
    const randomtempArray = [
        "N",
        Math.floor(Math.random() * 15 + 31),
        Math.floor(Math.random() * 15 + 31),
        "free",
        Math.floor(Math.random() * 15 + 31),
        Math.floor(Math.random() * 15 + 31)
    ];
    console.log(columnnArray);
    console.log(randomtempArray);
    const setElements = new Set(randomtempArray);
    console.log(setElements.size);
    if (setElements.size === randomtempArray.length) {
        columnnArray = randomtempArray;
        break;
    }
}
console.log(columnnArray);

// 46 ~ 60を持つ配列

let columngArray = [];
while (columngArray.length === 0) {
    const randomtempArray = [
        "G",
        Math.floor(Math.random() * 15 + 46),
        Math.floor(Math.random() * 15 + 46),
        Math.floor(Math.random() * 15 + 46),
        Math.floor(Math.random() * 15 + 46),
        Math.floor(Math.random() * 15 + 46)
    ];
    console.log(columngArray);
    console.log(randomtempArray);
    const setElements = new Set(randomtempArray);
    console.log(setElements.size);
    if (setElements.size === randomtempArray.length) {
        columngArray = randomtempArray;
        break;
    }
} columngArray
console.log(columngArray);

// 61 ~ 75を持つ配列

let columnoArray = [];
while (columnoArray.length === 0) {
    const randomtempArray = [
        "O",
        Math.floor(Math.random() * 15 + 61),
        Math.floor(Math.random() * 15 + 61),
        Math.floor(Math.random() * 15 + 61),
        Math.floor(Math.random() * 15 + 61),
        Math.floor(Math.random() * 15 + 61)
    ];
    console.log(columnoArray);
    console.log(randomtempArray);
    const setElements = new Set(randomtempArray);
    console.log(setElements.size);
    if (setElements.size === randomtempArray.length) {
        columnoArray = randomtempArray;
        break;
    }
}
console.log(columnoArray);

// すべての配列を結合
const bingoArray = [...columnbArray, ...columniArray, ...columnnArray, ...columngArray, ...columnoArray]
console.log(bingoArray);

// セットボタンを押したとき
hitNum.addEventListener("click", () => {

    for (let i = 0; i < 30; i++) {
        const newItem = document.createElement('td');
        view.appendChild(newItem);
        const newItemEle = document.createElement('p');
        newItem.appendChild(newItemEle);
        newItemEle.textContent = bingoArray[i];
    }
})


