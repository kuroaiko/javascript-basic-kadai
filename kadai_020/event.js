// HTML要素をidで取得し、定数に代入する
const text = document.getElementById('text');
const btn = document.getElementById('btn');

// ボタンがクリックされたときにイベント処理を実行する
btn.addEventListener('click', () => {
  text.textContent = 'ボタンをクリックしました';
});