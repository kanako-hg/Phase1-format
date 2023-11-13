// 秒、分、時の変数を定義
let leftHour;
let leftMin;
let leftSec;


// 下に秒数が表示されるHTML要素を取得
const nowTime = document.getElementById('nowTime');
// 初期数値は10を指定
let sec = 10;


// 変更ボタンの要素取り出し→変更ボタン処理
const setTime = document.getElementById('setTime');

// 変更ボタンを押したときの処理
setTime.addEventListener('click', function () {
    sec = document.getElementById('inputTime').value;
    leftSec = sec % 60;
    leftMin = Math.floor((sec % 3600) / 60);
    leftHour = Math.floor(sec / 3600);
    nowTime.textContent = `残り${leftHour}時間${leftMin}分${leftSec}秒：セット完了です`;
});

// スタートボタンを押したときの処理

// 処理を関数化
let timer;

const countDown = function () {
    sec -= 1;
    leftSec = sec % 60;
    leftMin = Math.floor((sec % 3600) / 60);
    leftHour = Math.floor(sec / 3600);
    nowTime.textContent = `残り${leftHour}時間${leftMin}分${leftSec}秒`;
    if (sec === 0) {
        alert("終了");
        clearInterval(timer);
    }
};
// イベントリスナー
const startTimer = document.getElementById('startTimer');
startTimer.addEventListener("click", function () {
    clearInterval(timer);
    timer = setInterval('countDown()', 1000);
});

// ストップボタンを押したときの処理

// イベントリスナー
const stopTimer = document.getElementById('stopTimer');
stopTimer.addEventListener("click", function () {
    clearInterval(timer);
    leftSec = sec % 60;
    leftMin = Math.floor((sec % 3600) / 60);
    leftHour = Math.floor(sec / 3600);
    nowTime.textContent = `残り${leftHour}時間${leftMin}分${leftSec}秒でストップしました`;
});



