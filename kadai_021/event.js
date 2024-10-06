// HTML要素をidで取得し、定数に代入する
const btn = document.getElementById('btn');
const text = document.getElementById('text');

// ボタンがクリックされたら2秒後に文章を変更する
btn.addEventListener('click', () => {
  setTimeout(() => {
    text.textContent = 'ボタンをクリックしました';
  }, 2000);
});
