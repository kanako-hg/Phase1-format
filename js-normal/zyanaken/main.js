// 定義
const gameStart = document.getElementById("gameStart");
const cpHand = document.getElementById("cpHand");
cpHand.textContent = '相手の手：';
const log = document.getElementById('log');
log.textContent = '結果：';




// - 決定を押した時の処理
gameStart.addEventListener("click", function () {
    // - 自分の手を選ぶ
    const myNum = Number(document.getElementById('myHand').value);
    console.log(myHand.value);
    // - 乱数を生成
    const cpNum = Math.floor(Math.random() * 3);
    console.log(cpNum);
    // - 生成した数によって相手の手を画面に表示する
    if (cpNum === 0) {
        cpHand.textContent = '相手の手：グー';
    } else if (cpNum === 1) {
        cpHand.textContent = '相手の手：チョキ';
    } else if (cpNum === 2) {
        cpHand.textContent = '相手の手：パー';
    }
    // - 自分の手と生成した数を比較して勝敗を表示する
    switch (myNum) {
        case 0: {
            if (cpNum === 0) {
                log.textContent = "結果：引き分け";
            }
            else if (cpNum === 1) {
                log.textContent = '結果：勝ち';
            }
            else if (cpNum === 2) {
                log.textContent = '結果：負け';
            }
            break;
        }
        case 1: {
            if (cpNum === 0) {
                log.textContent = '結果：負け';
            } else if (cpNum === 1) {
                log.textContent = '結果：引き分け';
            } else if (cpNum === 2) {
                log.textContent = '結果：勝ち';
            }
            break;
        }
        case 2: {
            if (cpNum === 0) {
                log.textContent = '結果：勝ち';
            } else if (cpNum === 1) {
                log.textContent = '結果：負け';
            } else if (cpNum === 2) {
                log.textContent = '結果：引き分け';
            }
            break;
        }
    }
});


// 構文的には問題ないのでエラーは出ないです！
// 原因
// jsファイル25行目からのswitch文でmyNumの値の"0" or "1" or "2" とcase の 0, 1, 2の値が合致していないためです。

// 解説
// myNumの値は何かというと11行目で取得してきたHTML要素の.value、つまり"0" or "1" or "2"(文字列)です。その値とcase の 0, 1, 2(数値)は厳密な比較では一致しません。型が違います。
// switch文は厳密な比較を行う仕様なので、条件に当てはまっていません。

// if文では === で厳密な型比較を行い、== だとゆるい型比較になります。
// 例）1 === "1"→false       1 == "1"→true、内部的に"1"を1に変換して判定してくれている

// https://zenn.dev/bokutano26/articles/442f11f4ec69bf

// 解決策(どれか一つでOK)
// ・switch文のcaseを"0" "1" "2"に変える
// ・myNumの値を数値に型を変えてやる→型変換方法は調べればいくつかあるが、11行目でconst myNum = Number(document.getElementById("log").value)でいける。
// ・switch文ではなく、if文を使い == で比較してあげる→できれば === で比較した方が安全なため非推奨。
// ・myNumは文字列でcpNumは数値なのは嫌なので、どちらかに型を統一し、、if文を使い === で比較してあげる→推奨。

// 気になった点
// ・switch文とif文が混在してますが、どちらでもできるので、どちらかに統一した方がいい
// ・そもそもあまりswitch文の中にswitch文、if文も、(ネストする、入れ子にすると言う) はよくない→可読性の低下、バグの原因になるため。できないときは仕方ない→特に、switch文をネストするのはbreakなどを書き忘れてバグになやすいためよくない、ネストするならまだif文にすべきかなと思います！ 
