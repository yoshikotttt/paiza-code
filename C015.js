const lines = ["3", "1 1024", "11 2048", "21 4196"];

const receiptData = lines.slice(1);

// 日付と支払いを map して、各データごとのポイントを計算し、配列に格納
// この時点ではデータは文字列型なので、支払いを計算に使用する際には Number() で数値に変換する
// （しなくてもできてしまいますが、明示的な変換が推奨されます）
const calcPoint = (array) =>
  array.map((data) => {
    const [day, payment] = data.split(" ");

    if (day.includes("5")) {
      return Math.floor(Number(payment) * 0.05);
    } else if (day.includes("3")) {
      return Math.floor(Number(payment) * 0.03);
    } else {
      return Math.floor(Number(payment) * 0.01);
    }
  });

// 配列の要素を合計
const allPoints = (array) => array.reduce((sum, element) => sum + element, 0);

console.log(allPoints(calcPoint(receiptData)));