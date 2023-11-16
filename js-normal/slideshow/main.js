// 定義
const pushBtn = document.getElementById("pushBtn");
const imgSection = document.getElementById('viewImg');
let imgNum = 0;
const skipBtn = document.getElementById("skipBtn");


// - 連想配列に画像とボタンの中身の文字をセット
// const spring = { img: './img/slide1.png', text: '春へ' };
// const summer = { img: './img/slide2.png', text: '夏へ' };
// const autumn = { img: './img/slide3.png', text: '秋へ' };
// const winter = { img: './img/slide4.png', text: '冬へ' };
const data = [
    { img: './img/slide1.png', text: '春へ' },
    { img: './img/slide2.png', text: '夏へ' },
    { img: './img/slide3.png', text: '秋へ' },
    { img: './img/slide4.png', text: '冬へ' }];
console.log(data[2].text);

// ボタンに初期値"春へ"をセットする
pushBtn.textContent = (data[imgNum].text);
// 画像に初期値の冬の画像をセットする
imgSection.setAttribute('src', data[imgNum].img);

// - ボタンを押す
pushBtn.addEventListener("click", function () {
    //ここに写真とボタンの中の処理を書きます
    // - 3だったら0にして、季節を冬に戻す
    if (imgNum === 3) {
        imgNum = 0;
    }
    // - それ以外だったら1を足して季節を進める
    else {
        imgNum += 1;
    }
    // - 現在の数字を確認
    console.log(imgNum);
    // ボタンと画像の再セット
    pushBtn.textContent = (data[imgNum].text);
    imgSection.setAttribute('src', data[imgNum].img);

});

// スキップボタンを押したときに
skipBtn.addEventListener("click", function () {
    imgNum = document.getElementById('seasonNum').value;
    // imgNum = parseInt(imgNum);
    console.log(imgNum);
    imgSection.setAttribute('src', data[imgNum].img);
    pushBtn.textContent = data[imgNum].text;
});

