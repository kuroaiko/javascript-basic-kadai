// 現在の日時を生成する
const date = new Date();

// 年月日の宣言と値の取得・代入を行う
const [month, day, year] = [
  date.getMonth(),
  date.getDate(),
  date.getFullYear(),
];

// 今日の日付を出力する
console.log(year + '年', month + 1 + '月', day + '日');