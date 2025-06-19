// ボタン要素を取得
const btn = document.getElementById('btn');

// ボタンがクリックされたとき、h2要素のテキストを変更
btn.addEventListener('click', () => {
  const h2Text = document.getElementById('text');
  h2Text.textContent = "ボタンがクリックされました";
})

