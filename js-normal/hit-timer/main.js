// // // - スタートボタンを押す　×

// // // iの初期化　〇
// // let intervalId = 0
// // let i = 0;
// // // startTimer変数にsetIntervalを定義　△
// // // setInterval内には処理を無名関数にまとめて記述　△
// // const startTimer = setInterval((intervalId) => {
// //     // - 1秒ごとに1を足す
// //     i++;
// //     // - スタートしてから40秒経ったら強制終了 〇
// //     if (i >= 40) {
// //     i = 0;
// //     }
// //     console.log(i);
// // }, 1000);


// // // - 確認ボタンを押す　×

// // const confirmTime = clearInterval((startTimer) => {
// // });
// // // - 20秒以上21秒未満だったら成功ですとアラート　×
// // if (i >= 20 && i < 21) {
// //     alert("成功です");
// // }
// // // - 20秒未満or21秒以上の場合、その秒数をアラートして再スタート出来るようにする　×
// // else {
// //     alert(i)
// //     i = 0;
// // }

// // インターバルIDの取得
// let timer = 0;
// // sec変数の初期化
// let sec = 0;

// // 要素の取得
// const confirmTime = document.getElementById('confirmTime');
// const startTimer = document.getElementById('startTimer');

// // 確認ボタンを押したとき
// confirmTime.addEventListener('click',function() {
//     if (sec >= 20 && sec < 21) {
//         alert("成功です");
//     }
//     else {
//         alert(sec);       
//     }
//     clearInterval(timer);
//     sec = 0;
// });

// // 文字カウントアクションをcountUp定数に代入
// const countUp = () => {
//     sec += 1;
//     console.log(sec);
//     if (sec === 40) {
//       clearInterval(timer);
//       alert('終了/また挑戦しろ');
//       sec = 0;
//     }
//   };

// // スタートボタンを押したとき
// startTimer.addEventListener('click', function() {
//     clearInterval(timer);
//     timer = setInterval(countUp, 1000);
//   });

// // グローバルIDの意味
// // https://qiita.com/kogache/items/b478295903fab6962af6



// // 追加チャレンジ問題

// // インターバルIDの取得
// let timer = 0;
// // sec変数の初期化
// let sec = 0;

// // 要素の取得
// const confirmTime2 = document.getElementById('confirmTime2');
// const startTimer2 = document.getElementById('startTimer2');



// // 文字カウントアクションをcountUp定数に代入
// const countUp = () => {
//     sec += 1;
//     console.log(sec);
//     if (sec === 40) {
//       clearInterval(timer);
//       alert('終了/また挑戦しろ');
//       sec = 0;
//     }
//   };

// // スタートボタンを押したとき
// startTimer2.addEventListener('click', function() {
//     clearInterval(timer);
//     timer = setInterval(countUp, 1000);
//   });

// // 確認ボタンを押したとき
// confirmTime2.addEventListener('click',function() {
//   if (sec === 20) {
//     alert("大正解^-^");
//   }
//   else if (sec < 20) {
//     alert(`まだ${sec}秒、、、再スタートだ`);
//   }
//   else {
//     alert(`もう${sec}秒だ！再挑戦せよ`);
//   }
//   clearInterval(timer);
//   sec = 0;
//   });

let timer;

const confirmTime2 = document.getElementById("confirmTime2");
const startTimer2 = document.getElementById("startTimer2");

let startTime;
let nowTime;
let diffTime;


// カウントの方法
const countUp2 = function () {
  let checkTime = new Date();
  diffTime = Math.floor((checkTime.getTime() - startTime.getTime()) / 1000);
  if (diffTime === 40) {
    alert("終了/また挑戦しろ");
  }
};

// スタートボタン
startTimer2.addEventListener("click", function () {
  startTime = new Date();
  timer = setInterval(countUp2, 1000);
});

// 確認ボタン
confirmTime2.addEventListener("click", function () {
  nowTime = new Date();
  if (startTime === undefined) {
    return;
  }
  if (diffTime === 20) {
    alert("大正解^-^");
  } else if (diffTime < 20) {
    alert(`まだ${diffTime}秒、、、再スタートだ`);
  } else {
    alert(`もう${diffTime}秒だ！再挑戦せよ`);
  }
  clearInterval(timer);
});
