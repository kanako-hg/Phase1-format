// 定義
const view = document.getElementById("view");
const hitNum = document.getElementById("hitNum");
let columnBArray = [];
let columnIArray = [];
let columnNArray = [];
let columnGArray = [];
let columnOArray = [];
let numArrayOf1To75 = [...Array(16)].map((_, i) => i + 1);
let temporaryArrayLength = [];
let hitNumIdArray = [];
let judgementArray = [];
let testArray = [];



// function createBingoColumn(title, startNum) {
//     let columnArray = [];
//     // 1 ~ 15を持つ配列
//     while (columnArray.length === 0) {
//         const randomTemporaryArray = [
//             title,
//             Math.floor(Math.random() * 15 + startNum),
//             Math.floor(Math.random() * 15 + startNum),
//             Math.floor(Math.random() * 15 + startNum),
//             Math.floor(Math.random() * 15 + startNum),
//             Math.floor(Math.random() * 15 + startNum)
//         ];
//         // console.log(columnArray);
//         // console.log(randomtempArray);
//         const setElements = new Set(randomTemporaryArray);
//         // console.log(setElements.size);
//         if (setElements.size === randomTemporaryArray.length) {
//             columnArray = randomTemporaryArray;
//             break;
//         }
//     }
//     // console.log(columnArray);
//     return columnArray;
// }
function createBingoColumn(title, startNum) {
    let columnArray = [];

    while (columnArray.length === 0) {
        const randomTemporaryArray = [
            title,
            //  Math.floor(Math.random() * 15 + startNum)の結果を5個持つ配列を作成して...で展開している
            ...Array.from({ length: 5 }, () =>
                Math.floor(Math.random() * 15 + startNum)
            ),
        ];

        if (title === "N") {
            randomTemporaryArray[3] = "free";
        }

        const setObj = new Set(randomTemporaryArray);
        if (setObj.size === 6) {
            columnArray = randomTemporaryArray;
            break;
        }
    }
    return columnArray;
}


// ビンゴの数値を取得し各配列に入れる処理
// columnBArray = createBingoColumn("B", 1);
// columnIArray = createBingoColumn("I", 16);
// 31 ~ 45を持つ配列 Free入れるために別処理
// while (columnNArray.length === 0) {
//     const randomtempArray = [
//         "N",
//         Math.floor(Math.random() * 15 + 31),
//         Math.floor(Math.random() * 15 + 31),
//         "free",
//         Math.floor(Math.random() * 15 + 31),
//         Math.floor(Math.random() * 15 + 31)
//     ];
//     // console.log(columnnArray);
//     // console.log(randomtempArray);
//     const setElements = new Set(randomtempArray);
//     // console.log(setElements.size);
//     if (setElements.size === randomtempArray.length) {
//         columnNArray = randomtempArray;
//         break;
//     }
// }
// console.log(columnnArray);
// columnGArray = createBingoColumn("G", 46);
// columnOArray = createBingoColumn("O", 61);



// すべての配列を結合
const bingoArray = [...createBingoColumn("B", 1), ...createBingoColumn("I", 16), ...createBingoColumn("N", 31), ...createBingoColumn("G", 46), ...createBingoColumn("O", 61)]
// console.log(bingoArray);

// 1から75までの数値の配列を作成
// for (i = 1; i <= 75; i++) {
//     numArrayOf1To75.push(i);
// }

// 表示
for (let i = 0; i < 30; i++) {
    const createdTd = document.createElement('td');
    createdTd.setAttribute("id", i)
    view.appendChild(createdTd);
    // Freeのパネルを反転させる
    if (i === 15) {
        createdTd.setAttribute("class", "hit-num");
    }
    const createdP = document.createElement('p');
    createdTd.appendChild(createdP);
    createdP.textContent = bingoArray[i];
}




// セットボタンを押したとき
hitNum.addEventListener("click", () => {
    console.log(numArrayOf1To75);
    let temporaryArrayLength = Math.floor(Math.random() * numArrayOf1To75.length);
    let answerNum = numArrayOf1To75[temporaryArrayLength];
    numArrayOf1To75.splice(temporaryArrayLength, 1);
    console.log(numArrayOf1To75);

    // アラート
    if (numArrayOf1To75.length === 0) {
        alert(`数字は${answerNum}番です！`);
        alert(`ビンゴ終了！`);
    }
    else {
        alert(`数字は${answerNum}番です！`);
    }

    // アラートした数値のパネルを反転させる
    const indexI = bingoArray.indexOf(answerNum);
    console.log(indexI);
    if (indexI !== -1) {
        // 既存のtdをとってくる
        const tdtag = document.getElementById(indexI);
        // console.log(tdtag);
        // tdのクラス名変更
        tdtag.setAttribute("class", "hit-num")

    }
    // ビンゴ判定
    // class = "hit-Num"になっているtdタブのidを求めたい
    // クラス名で要素を取得
    const hitNumIdElements = document.getElementsByClassName("hit-num");
    console.log(hitNumIdElements.length);
    // 取得した要素のid名をすべて取得して新たな配列に追加したい
    for (let i = 0; i < hitNumIdElements.length; i++) {

        // console.log(hitNumIdElements[i].id)

        hitNumIdArray.push(Number(hitNumIdElements[i].id));
    }

    judgementTenporaryArray = new Set(hitNumIdArray);
    const judgementArray = Array.from(judgementTenporaryArray);

    console.log(hitNumIdArray);
    console.log(judgementArray);
    // 縦もしくは横もしくは斜めがそろった時…Bingo!!!
    // const isBelowThreshold = (currentValue) => incrudes(1);

    // for (let i = 0; i < 5; i++) {

    // }
    // console.log([judgementArray.includes(1)]);
    // console.log([judgementArray.includes(2)]);
    // console.log([judgementArray.includes(3)]);
    // console.log([judgementArray.includes(4)]);
    // console.log([judgementArray.includes(5)]);

    // const array = judgementArray.includes(1, 2, 3, 4, 5);
    // const res = array.every(elm => elm === true);
    // console.log(res);
    // if (
    //     // 縦

    //     // [judgementArray.includes(7, 8, 9, 10, 11)] ||
    //     // [judgementArray.includes(13, 14, 15, 16, 17)] ||
    //     // [judgementArray.includes(19, 20, 21, 22, 23)] ||
    //     // [judgementArray.includes(25, 26, 27, 28, 29)] ||
    //     // // 横
    //     // [judgementArray.includes(1, 7, 13, 19, 25)] ||
    //     // [judgementArray.includes(2, 8, 14, 20, 26)] ||
    //     // [judgementArray.includes(3, 9, 21, 27)] ||
    //     // [judgementArray.includes(4, 10, 16, 22, 28)] ||
    //     // [judgementArray.includes(5, 11, 17, 23, 29)] ||
    //     // // 斜め
    //     // [judgementArray.includes(1, 8, 22, 29)] ||
    //     // [judgementArray.includes(5, 10, 20, 25)]

    // ) {
    //     console.log(judgementArray.includes(1, 2, 3, 4, 5));

    // }
    // else {
    //     console.log(judgementArray.includes(1, 2, 3, 4, 5));
    //     alert("びんご！");

    // }


    // どれかの配列の中がすべてtrueだったら

})















// レビューしましたので、ご確認お願いいたします！

// ○ 動作確認
// 数字や動作の問題なし。余裕があればビンゴした時の結果判定実装しても勉強になりそう。

// ○良いと思った点
// コード見た感じ、考えて自力でロジックを組み立てる力ついてきていると思います！是非これを続けていきましょう！

// function createBingoColum関数など関数化できていて処理をまとめられている点。関数名も何をする関数なのか適切に表せていて良い。ただ、最後のnが抜けている？
// その関数で引数やreturnの返り値(戻り値)などを使いこなせている点。→この段階で使いこなせているのは素晴らしいと思います！
// スプレッド構文が使えているところ→素晴らしい
// // すべての配列を結合
// const bingoArray = [
//     ...columnbArray,
//     ...columniArray,
//     ...columnnArray,
//     ...columngArray,
//     ...columnoArray,
// ];

// while文、for文の繰り返し処理が使いこなせていて理解できている点→素晴らしい
// 基本的な配列操作やメソッド.length、.indexOfを使えている点


// ○変数名が気になった点
// columnbArray, columniArrayなど、確かに私もその名前にすると思いますが、jsでは変数名はキャメルケースが基本なので、単語間は大文字にします。なのでcolumnBArray、verticalBArray、columnBあたりにするかなと思います。
// columnbという単語に見えちやうので読みにくいです。
// randomtempArray、tdtagなども上記と同様。名前の意味的には問題なさそう。tdtagはtdでもtdTagでもtdElementでもどれでも良いと思います。
// tempArray、tempArrayLenなど略しすぎるとtemplateか temporaryかなど推測によっては全く違う意味と捉えられてしまう可能性があります。(プログラマー間でよく使うもの、一般的に通じるものは例外的にOKな場合あり、arg→arguments、num→number、str→string)
// 多少長くなっても、
// 誤解されないような正確な変数名にする、
// 変数名を見ただけで推測できる名前にする、
// のが私は良いと思います。最終的には変数名はできるだけ明確で簡潔なものがベストです！
// 結論→temporaryArrayLengthなど

// tempArrayについては変数名だけを見たときに中に何が入るのか予測しづらいです。色々な箇所で使われていたら何が入っているか確認しに行かないといけないかも、なので私ならallNumArrayまたは(numArrayOf1To70、numbers1To70→変数名としては微妙な感じもするが一発でわかる)とかにします。

// newItemEleやnewItemはcreateElement()で作ったものなら何にでもつけられそうな名前になってます。それだと途中でどれがどれだっけ？となるので、いっそのこと何が入っているか分かりやすい方がいいかと！ newItem　→　td, tdEle, tdTag, createdTd、newItemEle → p, 前者と同じため省略など

// ○改善したほうが良い点や気になる点、改善案等
// もちろん今回の書き方も間違いではないですが、綺麗なコードの最終目標は個人的に下記だと思っています。今回はその観点で話してます。
// 不要な記述がない
// 長い処理や記述は適切に変数化、関数化されている
// 同じような定義や処理が散らばっておらずまとまっている
// →3つによって、読みやすさ(可読性)向上とバグの少なさに繋がる

// letで書かなくていい箇所があるので、できればconstにしましょう。 let indexIなど
// 下記の変数は後で一つの変数にまとめるなら最初からまとめた方がいいかもと思いました。
// let columnbArray = [];
// let columniArray = [];
// let columnnArray = [];
// let columngArray = [];
// let columnoArray = [];

// columngArray = createBingoColum("G", 46);
// columnoArray = createBingoColum("O", 61);

// // すべての配列を結合
// const bingoArray = [
//     ...columnbArray,
//     ...columniArray,
//     //省略
// ];

// 下記のあたりの処理createBingoColum関数とやっていることはほぼ同じなので、まとめれそうと思いました。条件分岐で行けそう
// // 31 ~ 45を持つ配列 Free入れるために別処理
// while (columnnArray.length === 0) {
//     const randomtempArray = [
//         "N",
//         Math.floor(Math.random() * 15 + 31),
//         Math.floor(Math.random() * 15 + 31),
//         "free",
//         Math.floor(Math.random() * 15 + 31),
//         Math.floor(Math.random() * 15 + 31),
//     ];
//     //省略

//     これでもいいですが、特別な理由なければtempArrayの定義時に入れても良いと思います。
//     // 1から75までの数値の配列を作成
//     for (i = 1; i <= 75; i++) {
//         tempArray.push(i);
//     }

//     tempArrayLenという関数は何の略でしょう？tempArrayLengthですか？意味的にも少し異なっている気がしてます！また、最初に定義されている(上から10行目あたり)のlet tempArrayLen = []; は使われてないので、不要です。下記で使われており、こちらを作った意図的に1 ~75の中からランダムな数字を出したい。その際のランダムなindex番号だと思います。よって私なら、const randomIndexにします。

//         ここの処理は書き方の工夫が必要ですが、短くかけます！
//     // アラート
//     if (tempArray.length === 0) {
//         alert(`数字は${answerNum}番です！`);
//         alert(`ビンゴ終了！`);
//     } else {
//         alert(`数字は${answerNum}番です！`);
//     }


//     今回tdタグのみで作って、縦並びにするにはcssでやってますが、trタグを作ってその中にtdタグを入れてやっても、簡単に縦並びになります。trは行を表すタグです。https://developer.mozilla.org/ja/docs/Web/HTML/Element/tr


//     どう直したかのコードはここだと長くなるので、ファイルで送ります！

// const view = document.getElementById("view");
// const hitNum = document.getElementById("hitNum");

// function createSheetColumn(title, startNum) {
//     let columnArray = [];
//     while (true) {
//         const randomTemporaryArray = Array.from({ length: 6 }, () =>
//             Math.floor(Math.random() * 15 + startNum)
//         );
//         randomTemporaryArray[0] = title;
//         if (title === "N") {
//             randomTemporaryArray[3] = "free";
//         }

//         const setObj = new Set(randomTemporaryArray);
//         if (setObj.size === 6) {
//             columnArray = randomTemporaryArray;
//             break;
//         }
//     }
//     return columnArray;
// }

// もしくはこっち
// function createSheetColumn(title, startNum) {
//   let columnArray = [];

//   while (columnArray.length === 0) {
//     const randomTemporaryArray = [
//       title,
//       //  Math.floor(Math.random() * 15 + startNum)の結果を5個持つ配列を作成して...で展開している
//       ...Array.from({ length: 5 }, () =>
//         Math.floor(Math.random() * 15 + startNum)
//       ),
//     ];

//     if (title === "N") {
//       randomTemporaryArray[3] = "free";
//     }

//     const setObj = new Set(randomTemporaryArray);
//     if (setObj.size === 6) {
//       columnArray = randomTemporaryArray;
//       break;
//     }
//   }
//   return columnArray;
// }

// const allNumbers = Array.from({ length: 75 }, (_, i) => i + 1);
// const sheetContents = [
//     ...createSheetColumn("B", 1),
//     ...createSheetColumn("I", 16),
//     ...createSheetColumn("N", 31),
//     ...createSheetColumn("G", 46),
//     ...createSheetColumn("O", 61),
// ];

// // 表示の処理 for文とやっていることは同じ
// sheetContents.forEach((content, i) => {
//     const td = document.createElement("td");
//     td.setAttribute("id", i);
//     td.textContent = content;
//     view.appendChild(td);
//     if (i === 15) {
//         td.setAttribute("class", "hit-num");
//     }
// });

// // セットボタンを押したとき
// hitNum.addEventListener("click", () => {
//     console.log(allNumbers);
//     const randomIndex = Math.floor(Math.random() * allNumbers.length);
//     const answerNum = allNumbers[randomIndex];
//     allNumbers.splice(randomIndex, 1);
//     // アラート
//     alert(`数字は${answerNum}番です！`);
//     if (allNumbers.length === 0) {
//         alert(`ビンゴ終了！`);
//     }

//     // アラートした数値のパネルを反転させる
//     const hitNumIndex = sheetContents.indexOf(answerNum);
//     if (hitNumIndex !== -1) {
//         const td = document.getElementById(hitNumIndex);
//         td.setAttribute("class", "hit-num");
//     }
// });

