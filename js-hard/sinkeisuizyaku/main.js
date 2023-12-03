// 定義
const panel = document.getElementById("panel");
const cardNum = [1, 2, 3, 4, 1, 2, 3, 4];
let clickCount = 0;
let firstCard;
let successCount = 0;
// チャレンジ問題
const nextPlayer = document.getElementById("nextPlayer");
const player1Point = document.getElementById("player1Point");
const player2Point = document.getElementById("player2Point");
let nowPlayer = 1;
let player1PointNom = 0;
let player2PointNom = 0;
nextPlayer.textContent = `次はplayer${nowPlayer}の番です`;
player1Point.textContent = `player1: ${player1PointNom}`;
player2Point.textContent = `player2: ${player2PointNom}`;


// ランダムにcardNum配列を変える
const createRandomCardNumbers = (cardNum) => {
    const randomCardNums = [];
    while (cardNum.length !== 0) {
        console.log(cardNum);
        const cardNumIndex = Math.floor(Math.random() * cardNum.length);
        const oneCardNum = cardNum[cardNumIndex];
        randomCardNums.push(oneCardNum);
        cardNum.splice(cardNumIndex, 1);
    }
    return randomCardNums;
    console.log(randomCardNums);
};
let randomCardNums = createRandomCardNumbers(cardNum);
console.log(randomCardNums);
console.log(cardNum);

// カード処理
for (let i = 0; i < 8; i++) {
    // カードを表示
    const frontCard = document.createElement("div");
    panel.appendChild(frontCard);
    frontCard.setAttribute("class", "card back");


    // カードをめくったとき(各カード毎に処理)
    frontCard.addEventListener('click', function () {
        if (clickCount === 0 || clickCount === 1) {

            frontCard.textContent = randomCardNums[i];
            console.log(frontCard);
            frontCard.setAttribute("class", "card cannotEvent");

            console.log(clickCount);
        }
        clickCount = clickCount + 1;

        // 1枚目を引いたとき
        if (clickCount === 1) {
            firstCard = frontCard;
        }
        // console.log(firstCard);

        // めくったカードの数値が同じか確かめる（カードがなくなるまで繰り返し）
        // 2枚引いたタイミング
        if (clickCount === 2) {

            if (firstCard.textContent === frontCard.textContent) {
                // 同じ →0.5 秒後にカードがなくなる[class "back"削除　"finish" "cannotEvent"(クリック効果無効)追加] & playerにポイント加算
                setTimeout(() => {
                    successCount = successCount + 1;
                    firstCard.setAttribute("class", "card finish cannotEvent");
                    firstCard.textContent = "";
                    frontCard.setAttribute("class", "card finish cannotEvent");
                    frontCard.textContent = "";
                    clickCount = 0;
                    // console.log(successCount);

                    // playerにポイント加算
                    if (nowPlayer === 1) {
                        player1PointNom = player1PointNom + 1;
                        player1Point.textContent = `player1: ${player1PointNom}`;
                    }
                    else {
                        player2PointNom = player2PointNom + 1;
                        player2Point.textContent = `player2: ${player2PointNom}`;

                    }

                    if (successCount === 4) {
                        setTimeout(() => {
                            alert("終了です");
                            location.reload();
                        }, 700)
                    }
                }, 500);
            }
            else {
                // 同じじゃない　→カードが 2 枚目をクリックしてから 0.5 秒後に裏返し
                // console.log(firstCard.textContent);
                // console.log(frontCard.textContent);
                setTimeout(() => {
                    firstCard.setAttribute("class", "card back");
                    firstCard.textContent = "";
                    frontCard.setAttribute("class", "card back");
                    frontCard.textContent = "";
                    clickCount = 0;

                    // player交代
                    if (nowPlayer === 1) {
                        nowPlayer = 2;
                        nextPlayer.textContent = `次はplayer${nowPlayer}の番です`;
                    }
                    else {
                        nowPlayer = 1;
                        nextPlayer.textContent = `次はplayer${nowPlayer}の番です`;
                    }
                }, 500);



                // カードがなくなる
                // 終了ですアラーム ※ポイント加算の後に行われるようにするため0.7秒後にアラーム



            }

        }

    });

}


// ★お願いしたいこと
// ・動作確認
// ・改善したほうがいい点や気になる点
// ・変数の確認
// をお願いしたいですm("m)
// 上記確認いたしました！
//     動作は特に問題なく動いておりました素晴らしいと思います！

//     次に改善した方がいい点や気になる点ですが、以下の点が気になりました。
//     変数cardsがつかっていない -> 消していいと思います。
//     oneCardNumはwhile文の中でのみ使っており一時的に数値を補完する場所なのでglobal変数にする必要はないかと！
//     ランダムにcardNum配列を変えている箇所は関数化してまとめた方が良いと思います。理由としては、cardNumの個数が増えた際等の変更に強くできますし、みやすくなります。

// const createRandomCardNumbers = (cardNumbers) => {
//     const randomCardNum = [];
//     while (cardNumbers.length !== 0) {
//         const cardNumIndex = Math.floor(Math.random() * cardNumbers.length);
//         const oneCardNum = cardNumbers[cardNumIndex];
//         randomCardNum.push(oneCardNum);
//         cardNumbers.splice(cardNumIndex, 1);
//     }
//     return randomCardNum;
// };
// let randomCardNumbers = createRandomCardNumbers(cardNumbers);


// randomCardNumは配列なので複数形の変数名にしてあげた方が読みやすいです！-> randomCardNumbers
// clickCoutにてクリックした回数で処理を変えるロジックにしていますが、clickedCards = []のような配列にクリックしたカード2つの情報を入れるとまとまっていいと思います！またif文に関しても、if (clickedCards.length === 2) のような記述になり、2枚のクリックされたカードがある時というように読めるので読みやすくなります！
// カード処理(コメント)の部分ですが、randomCardNum.forEachを使った方がrandomCardNum[i]のようにする部分を変数名で表すことができれいになると思います
// 変数名は必要最低限であると良いのでfrontCardのfrontというものが何を表すかわからないのでcardだけでいいかもです！
// frontCardにidをつける処理をしていますが、今回idを使ってとってくるといった処理をしていないのでidをいれるsetする必要はないと思います！
// 2枚引いたタイミングでの処理ですが、成功していない時を先に書くのではなく成功した時を先に書いた方がみやすさはいいと思います！
// player1PointNon -> Nonは何の略ですかね？Numでしょうか
// 終了ですアラームですが、以下のように書くと毎回実行されるのをふせげます。ただ、以下のように書くとsuccessCountが4の時に実行されないのでカードを消すタイミングのsetTimeoutの中に入れてあげましょう！

// if (successCount === 4) {
//     setTimeout(() => {
//         alert("終了です");
//         location.reload();
//     }, 700);
// }


// 上記で変数の確認もできていると思います！

// clickedCardsに変更すると色々と変更するところが出てくると思いますが、まとめやすくもなるのでぜひチャレンジしてみてください！ 

