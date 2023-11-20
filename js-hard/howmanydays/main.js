
// // Moment.jsライブラリ未使用

// timer = setInterval(function () {
//     // 現在時刻
//     const howmday = document.getElementById("howmday");
//     const today = new Date();
//     // ドラえもん生まれる時刻
//     const limiteDay = new Date('2112/9/3 12:00:00');
//     const elToday = today.getTime();
//     const ellimiteDay = limiteDay.getTime();
//     const count = ellimiteDay - elToday;
//     const countDate = (Math.trunc(count / 24 / 60 / 60 / 1000));
//     const countHours = (Math.trunc(count / 60 / 60 / 1000 % 24));
//     const countMinutes = (Math.trunc(count / 60 / 1000 % 60));
//     const countSeconds = (Math.trunc(count / 1000 % 60));
//     howmday.textContent = `ドラえもんが生まれるまで後${countDate}日${countHours}時間${countMinutes}分${countSeconds}秒`;
// }, 100)

// Moment.jsライブラリ使用

// const doraemon = document.createElement('p'); //要素作成
// const body = document.querySelector('body'); //親ノード取得
// body.appendChild(doraemon); //子ノード追加

// let timer; //タイマー設定

// const birthdayDoremon = moment('2112-09-03 12:00'); //日付選択

// const count = function () {
//     const date = moment();
//     const secondLeft = birthdayDoremon.diff(date, 'seconds') % 60;
//     const minuteLeft = birthdayDoremon.diff(date, 'minutes') % 60;
//     const hourLeft = birthdayDoremon.diff(date, 'hours') % 24;
//     const dayLeft = birthdayDoremon.diff(date, 'days');

//     doraemon.textContent = `ドラえもんが生まれるまで後${dayLeft}日${hourLeft}時間${minuteLeft}分${secondLeft}秒`;
// };

// timer = setInterval('count()', 1000);


// // // https://www.wakuwakubank.com/posts/606-javascript-moment/#index_id8


// 定義
// "dateSet"というidの(HTML)要素を、dateSetという変数に入れる
const dateSet = document.getElementById("dateSet");
// "dateSearch"というidの(HTML)要素を、dateSearchという変数に入れる
const dateSearch = document.getElementById("dateSearch");
// "diffTime"というidの(HTML)要素を、diffTimeという変数に入れる
const diffTime = document.getElementById("diffTime");
// timer変数を定義する
let timer;
// 本日の日時を取得しtodayという変数に入れる
const today = new Date();

// 検索ボタンを押したとき
// dateSearchという変数の要素のclickイベントにfunctionで記述された処理を登録する
dateSearch.addEventListener("click", function count() {
    console.log(dateSet.value);
    console.log(today);

    // dateSet変数のvalueをlimiteDayという変数に入れる
    const limiteDay = dateSet.value;
    console.log(limiteDay);

    // today変数に入っている時間をミリ秒に変換し、elTodayという変数に入れる
    const elToday = today.getTime();
    console.log(elToday);

    // limiteDay変数に入っている時間をミリ秒に変換し、ellimiteDayという変数に入れる
    const ellimiteDay = limiteDay.getTime();
    console.log(ellimiteDay);

    // ellimiteDay変数に入っているミリ秒 - elToday変数に入っているミリ秒を計算し、countという変数に入れる
    const count = ellimiteDay - elToday;
    console.log(count);

    // count変数に入っているミリ秒 / 1000 / 60 / 60 / 24を計算し小数点切り捨てした値をcountDateという変数に入れる
    // 1000ミリ秒＝1秒
    const countDate = (Math.trunc(count / 24 / 60 / 60 / 1000));
    // count変数に入っているミリ秒 / 1000 / 60 / 60 / 24 を計算しその余りの小数点切り捨てした値をcountHoursという変数に入れる
    const countHours = (Math.trunc(count / 60 / 60 / 1000 % 24));
    // count変数に入っているミリ秒 / 1000 / 60 / 60 を計算しその余りの小数点切り捨てした値をcountMinutesという変数に入れる
    const countMinutes = (Math.trunc(count / 60 / 1000 % 60));
    // count変数に入っているミリ秒 / 1000 / 60  を計算しその余りの小数点切り捨てした値をcountSecondsという変数に入れる
    const countSeconds = (Math.trunc(count / 1000 % 60));
    // diffTimeという変数にテキストを代入→テキストを表示させる
    diffTime.textContent = `${dateSet.value}まで後${countDate}日${countHours}時間${countMinutes}分${countSeconds}秒`;
});
// timer変数（インターバルID）にsetInterval処理を代入する
// timer = setInterval('count', 1000);
