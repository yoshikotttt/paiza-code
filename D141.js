const data = lines[0].split("").map(Number);

const checkNumber = (data) => {
  if (
    data[0] === data[1] ||
    data[0] === data[2] ||
    data[0] === data[3] ||
    data[1] === data[2] ||
    data[1] === data[3] ||
    data[2] === data[3]
  ) {
    console.log("NG");
  } else {
    console.log("OK");
  }
};

checkNumber(data);

//リファクタ後
　const data = lines[0].split("");

 const checkNumber = (data) => {
   const counts = {};

   for (let num of data) {
     counts[num] = (counts[num] || 0) + 1;
     if (counts[num] > 1) {
       console.log("NG");
       return;
     }
   }
   console.log("OK");
 };

 checkNumber(data);