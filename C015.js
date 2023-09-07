const lines = ["3", "1 1024", "11 2048", "21 4196"];

const receiptData = lines.slice(1);

const calcPoint = (array) =>
  array.map((data) => {
    const [day, payment] = data.split(" ");


    //Numberをつけなくてもできてしまったが、つけたほうが良い
    if (day.includes("5")) {
      return Math.floor(Number(payment) * 0.05);
    } else if (day.includes("3")) {
      return Math.floor(Number(payment) * 0.03);
    } else {
      return Math.floor(Number(payment) * 0.01);
    }
  });

const allPoints = (array) => array.reduce((sum, element) => sum + element, 0);

console.log(allPoints(calcPoint(receiptData)));
