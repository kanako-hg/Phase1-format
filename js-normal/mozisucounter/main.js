// 変数の定義
const resetBtn = document.getElementById('resetBtn');
const textCounter = document.getElementById('textCounter');
const sampleForm = document.getElementById('sampleForm');

const iniDel = document.getElementById('iniDel');
const endDel = document.getElementById('endDel');
textCounter.innerText = 400
//文字を入力しながらカウントする
function onKeyUp() {
    // 入力されたテキスト
    var inputText = sampleForm.value;
    // 文字数を反映
    textCounter.innerText = 400 - inputText.length;
};
// 頭文字削除
function v_iniDel() {
    // 入力されたテキスト
    var Text = sampleForm.value;
    // console.log(Text);
    var inputText = Text.slice(1);
    // console.log(inputText);
    sampleForm.value = inputText;
};

// 末尾文字削除
function v_endDel() {
    // 入力されたテキスト
    var Text = sampleForm.value;
    // console.log(Text);
    var inputText = Text.slice(0, -1);
    // console.log(inputText);
    sampleForm.value = inputText;
};


//sampleFormに文字を入力したときのイベント
sampleForm.addEventListener('keyup', onKeyUp);
// iniDelを押したときに
iniDel.addEventListener('click', v_iniDel);
// endDelを押したときに
endDel.addEventListener('click', v_endDel);
//リセットボタンで一括削除
resetBtn.addEventListener('click', function () {
    // window.location.reload();
    inputText = "";
    textCounter.innerText = 400
});

