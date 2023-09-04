const lines = ["1 80 40"];

const [all, raw, processed] = lines[0].split(" ");

const calculateRemains = (a, b, c) =>
  a - a * b * 0.01 - (a - a * b * 0.01) * c * 0.01;
  
console.log(calculateRemains(all, raw, processed));
