
const lines = ["3 4", "2", "1"];

 //折り紙の枚数と、一辺の長さ
const[totalOrigami,sideLength] = lines[0].split(' ').map(Number);
 //残りの数字を足すと、重なる部分になる
const overlapArea = lines.slice(1).map(Number).reduce((sum,element) => sum + element,0);
  
 //計算式
const getSize = (totalOrigami,sideLength,overlapArea) => sideLength * (totalOrigami * sideLength - overlapArea);
    
console.log(getSize(totalOrigami,sideLength,overlapArea));