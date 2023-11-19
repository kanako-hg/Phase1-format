// // 定義
// // "startTimer"というidの(HTML)要素を、startTimerという変数に入れる
// const startTimer = document.getElementById("startTimer");
// // "setTime1"というidの(HTML)要素を、setTime1という変数に入れる
// const setTime1 = document.getElementById("setTime1");
// // "setTime2"というidの(HTML)要素を、setTime2という変数に入れる
// const setTime2 = document.getElementById("setTime2");
// // "setTime3"というidの(HTML)要素を、setTime3という変数に入れる
// const setTime3 = document.getElementById("setTime3");
// // "nowTime1"というidの(HTML)要素を、nowTime1という変数に入れる
// const nowTime1 = document.getElementById("nowTime1");
// // "nowTime2"というidの(HTML)要素を、nowTime2という変数に入れる
// const nowTime2 = document.getElementById("nowTime2");
// // "nowTime3"というidの(HTML)要素を、nowTime3という変数に入れる
// const nowTime3 = document.getElementById("nowTime3");
// // timer1という変数を作成する
// let timer1;
// // timer2という変数を作成する
// let timer2;
// // timer3という変数を作成する
// let timer3;
// // num1という変数を作成し0を代入する
// let num1 = 0;
// // num2という変数を作成し0を代入する
// let num2 = 0;
// // num3という変数を作成し0を代入する
// let num3 = 0;
// // nowTime1という変数にnum1(=0)を代入する
// nowTime1.textContent = num1;
// // nowTime2という変数にnum2(=0)を代入する
// nowTime2.textContent = num2;
// // nowTime3という変数にnum3(=0)を代入する
// nowTime3.textContent = num3;

// // スタートボタンを押したとき
// // 3つの数字を1ずつ増やす
// // 2回目以降　ストップボタンのdisabledの解除

// // startTimerという変数の要素のclickイベントにfunctionで記述された処理を登録する
// startTimer.addEventListener("click", function () {
//     // setTime1という変数(ボタン)のdisabled属性を削除
//     setTime1.removeAttribute("disabled");
//     // setTime2という変数(ボタン)のdisabled属性を削除
//     setTime2.removeAttribute("disabled");
//     // setTime3という変数(ボタン)のdisabled属性を削除
//     setTime3.removeAttribute("disabled");
//     // timer1変数に入れたsetIntervalの繰り返し動作を取り消す
//     clearInterval(timer1);
//     // timer2変数に入れたsetIntervalの繰り返し動作を取り消す
//     clearInterval(timer2);
//     // timer3変数に入れたsetIntervalの繰り返し動作を取り消す
//     clearInterval(timer3);
//     // num1という変数に0を代入する
//     num1 = 0;
//     // num2という変数に0を代入する
//     num2 = 0;
//     // num3という変数に0を代入する
//     num3 = 0;
//     // timer1という変数にsetIntervalの繰り返し処理を入れる
//     timer1 = setInterval(() => {
//         // 変数num1に1を足す
//         num1 += 1;
//         // num1が9以下のとき
//         if (num1 <= 9) {
//             // nowTime1という変数に入っているHTML(数字が表示される部分)をnum1の中の数値に書き換える
//             nowTime1.textContent = num1;
//         }
//         // その他(num1が10以上)のとき
//         else {
//             // num1という変数に0を代入する
//             num1 = 0;
//         }
//         // 0.1秒ごとに以上の処理を繰り返す
//     }, 100);
//     // timer2という変数にsetIntervalの繰り返し処理を入れる
//     timer2 = setInterval(() => {
//         // 変数num2に1を足す
//         num2 += 1;
//         // num2が9以下のとき
//         if (num2 <= 9) {
//             // nowTime2という変数に入っているHTML(数字が表示される部分)をnum1の中の数値に書き換える
//             nowTime2.textContent = num2;
//         }
//         // その他(num1が10以上)のとき
//         else {
//             // num2という変数に0を代入する
//             num2 = 0;
//         }
//         // 0.1秒ごとに以上の処理を繰り返す
//     }, 100);
//     // timer3という変数にsetIntervalの繰り返し処理を入れる
//     timer3 = setInterval(() => {
//         // 変数num3に1を足す
//         num3 += 1;
//         // num3が9以下のとき
//         if (num3 <= 9) {
//             // nowTime3という変数に入っているHTML(数字が表示される部分)をnum1の中の数値に書き換える
//             nowTime3.textContent = num3;
//         }
//         // その他(num1が10以上)のとき
//         else {
//             // num3という変数に0を代入する
//             num3 = 0;
//         }
//         // 0.1秒ごとに以上の処理を繰り返す
//     }, 100);
// });
// // ストップ１を押したとき
// // 数字を止める
// // ストップボタンをdisabledにする
// // 全部止まってたらジャッチ 条件：全部disabled＝true <> disabled=false
// // すべて止まっている場合
// // はずれ→再挑戦
// // あたり→成功
// // アラートで出す

// // setTime1という変数の要素のclickイベントにfunctionで記述された処理を登録する
// setTime1.addEventListener("click", function () {
//     // timer1変数に入れたsetIntervalの繰り返し動作を取り消す
//     clearInterval(timer1);
//     // setTime1という変数の要素の属性にdisabledをtrueで追加する(disabled発動!)
//     setTime1.setAttribute("disabled", true);
//     // setTime1のdisabled属性がtrueかつsetTime2のdisabled属性がtrueかつsetTime3のdisabled属性がtrueのとき(完全一致)
//     if (setTime1.disabled === true && setTime2.disabled === true && setTime3.disabled === true) {
//         console.log(num1);
//         console.log(num2);
//         console.log(num3);
//         // num1=num2=num3(完全一致)のとき
//         if (num1 === num2 && num2 === num3) {
//             // アラートで”成功”と表示する
//             alert("成功");
//         }
//         // その他のとき
//         else {
//             // アラートで”再挑戦”と表示する
//             alert("再挑戦");
//         }
//     }

// });
// // ストップ２を押したとき
// // 数字を止める
// // ストップボタンをdisabledにする
// // 全部止まってたらジャッチ
// // すべて止まっている場合
// // はずれ→再挑戦
// // あたり→成功
// // アラートで出す

// // setTime2という変数の要素のclickイベントにfunctionで記述された処理を登録する
// setTime2.addEventListener("click", function () {
//     // timer2変数に入れたsetIntervalの繰り返し動作を取り消す
//     clearInterval(timer2);
//     // setTime2という変数の要素の属性にdisabledをtrueで追加する(disabled発動!)
//     setTime2.setAttribute("disabled", true);
//     // setTime1のdisabled属性がtrueかつsetTime2のdisabled属性がtrueかつsetTime3のdisabled属性がtrueのとき(完全一致)
//     if (setTime1.disabled === true && setTime2.disabled === true && setTime3.disabled === true) {
//         // num1=num2=num3(完全一致)のとき
//         if (num1 === num2 === num3) {
//             // アラートで”成功”と表示する
//             alert("成功");
//         }
//         // その他のとき
//         else {
//             // アラートで”再挑戦”と表示する
//             alert("再挑戦");
//         }
//     }

// });
// // ストップ３を押したとき
// // 数字を止める
// // ストップボタンをdisabledにする
// // 全部止まってたらジャッチ
// // すべて止まっている場合
// // はずれ→再挑戦
// // あたり→成功
// // アラートで出す

// // setTime3という変数の要素のclickイベントにfunctionで記述された処理を登録する
// setTime3.addEventListener("click", function () {
//     // timer3変数に入れたsetIntervalの繰り返し動作を取り消す
//     clearInterval(timer3);
//     // setTime3という変数の要素の属性にdisabledをtrueで追加する(disabled発動!)
//     setTime3.setAttribute("disabled", true);
//     // setTime1のdisabled属性がtrueかつsetTime2のdisabled属性がtrueかつsetTime3のdisabled属性がtrueのとき(完全一致)
//     if (setTime1.disabled === true && setTime2.disabled === true && setTime3.disabled === true) {
//         // num1=num2=num3(完全一致)のとき
//         if (num1 === num2 === num3) {
//             // アラートで”成功”と表示する
//             alert("成功");
//         }
//         // その他のとき
//         else {
//             // アラートで”再挑戦”と表示する
//             alert("再挑戦");
//         }
//     }

// });

// エラー内容を確認されて現状を分析されている点、エラーへの対応策を知りたいと考えていらっしゃる点はとても良いと思います！
// 1つずつ見ていきましょう。

// エラー内容を検索→slot関数が定義されていないとのことが分かったが、定義されているように思う
// main.jsには確かに 10行目に const slot = () => { }  とありますね。

//     上記のエラーがなぜ起こっているのか問題コードの場所がどこなのか、調べる手立て等教えていただけますでしょうか
// 問題のコードの場所は、画像（ブラウザのコンソール）の右上  main.js: 10 に示されています。この意味は、
// main.jsファイルの 10行目 という意味です。その後に、さらに数字が続く場合もありますが、これは その行のn文字目です という詳細を示します。

// refferenceErrorなので、正しく変数を参照できない、という種類のエラーです。エラーの種類は調べると説明もされていたりするので見てみてください。
// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Error
// https://kinsta.com/jp/blog/errors-in-javascript/
// よろしければビデオ質問にお越しください！



// 定義
// "startTimer"というidの(HTML)要素を、startTimerという変数に入れる
const startTimer = document.getElementById("startTimer");
// "setTime1"というidの(HTML)要素を、setTime1という変数に入れる
const setTime1 = document.getElementById("setTime1");
// "setTime2"というidの(HTML)要素を、setTime2という変数に入れる
const setTime2 = document.getElementById("setTime2");
// "setTime3"というidの(HTML)要素を、setTime3という変数に入れる
const setTime3 = document.getElementById("setTime3");
// "nowTime1"というidの(HTML)要素を、nowTime1という変数に入れる
const nowTime1 = document.getElementById("nowTime1");
// "nowTime2"というidの(HTML)要素を、nowTime2という変数に入れる
const nowTime2 = document.getElementById("nowTime2");
// "nowTime3"というidの(HTML)要素を、nowTime3という変数に入れる
const nowTime3 = document.getElementById("nowTime3");
// "nowTime4"というidの(HTML)要素を、nowTime1という変数に入れる
const nowTime4 = document.getElementById("nowTime4");
// "nowTime5"というidの(HTML)要素を、nowTime1という変数に入れる
const nowTime5 = document.getElementById("nowTime5");
// "nowTime6"というidの(HTML)要素を、nowTime1という変数に入れる
const nowTime6 = document.getElementById("nowTime6");
// "nowTime7"というidの(HTML)要素を、nowTime1という変数に入れる
const nowTime7 = document.getElementById("nowTime7");
// "nowTime8"というidの(HTML)要素を、nowTime1という変数に入れる
const nowTime8 = document.getElementById("nowTime8");
// "nowTime9"というidの(HTML)要素を、nowTime1という変数に入れる
const nowTime9 = document.getElementById("nowTime9");
// timer1という変数を作成する
let timer1;
// timer2という変数を作成する
let timer2;
// timer3という変数を作成する
let timer3;
// num1という変数を作成し配列を代入する
let num1 = 0;
// num2という変数を作成し配列を代入する
let num2 = 0;
// num3という変数を作成し配列を代入する
let num3 = 0;
// num4という変数を作成し配列を代入する
let num4 = 9;
// num5という変数を作成し配列を代入する
let num5 = 9;
// num6という変数を作成し配列を代入する
let num6 = 9;
// num7という変数を作成し配列を代入する
let num7 = 1;
// num8という変数を作成し配列を代入する
let num8 = 1;
// num9という変数を作成し配列を代入する
let num9 = 1;
// nowTime1という変数にnum1(=0)を代入する
nowTime1.textContent = num1;
// nowTime2という変数にnum2(=0)を代入する
nowTime2.textContent = num2;
// nowTime3という変数にnum3(=0)を代入する
nowTime3.textContent = num3;
// nowTime4という変数にnum4(=9)を代入する
nowTime4.textContent = num4;
// nowTime5という変数にnum5(=9)を代入する
nowTime5.textContent = num5;
// nowTime6という変数にnum6(=9)を代入する
nowTime6.textContent = num6;
// nowTime7という変数にnum7(=1)を代入する
nowTime7.textContent = num7;
// nowTime8という変数にnum8(=1)を代入する
nowTime8.textContent = num8;
// nowTime9という変数にnum9(=1)を代入する
nowTime9.textContent = num9;

// スタートボタンを押したとき
// 3つの数字を1ずつ増やす
// 2回目以降　ストップボタンのdisabledの解除

// startTimerという変数の要素のclickイベントにfunctionで記述された処理を登録する
startTimer.addEventListener("click", function () {
    // setTime1という変数(ボタン)のdisabled属性を削除
    setTime1.removeAttribute("disabled");
    // setTime2という変数(ボタン)のdisabled属性を削除
    setTime2.removeAttribute("disabled");
    // setTime3という変数(ボタン)のdisabled属性を削除
    setTime3.removeAttribute("disabled");
    // timer1変数に入れたsetIntervalの繰り返し動作を取り消す
    clearInterval(timer1);
    // timer2変数に入れたsetIntervalの繰り返し動作を取り消す
    clearInterval(timer2);
    // timer3変数に入れたsetIntervalの繰り返し動作を取り消す
    clearInterval(timer3);
    // num1という変数に0を代入する
    num1 = 0;
    // num2という変数に0を代入する
    num2 = 0;
    // num3という変数に0を代入する
    num3 = 0;
    // num4という変数に0を代入する
    num4 = 9;
    // num5という変数に0を代入する
    num5 = 9;
    // num6という変数に0を代入する
    num6 = 9;
    // num7という変数に0を代入する
    num7 = 1;
    // num8という変数に0を代入する
    num8 = 1;
    // num9という変数に0を代入する
    num9 = 1;
    // timer1という変数にsetIntervalの繰り返し処理を入れる
    timer1 = setInterval(() => {
        if (num1 === 0) {
            num1 = 10;
        }
        num1 -= 1;
        nowTime1.textContent = num1;

        if (num4 === 0) {
            num4 = 10;
        }
        num4 -= 1;
        nowTime4.textContent = num4;

        if (num7 === 0) {
            num7 = 10;
        }
        num7 -= 1;
        nowTime7.textContent = num7;
        // 0.1秒ごとに以上の処理を繰り返す
    }, 1000);
    // timer2という変数にsetIntervalの繰り返し処理を入れる
    timer2 = setInterval(() => {
        if (num2 === 0) {
            num2 = 10;
        }
        num2 -= 1;
        nowTime2.textContent = num2;

        if (num5 === 0) {
            num5 = 10;
        }
        num5 -= 1;
        nowTime5.textContent = num5;

        if (num8 === 0) {
            num8 = 10;
        }
        num8 -= 1;
        nowTime8.textContent = num8;

        // 0.1秒ごとに以上の処理を繰り返す
    }, 1000);
    // timer3という変数にsetIntervalの繰り返し処理を入れる
    timer3 = setInterval(() => {
        if (num3 === 0) {
            num3 = 10;
        }
        num3 -= 1;
        nowTime3.textContent = num3;

        if (num6 === 0) {
            num6 = 10;
        }
        num6 -= 1;
        nowTime6.textContent = num6;

        if (num9 === 0) {
            num9 = 10;
        }
        num9 -= 1;
        nowTime9.textContent = num9;
    }, 1000);
});
// ストップ１を押したとき
// 数字を止める
// ストップボタンをdisabledにする
// 全部止まってたらジャッチ 条件：全部disabled＝true <> disabled=false
// すべて止まっている場合
// はずれ→再挑戦
// あたり→成功
// アラートで出す

// setTime1という変数の要素のclickイベントにfunctionで記述された処理を登録する
setTime1.addEventListener("click", function () {
    // timer1変数に入れたsetIntervalの繰り返し動作を取り消す
    clearInterval(timer1);
    // setTime1という変数の要素の属性にdisabledをtrueで追加する(disabled発動!)
    setTime1.setAttribute("disabled", true);
    console.log(num1);
    // setTime1のdisabled属性がtrueかつsetTime2のdisabled属性がtrueかつsetTime3のdisabled属性がtrueのとき(完全一致)
    if (setTime1.disabled === true && setTime2.disabled === true && setTime3.disabled === true) {
        // num1=num2=num3(完全一致)のとき
        if (num1 === num2 && num2 === num3) {
            // アラートで”成功”と表示する
            alert("成功");
        }
        // その他のとき
        else {
            // アラートで”再挑戦”と表示する
            alert("再挑戦");
        }
    }

});
// ストップ２を押したとき
// 数字を止める
// ストップボタンをdisabledにする
// 全部止まってたらジャッチ
// すべて止まっている場合
// はずれ→再挑戦
// あたり→成功
// アラートで出す

// setTime2という変数の要素のclickイベントにfunctionで記述された処理を登録する
setTime2.addEventListener("click", function () {
    // timer2変数に入れたsetIntervalの繰り返し動作を取り消す
    clearInterval(timer2);
    // setTime2という変数の要素の属性にdisabledをtrueで追加する(disabled発動!)
    setTime2.setAttribute("disabled", true);
    console.log(num2);
    // setTime1のdisabled属性がtrueかつsetTime2のdisabled属性がtrueかつsetTime3のdisabled属性がtrueのとき(完全一致)
    if (setTime1.disabled === true && setTime2.disabled === true && setTime3.disabled === true) {
        // num1=num2=num3(完全一致)のとき
        if (num1 === num2 && num2 === num3) {
            // アラートで”成功”と表示する
            alert("成功");
        }
        // その他のとき
        else {
            // アラートで”再挑戦”と表示する
            alert("再挑戦");
        }
    }

});
// ストップ３を押したとき
// 数字を止める
// ストップボタンをdisabledにする
// 全部止まってたらジャッチ
// すべて止まっている場合
// はずれ→再挑戦
// あたり→成功
// アラートで出す

// setTime3という変数の要素のclickイベントにfunctionで記述された処理を登録する
setTime3.addEventListener("click", function () {
    // timer3変数に入れたsetIntervalの繰り返し動作を取り消す
    clearInterval(timer3);
    // setTime3という変数の要素の属性にdisabledをtrueで追加する(disabled発動!)
    setTime3.setAttribute("disabled", true);
    console.log(num3);
    // setTime1のdisabled属性がtrueかつsetTime2のdisabled属性がtrueかつsetTime3のdisabled属性がtrueのとき(完全一致)
    if (setTime1.disabled === true && setTime2.disabled === true && setTime3.disabled === true) {
        // num1=num2=num3(完全一致)のとき
        if (num1 === num2 && num2 === num3) {
            // アラートで”成功”と表示する
            alert("成功");
        }
        // その他のとき
        else {
            // アラートで”再挑戦”と表示する
            alert("再挑戦");
        }
    }

});