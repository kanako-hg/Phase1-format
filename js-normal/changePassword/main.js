// 定義
const nowPassword = document.getElementById('nowPassword');
let PasswordValue = 'aaaaa';
const setPassword = document.getElementById("setPassword");

// 変更ボタンを押したとき
setPassword.addEventListener("click", function () {
    // 変更ボタンを押したときの処理
    // - 現在のパスワードを取得
    // - 入力した現在のパスワードと新しいパスワードを取得
    const confirmPassword = document.getElementById('confirmPassword').value;
    const newPassword = document.getElementById('newPassword').value;
    console.log(confirmPassword);
    console.log(newPassword);
    // - 現在のパスワードと入力した現在のパスワードが一致するか
    if (PasswordValue === confirmPassword) {
        if (PasswordValue !== newPassword) {
            if (newPassword.length >= 8) {
                PasswordValue = newPassword;
                nowPassword.textContent = `現在のパスワードは ${PasswordValue}`;
                alert(`新しいパスワードは ${PasswordValue}です`);
            }
            else {
                alert('パスワードは8文字以上にしてください！');
            }
        }
        else {
            alert('同じパスワードはつかえません！');
        }
    }

    else {
        alert('古いパスワードが間違っています！');
    }


    // - それ以外は引っかかる点をアラートする
});




// /　/は正規表現の合図です。

// (.): これは任意の1文字を表します。丸括弧() で囲まれているので、この1文字がキャプチャされます。.は任意の1文字にマッチします。

// \1: これはバックリファレンスと呼ばれ、前のキャプチャされたグループと同じ内容にマッチします。1 は最初のキャプチャグループを指します。つまり(.)で入ってきた文字を指す

// よって、/(.)\1/ は、同じ文字が連続して2回現れるパターンにマッチする正規表現です！
// 例えば、"aa"、"bb"、"11"など、同じ文字が隣接して2回続くようなパターンにマッチします。
// つまりマッチしたらresult = trueになるのでelseの中が実行されます。 

// 察しの通り、ハイライトの部分でやっていることとしては、
// 正規表現.test()関数で入力値がバリデーション（入力する際の規約）をパスしているかチェックしています。
// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test

