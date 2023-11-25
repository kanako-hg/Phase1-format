// 定義
// "answerNum"というidの(HTML)要素を、answerNumという変数に入れる
const answerNum = document.getElementById("answerNum");
// "numCheck"というidの(HTML)要素を、numCheckという変数に入れる
const numCheck = document.getElementById("numCheck");
// randomNum1という変数を作成する
let randomNum1;
// randomNum2という変数を作成する
let randomNum2;
// randomNum3という変数を作成する
let randomNum3;
// numbers_cpという空の配列を作成する
let numbers_cp = [];
// remain変数を作成し10を代入する
let remain = 1;
// "remainTurn"というidの(HTML)要素を、remainTurnという変数に入れる
const remainTurn = document.getElementById("remainTurn");
// remainTurn"というidの(HTML)要素に`あと残り${remain}回です`と表示する
remainTurn.textContent = `あと残り${remain}回です`;


// ランダムな３つの値をnumbers_cpという空の配列に追加するcreateCpNumという関数を作成
const createCpNum = () => {
    // 1桁目
    // // randomNum1の変数に0~9(小数点なし)のランダムな値を代入する
    // randomNum1 = Math.floor(Math.random() * 10);
    // // numbers_cpという空の配列にrandomNum1の値を追加する
    // numbers_cp.push(randomNum1);

    numbers_cp[0] = Math.floor(Math.random() * 10);


    // 2桁目
    // randomNum2の変数に0~9(小数点なし)のランダムな値を代入する
    randomNum2 = Math.floor(Math.random() * 10);
    // randomNum1 = randomNum2のときは再度 randomNum2の変数に1~9(小数点なし)のランダムな値を作成する
    while (randomNum1 === randomNum2) {
        randomNum2 = Math.floor(Math.random() * 10);
    };
    // numbers_cpという空の配列にrandomNum2の値を追加する
    numbers_cp.push(randomNum2);



    // 3桁目
    // randomNum3の変数に0~9(小数点なし)のランダムな値を代入する
    randomNum3 = Math.floor(Math.random() * 10);
    // randomNum1 = randomNum3　もしくは　randomNum2 = randomNum3のときは再度 randomNum3の変数に0~9(小数点なし)のランダムな値を作成する
    while (randomNum1 === randomNum3 || randomNum2
        === randomNum3) {
        randomNum3 = Math.floor(Math.random() * 10);
    };
    // numbers_cpという空の配列にrandomNum3の値を追加する
    numbers_cp.push(randomNum3);



    // 確認用
    console.log(numbers_cp);
};

// createCpNum関数の実行
createCpNum();
// numbers_cpに入っている配列の全要素を連結して、作成した文字列を、定義したanswerCp(の初期値として)に代入している
let answerCp = numbers_cp.join("");

// 確認用
console.log(answerCp);


// 答え合わせボタンを押したとき
numCheck.addEventListener("click", function () {
    // 確認用
    console.log(answerNum.value);

    // answerNumの値(文字列)を配列にし、数値の配列に変えnumbers変数に代入する
    let numbers = answerNum.value.split('').map(Number);

    // 確認用
    console.log(numbers);

    // 空白のとき
    if (numbers.length === 0) {
        alert("文字を入力してください");
    }
    // 0以下のとき
    else if (numbers.every((elm) => {
        return (elm < 0);
    })) {
        alert("0以上の数値を入力してください");
    }
    // 3桁以外の処理
    else if (numbers.length !== 3) {
        // "3桁の数を入れて下さい"とアラート
        alert("3桁の数を入れてください");
    }
    // numbers配列のそれぞれが同じ数字の場合
    else if (numbers[0] === numbers[1] || numbers[0] === numbers[2] || numbers[1] === numbers[2]) {
        // "同じ数を2回使ってはいけません"とアラート
        alert("同じ数を2回使ってはいけません");
    }
    // numbers配列の1桁目が0の場合
    else if (numbers[0] === 0) {
        // "3桁の数を入れて下さい"とアラート
        alert("1桁目に0を入れないでください");
    }
    // その他
    else {
        // eat変数を定義し0を代入する
        let eat = 0;
        // bite変数を定義し0を代入する
        let bite = 0;
        // 変数iを定義し0を代入、numbers変数の長さ分(3)以下→インデックス２まで下記内容繰り返し
        for (let i = 0; i < numbers.length; i++) {
            // 確認用
            console.log(numbers.length);

            // 変数jを定義し0を代入、numbers_cp変数の長さ分(3)以下→インデックス２まで下記内容繰り返し
            for (let j = 0; j < numbers_cp.length; j++) {

                // numbers[i] = numbers_cp[j]のとき下記内容の繰り返し
                if (numbers[i] === numbers_cp[j]) {

                    // i = j　のとき
                    if (i === j) {
                        // eat変数に1たしてeat変数に再代入
                        eat = eat + 1;
                    }
                    // その他
                    else {
                        // bite変数に1たしてbite変数に再代入
                        bite = bite + 1;
                    }
                }

            }

        }
        // 正解したとき
        if (eat === 3) {
            // 正解!アラートを表示する
            alert(`正解!`);
            // リロードする
            location.reload();
        }
        // その他
        else {
            // EATとBITEの数をアラート
            alert(`${eat} EAT, ${bite} BITE`);
        }
        // answerNum.valueの値を空にする
        answerNum.value = "";
        // remain変数の数値を-１してremain変数に再代入
        remain = remain - 1;
        // remainTurn"というidの(HTML)要素に`あと残り${remain}回です`と表示する
        remainTurn.textContent = `あと残り${remain}回です`;
        // remain = 0のとき
        if (remain === 0) {
            // remainTurn"というidの(HTML)要素に`終了です。答えは${answerCp}でした`と表示する
            remainTurn.textContent = `終了です。答えは${answerCp}でした`;
            // 5秒後にリロードする
            setTimeout(() => {
                location.reload();
            }, 5000);
        }
    }
}
);


// レビューしました！不明点あれば質問してください！

// 動作確認で気になった点
// 何回か試したら、同じ数字の正解(numbers_cp)が作られてしまう(例411) 3桁以外入れた場合でも実行できてしまう→js側で処理をブロックして、アラート出した方がいい、もしくはhtml側で、そもそも3桁以上の数字をinputタグに入力できないようにする
// 0.1や-1を入力したら判定処理が実行できてしまう
// 空白の際 は 実行はできないが、「同じ数を2回使ってはいけません」のアラートが出る→結果判定処理は実行されていないので、問題はないが「文字を入力してください」などのアラートにしたい
// 答え全て合っていたら、正解のアラートか何かを出して正解したことを伝え、リロードした方がより親切
// 0~9までの数字から予測する実装になっているので、一桁目に0が来てもいいというのはアプリを使う人に分かりずらいので、その説明を書くor 0は省いてもいいかも or 正解の一桁目だけ0を許容しないようにする
// 回数0で終了になった後も遊べてしまい、回数も「残り-1回」とかになってしまう→私だったら、終了アラート出してリロード or リロードなしでもう一度遊べるように　などするかもです
  

// コメントが意味が間違っている箇所
// 6,8,11行目　→let number1などは変数として定義しているだけで、それ以外は何もしていない。HTML要素などは連携していないので関係ないです。
// 24 ,3 0,40　→その記述だと1~9でなく、0~9がつくられます。
// 26, 36, 46　→厳密にいうと「空の配列の最後に追加」ですかね。空の配列に「代入」は設定、上書きの意味も含むので違和感、Array.push()は上書きでなく配列の最後に追加なので
// 58  　→全 体的に違ってます。代入(=)の時は基本、右→左で読みましょう。正しくは「numbers_cpに入っている配列の全要素を連結して、作成した文字列を、定義したanswerCp(の初期値として)に代入している」です。
// 85　→Array.lengthまたはSrtring.lengthは値ではなく、配列の長さ(配列内の要素数)または文字列の長さ(文字数)がわかるものです。分からなければ、.length調べてみましょう！
// 107, 112,112　→分かってるかもですが、変数に1 たしたり引いたりしてそれを変数に再代入してます。再代入しないと、たし引きしただけで、変数の値は変わりません。

// コード面
// 気になる点
// 13 　→エラーにはならず動いちゃいますが、この書き方は問題です。これだとこのファイル外からでも書き換えられる変数として定義されてしまうのでバグになりそうで危険。windowオブジェクトに定義される。
// 自分で作る変数は必ず letやconstで定義しましょう。そうしたら前回の配列は残らないので54行目の記述は消せると思いますが、いかがでしょうか。
// 22　→ cpNumは再代入の必要ないのでletよりconstの方がいい
// 25, 31, 41　→仮に1〜9までにするのであれば Math.floor(Math.random() * 9 + 1).
// 43 　→while文の条件が少しやりたいことと違うので、数字が被る挙動になってしまってます！number1 === number3 || number2 === number3が正しいと思います。＆＆だと3桁とも一緒じゃないと再生成されないです。

// 改善できそうな点（問題ではないので、できればでOK）
// 変数名が全体的に抽象的で分かりにくいため、意識して命名する癖をつけると良い。変数名はこれが絶対とかはないので難しいですが、最低限他の人が見てわかるように。　例）number1→randomNum、cpNum→ createCpNum
// JSでは変数名でanswer_cp(スネークケース)を使うより、answerCp(キャメルケース)が一般的なので、後者の方がいい。参考→https://310nae.com/naming-method/
// 7, 9, 11　→問題はないですが、あとで配列に追加するなら、最初から配列に入れれば良いのかなと思いました。そうしたら不要になる。25などでこうすればいける。numbers_cp[0] = Math.floor(Math.random() * 10);
// 86　→ 75行目からのif文の中にif文を入れてますが、あまり入れ子にする(ネストする)のはコードの可読性(読みやすさ)が悪くなり、良くないです。他の書き方ができないか検討しましょう。今回は下記でも同じ動作になります。
// if (
//     numbers[0] === numbers[1] ||
//     numbers[0] === numbers[2] ||
//     numbers[1] === numbers[2]
// ) {
//     //処理1
// }
// else if (numbers.length === 0) {
//     //処理2
// } else {
//     //処理3
// }


// const answerNum = document.getElementById("answerNum");
// const numCheckBtn = document.getElementById("numCheck");
// const remainTurn = document.getElementById("remainTurn");

// let cpNumsArray = [];
// let remainNum = 10;

// // 答え生成のwhile文
// while (cpNumsArray.length === 0) {
//     const randomNumsArray = [
//         Math.floor(Math.random() * 9 + 1),
//         Math.floor(Math.random() * 9 + 1),
//         Math.floor(Math.random() * 9 + 1),
//     ];
//     if (
//         // 全ての数字が異なる場合breakでwhile文を抜ける
//         randomNumsArray[0] !== randomNumsArray[1] &&
//         randomNumsArray[1] !== randomNumsArray[2] &&
//         randomNumsArray[0] !== randomNumsArray[2]
//     ) {
//         cpNumsArray = randomNumsArray;
//         break;
//     }
// }
// // 答え確認用のコンソール
// console.log(cpNumsArray);

// const checkAnswer = () => {
//     const inputNumbersArray = answerNum.value.split("").map(Number);

//     // 入力された値が3桁かどうか === 0とするよりも範囲が広いので、こっちがいい
//     if (inputNumbersArray.length !== 3) {
//         alert("3桁の数を入れて下さい");
//     } else if (
//         inputNumbersArray[0] === inputNumbersArray[1] ||
//         inputNumbersArray[0] === inputNumbersArray[2] ||
//         inputNumbersArray[1] === inputNumbersArray[2]
//     ) {
//         alert("同じ数を2回使ってはいけません");
//     } else {
//         let eat = 0;
//         let bite = 0;
//         for (let i = 0; i < inputNumbersArray.length; i++) {
//             for (let j = 0; j < cpNumsArray.length; j++) {
//                 if (inputNumbersArray[i] === cpNumsArray[j]) {
//                     if (i === j) {
//                         eat = eat + 1;
//                     } else {
//                         bite = bite + 1;
//                     }
//                 }
//             }
//         }

//         alert(`${eat} EAT, ${bite} BITE`);
//         // 追加
//         if (eat === 3) {
//             alert("おめでとう！正解です");
//             // リロード処理
//             location.reload();
//         }
//         answerNum.value = "";
//         remainNum = remainNum - 1;
//         remainTurn.textContent = `あと残り${remainNum}回です`;
//         if (remainNum === 0) {
//             const cpNumsArrayToString = cpNumsArray.join("");
//             alert(`終了です。正解は${cpNumsArrayToString}でした`);
//             // リロード処理
//             location.reload();
//         }
//     }
// };

// remainTurn.textContent = `あと残り${remainNum}回です`;
// numCheckBtn.addEventListener("click", checkAnswer);